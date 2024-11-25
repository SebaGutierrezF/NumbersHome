import { db, queryFirebase, saveToFirebase } from './firebase-config.js';
import { translations } from '.translations.js';
import { validatePhoneWithAPI } from './services/phoneService.js';
import { sanitizarDatos, validarTelefono } from './utils/dataUtils.js';
import { guardarEnHistorial, mostrarHistorial } from './utils/historyUtils.js';

let currentLang = localStorage.getItem('lang') || 'es';

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
        const { success, data: querySnapshot } = await queryFirebase('numbers', 'telefono', telefono);
        
        if (!success) {
            throw new Error('FIREBASE_QUERY_ERROR');
        }

        let phoneData;
        if (!querySnapshot.empty) {
            phoneData = querySnapshot.docs[0].data();
        } else {
            // Consulta API externa
            const apiData = await validatePhoneWithAPI(telefono);
            
            if (apiData.valid) {
                const sanitizedData = sanitizarDatos(apiData, telefono);
                const saveResult = await saveToFirebase('numbers', sanitizedData);
                
                if (!saveResult.success) {
                    throw new Error('FIREBASE_SAVE_ERROR');
                }
                
                phoneData = sanitizedData;
            } else {
                throw new Error('INVALID_PHONE');
            }
        }

        if (phoneData) {
            guardarEnHistorial(telefono);
            document.querySelector('.historial-container').innerHTML = mostrarHistorial();
            actualizarInterfazConDatos(phoneData, resultado, t);
            mostrarNotificacion(t.searchSuccess, 'success');
        }

    } catch (error) {
        handleError(error, resultado, t);
    }
});

// ... resto de funciones de UI y utilidades ... 