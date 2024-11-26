import { validatePhoneNumber } from './services/api.js';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Estado global del mapa
let map;
let currentMarker;

// Configuración del mapa
const MAP_CONFIG = {
    defaultView: [0, 0],
    defaultZoom: 2,
    focusZoom: 8,
    tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: ' OpenStreetMap contributors'
};

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phoneInput');
    const validateBtn = document.getElementById('validateBtn');
    const resultDiv = document.getElementById('result');

    // Inicializar mapa
    initMap();

    const showError = (message) => {
        resultDiv.innerHTML = `<div class="error"><i class="fas fa-exclamation-circle"></i> ${message}</div>`;
        resetMap();
    };

    const showResult = (data) => {
        const { valid, country, location } = data;
        const resultHTML = `
            <div class="${valid ? 'valid' : 'invalid'}">
                <p><i class="fas fa-${valid ? 'check-circle' : 'times-circle'}"></i> 
                   Número ${valid ? 'válido' : 'inválido'}</p>
                ${country ? `<p><i class="fas fa-globe"></i> País: ${country}</p>` : ''}
            </div>
        `;
        resultDiv.innerHTML = resultHTML;

        if (location?.lat && location?.lng) {
            updateMapLocation(location);
        } else {
            resetMap();
        }
    };

    const handleValidation = async () => {
        const phoneNumber = phoneInput.value.trim();
        if (!phoneNumber) {
            showError('Por favor ingresa un número telefónico');
            return;
        }

        try {
            validateBtn.disabled = true;
            validateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Validando...';
            const result = await validatePhoneNumber(phoneNumber);
            showResult(result);
        } catch (error) {
            showError(error.message || 'Error al validar el número');
            console.error('Error de validación:', error);
        } finally {
            validateBtn.disabled = false;
            validateBtn.innerHTML = '<i class="fas fa-check"></i> Validar';
        }
    };

    // Event Listeners
    validateBtn.addEventListener('click', handleValidation);
    phoneInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !validateBtn.disabled) {
            handleValidation();
        }
    });
});

// Funciones del mapa
function initMap() {
    map = L.map('map').setView(MAP_CONFIG.defaultView, MAP_CONFIG.defaultZoom);
    L.tileLayer(MAP_CONFIG.tileLayer, {
        attribution: MAP_CONFIG.attribution
    }).addTo(map);
}

function resetMap() {
    if (currentMarker) {
        currentMarker.remove();
    }
    map.setView(MAP_CONFIG.defaultView, MAP_CONFIG.defaultZoom);
}

function updateMapLocation(location) {
    if (currentMarker) {
        currentMarker.remove();
    }
    map.setView([location.lat, location.lng], MAP_CONFIG.focusZoom);
    currentMarker = L.marker([location.lat, location.lng]).addTo(map);
}
