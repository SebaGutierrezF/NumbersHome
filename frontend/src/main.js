import { validatePhoneNumber } from './services/api.js';
import './styles/styke.css';

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phoneInput');
    const validateBtn = document.getElementById('validateBtn');
    const resultDiv = document.getElementById('result');
    let map;

    // Inicializar mapa
    map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const showError = (message) => {
        resultDiv.innerHTML = `<div class="error">${message}</div>`;
        map.setView([0, 0], 2);
    };

    const showResult = (data) => {
        const { valid, country, location } = data;
        const resultHTML = `
            <div class="${valid ? 'valid' : 'invalid'}">
                <p>Número ${valid ? 'válido' : 'inválido'}</p>
                ${country ? `<p>País: ${country}</p>` : ''}
            </div>
        `;
        resultDiv.innerHTML = resultHTML;

        if (location && location.lat && location.lng) {
            map.setView([location.lat, location.lng], 8);
            L.marker([location.lat, location.lng]).addTo(map);
        }
    };

    validateBtn.addEventListener('click', async () => {
        const phoneNumber = phoneInput.value.trim();
        if (!phoneNumber) {
            showError('Por favor ingresa un número telefónico');
            return;
        }

        try {
            validateBtn.disabled = true;
            const result = await validatePhoneNumber(phoneNumber);
            showResult(result);
        } catch (error) {
            showError(error.message);
        } finally {
            validateBtn.disabled = false;
        }
    });

    // Permitir enviar con Enter
    phoneInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            validateBtn.click();
        }
    });
});
