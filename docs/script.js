import { db, queryFirebase, saveToFirebase } from './firebase-config.js';
import { translations } from './translations.js';
import { validatePhoneWithAPI } from './services/phoneService.js';
import { sanitizarDatos, validarTelefono } from './utils/dataUtils.js';
import { guardarEnHistorial, mostrarHistorial } from './utils/historyUtils.js';

let currentLang = localStorage.getItem('lang') || 'es';

function handleError(error, resultado, t) {
    console.error('Error:', error);
    resultado.style.display = 'block';
    document.querySelector('.map-container').style.display = 'none';

    switch (error.message) {
        case 'INVALID_FORMAT':
            resultado.innerHTML = t.invalidFormat;
            break;
        case 'INVALID_PHONE':
            resultado.innerHTML = t.invalidPhone;
            break;
        case 'FIREBASE_QUERY_ERROR':
            resultado.innerHTML = t.firebaseQueryError;
            break;
        case 'FIREBASE_SAVE_ERROR':
            resultado.innerHTML = t.firebaseSaveError;
            break;
        default:
            resultado.innerHTML = t.generalError;
    }
}

function actualizarInterfazConDatos(data, resultado, t) {
    resultado.innerHTML = `
        <p><strong>${t.country}:</strong> ${data.country}</p>
        <p><strong>${t.region}:</strong> ${data.region}</p>
        <p><strong>${t.carrier}:</strong> ${data.carrier}</p>
    `;

    if (data.location && data.location.lat && data.location.lng) {
        const mapContainer = document.querySelector('.map-container');
        mapContainer.style.display = 'block';
        // Aquí iría la lógica del mapa si la implementas
    }
}

document.getElementById('telefonoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const telefono = document.getElementById('telefono').value.trim();
    const resultado = document.getElementById('resultado');
    const mapContainer = document.querySelector('.map-container');
    const t = translations[currentLang];
    
    try {
        // Validación inicial
        const { valido, mensaje } = validarTelefono(telefono);
        if (!valido) {
            throw new Error('INVALID_FORMAT');
        }

        resultado.style.display = 'block';
        resultado.innerHTML = t.loading;
        mapContainer.style.display = 'none';

        // Búsqueda en Firebase
        const storedData = await queryFirebase(telefono);
        
        if (storedData) {
            actualizarInterfazConDatos(storedData, resultado, t);
            guardarEnHistorial(telefono);
            document.querySelector('.historial-container').innerHTML = mostrarHistorial();
        } else {
            // Consulta API externa
            const apiData = await validatePhoneWithAPI(telefono);
            
            if (apiData.valid) {
                const sanitizedData = sanitizarDatos(apiData, telefono);
                await saveToFirebase(sanitizedData);
                actualizarInterfazConDatos(sanitizedData, resultado, t);
                guardarEnHistorial(telefono);
                document.querySelector('.historial-container').innerHTML = mostrarHistorial();
            } else {
                throw new Error('INVALID_PHONE');
            }
        }

    } catch (error) {
        handleError(error, resultado, t);
    }
});

// ... resto de funciones de UI y utilidades ... 