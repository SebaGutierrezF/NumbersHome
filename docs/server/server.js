import express from 'express';
import cors from 'cors';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Configurar dotenv con la ruta correcta
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '../../.env') });

// Configuración
const config = {
    port: process.env.PORT || 3000,
    corsOrigin: process.env.CORS_ORIGIN || 'https://sebagutierrezf.github.io',
    apiKey: process.env.API_KEY
};

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: config.corsOrigin,
    methods: ['GET', 'POST'],
    credentials: true
}));

// Controladores
const validatePhoneNumber = async (phoneNumber) => {
    try {
        const response = await axios.get(
            `https://api.numlookupapi.com/v1/validate/${phoneNumber}`,
            {
                headers: {
                    'Authorization': `Bearer ${config.apiKey}`
                }
            }
        );
        return response.data;
    } catch (error) {
        throw new Error(`Error validating phone number: ${error.message}`);
    }
};

// Rutas
app.post('/api/phone', async (req, res) => {
    try {
        const { phoneNumber } = req.body;
        const validationData = await validatePhoneNumber(phoneNumber);
        
        res.json({
            message: 'Phone number validated',
            data: validationData
        });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            error: error.message
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

// Manejo de errores global
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: 'An unexpected error occurred'
    });
});

// Iniciar servidor
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
    console.log(`CORS origin: ${config.corsOrigin}`);
});
