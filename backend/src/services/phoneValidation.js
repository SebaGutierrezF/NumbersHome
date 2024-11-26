import axios from 'axios';
import { getDb } from '../config/firebase.js';
import { logger } from '../utils/logger.js';

export async function validatePhoneNumber(phoneNumber) {
    try {
        logger.debug('Validando número con API externa:', phoneNumber);
        const response = await axios.get(
            `https://api.numlookupapi.com/v1/validate/${phoneNumber}`,
            {
                params: {
                    apikey: process.env.NUMLOOKUP_API_KEY
                }
            }
        );

        if (!response.data) {
            throw new Error('No se recibió respuesta del servicio de validación');
        }

        return {
            valid: response.data.valid,
            country: response.data.country_name,
            location: {
                lat: response.data.location?.latitude,
                lng: response.data.location?.longitude
            },
            phoneNumber: phoneNumber,
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        logger.error('Error validando número con API externa:', error);
        throw new Error('Error al validar el número con el servicio externo');
    }
}

export async function saveValidationToFirebase(data) {
    try {
        const db = getDb();
        const phoneCollection = db.collection('phone_validations');
        await phoneCollection.add({
            ...data,
            timestamp: new Date()
        });
        logger.info('Validación guardada en Firebase');
    } catch (error) {
        logger.error('Error guardando en Firebase:', error);
        // No lanzamos el error para que no afecte la respuesta al usuario
    }
}

export async function getValidationFromFirebase(phoneNumber) {
    try {
        const db = getDb();
        const phoneCollection = db.collection('phone_validations');
        const q = phoneCollection
            .where('phoneNumber', '==', phoneNumber)
            .orderBy('timestamp', 'desc')
            .limit(1);
        
        const querySnapshot = await q.get();
        if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0].data();
            logger.debug('Validación encontrada en cache');
            return {
                ...doc,
                cached: true,
                timestamp: doc.timestamp.toDate().toISOString()
            };
        }
        logger.debug('No se encontró validación en cache');
        return null;
    } catch (error) {
        logger.error('Error consultando Firebase:', error);
        return null;
    }
}
