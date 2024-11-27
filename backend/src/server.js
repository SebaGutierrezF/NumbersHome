import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { validatePhone } from './controllers/phone.js';

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

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Rutas
app.post('/api/phone', validatePhone);

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Error interno del servidor',
        details: err.message
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
