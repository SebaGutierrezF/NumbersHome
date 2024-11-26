const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config({ path: '../.env' });

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
        
        if (!phoneNumber) {
            return res.status(400).json({ 
                error: 'Bad Request',
                message: 'Phone number is required' 
            });
        }

        const data = await validatePhoneNumber(phoneNumber);
        res.json(data);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ 
            error: 'Internal Server Error',
            message: 'Error processing the request',
            details: error.message 
        });
    }
});

app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
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
    console.log(`CORS enabled for origin: ${config.corsOrigin}`);
});
