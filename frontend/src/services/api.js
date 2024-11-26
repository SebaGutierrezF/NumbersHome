// api.js
import { db } from '../config/firebase';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';

const API_URL = import.meta.env.VITE_API_URL || 'https://numbers-home-api.onrender.com';

export async function validatePhoneNumber(phoneNumber) {
    try {
        // Intentar obtener de cache primero
        const cacheRef = doc(collection(db, 'phoneValidations'), phoneNumber);
        const cacheDoc = await getDoc(cacheRef);
        
        if (cacheDoc.exists()) {
            console.log('Returning cached validation');
            return cacheDoc.data();
        }

        // Si no está en cache, llamar al backend
        const response = await fetch(`${API_URL}/api/phone`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phoneNumber })
        });

        if (!response.ok) {
            throw new Error('Error validating phone number');
        }

        const data = await response.json();
        
        // Guardar en cache local
        await setDoc(cacheRef, {
            ...data,
            cachedAt: new Date().toISOString()
        });

        return data;
    } catch (error) {
        console.error('Error in validatePhoneNumber:', error);
        throw error;
    }
}
