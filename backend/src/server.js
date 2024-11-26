// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import { validatePhone } from './controllers/phone.js';

// Configuración de ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const isDevelopment = process.env.NODE_ENV === 'development';

// Middleware
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST'],
    credentials: true
}));

// Servir archivos estáticos del frontend
if (!isDevelopment) {
    const staticPath = path.join(__dirname, '../../../frontend/dist');
    console.log('Serving static files from:', staticPath);
    app.use(express.static(staticPath));
}

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok',
        environment: process.env.NODE_ENV || 'production',
        timestamp: new Date().toISOString()
    });
});

app.post('/api/phone', validatePhone);

// Error handling para API
app.use('/api', (err, req, res, next) => {
    console.error('API Error:', err.stack);
    res.status(err.status || 500).json({
        error: err.message || 'Something went wrong!',
        status: err.status || 500
    });
});

// Servir index.html para todas las rutas no-API en producción
if (!isDevelopment) {
    app.get('*', (req, res) => {
        if (!req.path.startsWith('/api')) {
            const indexPath = path.join(__dirname, '../../../frontend/dist/index.html');
            console.log('Serving SPA from:', indexPath);
            res.sendFile(indexPath);
        }
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'production'} mode on port ${PORT}`);
    if (!isDevelopment) {
        console.log('Serving frontend static files');
    }
});
