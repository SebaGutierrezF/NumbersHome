const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'https://sebagutierrezf.github.io',
  methods: ['GET', 'POST'],
  credentials: true
}));

// Ruta principal para consultar números
app.post('/api/phone', async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    
    // Aquí irá la lógica para consultar el número
    const response = await axios.get(
      `https://api.numlookupapi.com/v1/validate/${phoneNumber}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.API_KEY}`
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ 
      error: 'Error al procesar la solicitud',
      details: error.message 
    });
  }
});

// Ruta de prueba
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 