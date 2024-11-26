// phone.js
import axios from 'axios';
import dotenv from 'dotenv';

import {
    validatePhoneNumber,
    saveValidationToFirebase,
    getValidationFromFirebase
} from '../services/phoneValidation.js';
import { handleError } from '../utils/errors.js';
import { logger } from '../utils/logger.js';

// Configurar variables de entorno
dotenv.config();

// Validar número de teléfono
export async function validatePhone(req, res) {
    try {
        const { phoneNumber } = req.body;

        if (!phoneNumber) {
            logger.warn('Intento de validación sin número de teléfono');
            return res.status(400).json({
                error: 'Se requiere un número de teléfono'
            });
        }

        // Limpiar el número de teléfono de espacios y caracteres especiales
        const cleanPhoneNumber = phoneNumber.replace(/\s+/g, '').replace(/[-()+]/g, '');
        logger.info(`Validando número: ${cleanPhoneNumber}`);

        try {
            // Primero intentar obtener de cache
            const cachedValidation = await getValidationFromFirebase(cleanPhoneNumber);
            if (cachedValidation) {
                logger.debug('Resultado encontrado en cache');
                return res.json({
                    ...cachedValidation,
                    cached: true
                });
            }
        } catch (cacheError) {
            logger.warn('Error al consultar cache:', cacheError);
            // Continuar con la validación aunque falle el cache
        }

        // Si no está en cache o hubo error, validar con API externa
        const validationResult = await validatePhoneNumber(cleanPhoneNumber);
        
        // Guardar en Firebase (async)
        saveValidationToFirebase(validationResult).catch(error => {
            logger.error('Error guardando validación:', error);
        });

        logger.info('Validación completada exitosamente');
        res.json({
            ...validationResult,
            cached: false
        });
    } catch (error) {
        logger.error('Error en validación:', error);
        handleError(error, res);
    }
}
