// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { validatePhone } from './controllers/phone.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*'
}));

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Routes
app.post('/api/phone', validatePhone);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        details: err.message
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
