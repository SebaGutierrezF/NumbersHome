const API_URL = 'https://api.apilayer.com/number_verification/validate';
const API_KEY = window.env.VITE_PHONE_API_KEY;

export const validatePhoneWithAPI = async (telefono) => {
    try {
        const response = await fetch(`${API_URL}?number=${telefono}`, {
            method: 'GET',
            headers: {
                'apikey': API_KEY
            }
        });

        if (!response.ok) {
            console.error('API Error:', response.status, await response.text());
            throw new Error(`API_ERROR_${response.status}`);
        }

        const data = await response.json();
        
        if (!data.valid) {
            throw new Error('INVALID_PHONE');
        }

        return {
            valid: true,
            country: data.country_name,
            region: data.location || 'No disponible',
            carrier: data.carrier || 'No disponible',
            location: {
                lat: null,  // La API no proporciona coordenadas
                lng: null
            }
        };
    } catch (error) {
        console.error('Phone validation error:', error);
        throw error;
    }
};