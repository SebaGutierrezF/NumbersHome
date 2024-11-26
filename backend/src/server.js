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

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok',
        environment: process.env.NODE_ENV || 'production',
        timestamp: new Date().toISOString(),
        cors: process.env.CORS_ORIGIN || '*'
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

// Servir archivos estáticos y manejar SPA
if (!isDevelopment) {
    // Servir archivos estáticos desde el directorio dist
    const staticPath = path.join(__dirname, '../../frontend/dist');
    console.log('Serving static files from:', staticPath);
    app.use(express.static(staticPath));

    // Manejar todas las rutas no-API para SPA
    app.get('*', (req, res) => {
        if (!req.path.startsWith('/api')) {
            res.sendFile(path.join(staticPath, 'index.html'));
        }
    });
}

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'production'} mode`);
    console.log(`API Health check: http://localhost:${PORT}/api/health`);
    console.log(`CORS Origin: ${process.env.CORS_ORIGIN || '*'}`);
    console.log(`Static files path: ${!isDevelopment ? path.join(__dirname, '../../frontend/dist') : 'Not serving in development'}`);
});
