import express from 'express';
import cors from 'cors';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

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

// Inicializar Firebase Admin
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');
const firebaseApp = initializeApp({
    credential: cert(serviceAccount)
});
const db = getFirestore(firebaseApp);

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
        // Primero intentar obtener de cache
        const cacheRef = db.collection('phoneValidations').doc(phoneNumber);
        const cacheDoc = await cacheRef.get();
        
        if (cacheDoc.exists) {
            console.log('Returning cached validation for:', phoneNumber);
            return cacheDoc.data();
        }

        // Si no está en cache, validar con API
        const response = await axios.get(
            `https://api.numlookupapi.com/v1/validate/${phoneNumber}`,
            {
                headers: {
                    'Authorization': `Bearer ${config.apiKey}`
                }
            }
        );

        // Guardar en cache
        await cacheRef.set({
            ...response.data,
            cachedAt: new Date().toISOString()
        });

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
    res.json({ 
        status: 'ok', 
        timestamp: new Date(),
        firebase: !!db
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
    console.log(`CORS origin: ${config.corsOrigin}`);
});
