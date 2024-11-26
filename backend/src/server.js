import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { validatePhone } from './controllers/phone.js';
import { initializeFirebase } from './config/firebase.js';
import { logger } from './utils/logger.js';

// Configurar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configurar CORS
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Middleware para parsear JSON
app.use(express.json());

// Inicializar Firebase
try {
    initializeFirebase();
    logger.info('Firebase inicializado correctamente');
} catch (error) {
    logger.error('Error al inicializar Firebase:', error);
    process.exit(1);
}

// Rutas
app.post('/api/validate', validatePhone);

// Manejo de errores global
app.use((err, req, res, next) => {
    logger.error('Error no manejado:', err);
    res.status(500).json({
        error: 'Error interno del servidor'
    });
});

// Iniciar servidor
app.listen(port, () => {
    logger.info(`Servidor escuchando en puerto ${port}`);
});
