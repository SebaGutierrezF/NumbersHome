import axios from 'axios';
import { getDb } from '../config/firebase.js';

export async function validatePhoneNumber(phoneNumber) {
    try {
        const response = await axios.get(
            `https://api.numlookupapi.com/v1/validate/${phoneNumber}`,
            {
                headers: {
                    'apikey': process.env.NUMLOOKUP_API_KEY
                }
            }
        );

        return {
            valid: response.data.valid,
            country: response.data.country_name,
            location: {
                lat: response.data.location?.latitude,
                lng: response.data.location?.longitude
            },
            phoneNumber: phoneNumber
        };
    } catch (error) {
        console.error('Error validating phone number:', error);
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
        console.log('Validation saved to Firebase');
    } catch (error) {
        console.error('Error saving to Firebase:', error);
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
            const doc = querySnapshot.docs[0];
            console.log('Validation found in Firebase cache');
            return doc.data();
        }
        console.log('No cached validation found');
        return null;
    } catch (error) {
        console.error('Error querying Firebase:', error);
        return null;
    }
}
