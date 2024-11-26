// validation.js
import axios from 'axios';
import { db } from '../config/firebase.js';

const API_KEY = process.env.API_KEY;
const API_URL = 'https://api.numlookupapi.com/v1/validate/';

export async function validatePhoneNumber(phoneNumber) {
    try {
        // Buscar en cache primero
        const cacheRef = db.collection('phoneValidations').doc(phoneNumber);
        const cacheDoc = await cacheRef.get();
        
        if (cacheDoc.exists) {
            const cachedData = cacheDoc.data();
            const cacheAge = Date.now() - new Date(cachedData.cachedAt).getTime();
            
            // Usar cache si tiene menos de 24 horas
            if (cacheAge < 24 * 60 * 60 * 1000) {
                console.log('Returning cached validation for:', phoneNumber);
                return cachedData;
            }
        }

        // Si no está en cache o está expirado, llamar a la API
        const response = await axios.get(`${API_URL}${phoneNumber}`, {
            params: { apikey: API_KEY }
        });

        const validationResult = {
            ...response.data,
            cachedAt: new Date().toISOString()
        };

        // Guardar en cache
        await cacheRef.set(validationResult);

        return validationResult;
    } catch (error) {
        console.error('Error validating phone number:', error);
        throw new Error(error.response?.data?.message || error.message);
    }
}
