import express from 'express';
import cors from 'cors';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

// Configurar dotenv
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '../.env') });

// Configuración
const config = {
    port: process.env.PORT || 3000,
    corsOrigin: process.env.CORS_ORIGIN || 'https://sebagutierrezf.github.io',
    apiKey: process.env.API_KEY,
    firebase: {
        apiKey: process.env.VITE_FIREBASE_API_KEY,
        authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.VITE_FIREBASE_APP_ID,
        measurementId: process.env.VITE_MEASUREMENT_ID
    }
};

// Inicializar Firebase
const firebaseApp = initializeApp(config.firebase);
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

const saveToFirebase = async (data) => {
    try {
        const docRef = await addDoc(collection(db, 'numbers'), {
            ...data,
            timestamp: new Date()
        });
        return docRef;
    } catch (error) {
        throw new Error(`Error saving to Firebase: ${error.message}`);
    }
};

const queryFirebase = async (phoneNumber) => {
    try {
        const q = query(
            collection(db, 'numbers'),
            where('phoneNumber', '==', phoneNumber),
            orderBy('timestamp', 'desc'),
            limit(1)
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.empty ? null : querySnapshot.docs[0].data();
    } catch (error) {
        throw new Error(`Error querying Firebase: ${error.message}`);
    }
};

// Rutas
app.post('/api/phone', async (req, res) => {
    try {
        const { phoneNumber } = req.body;
        
        // Primero buscar en Firebase
        const existingData = await queryFirebase(phoneNumber);
        if (existingData) {
            return res.json({
                message: 'Phone number found in cache',
                data: existingData,
                cached: true
            });
        }

        // Si no existe, validar y guardar
        const validationData = await validatePhoneNumber(phoneNumber);
        await saveToFirebase({
            phoneNumber,
            ...validationData
        });

        res.json({
            message: 'Phone number validated and saved',
            data: validationData,
            cached: false
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

// Iniciar servidor
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
    console.log(`CORS origin: ${config.corsOrigin}`);
});
