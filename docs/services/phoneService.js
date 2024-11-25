const API_URL = 'https://numbers-home-api.onrender.com';

export const validatePhoneWithAPI = async (telefono) => {
    const response = await fetch(`${API_URL}/validate/${telefono}`);
    if (!response.ok) {
        throw new Error(`API_ERROR_${response.status}`);
    }
    return response.json();
}; 