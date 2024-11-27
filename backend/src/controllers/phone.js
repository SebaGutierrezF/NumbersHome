// phone.js
import { validatePhoneNumber } from '../services/validation.js';

export async function validatePhone(req, res) {
    try {
        const { phoneNumber } = req.body;

        if (!phoneNumber) {
            return res.status(400).json({
                error: 'Se requiere un número de teléfono'
            });
        }

        // Limpiar el número de teléfono de espacios y caracteres especiales
        const cleanPhoneNumber = phoneNumber.replace(/\s+/g, '').replace(/[-()+]/g, '');
        
        const result = await validatePhoneNumber(cleanPhoneNumber);
        res.json(result);
    } catch (error) {
        console.error('Error en validatePhone:', error);
        res.status(500).json({
            error: 'Error al validar el número de teléfono',
            details: error.message
        });
    }
}
