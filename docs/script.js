import { db } from './firebase-config.js';
import { translations } from './translations.js';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = 'https://numbers-home-api.onrender.com';
let map = null;
let currentLang = localStorage.getItem('lang') || 'es';

// Función para manejar el tema
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Establecer tema inicial
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || (prefersDarkScheme.matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateThemeIcon(initialTheme);
    
    // Evento para cambiar el tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

// Función para actualizar el icono del botón
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    if (theme === 'dark') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

// Función para inicializar el idioma
function initLang() {
    const langToggle = document.getElementById('langToggle');
    
    // Establecer idioma inicial
    setLanguage(currentLang);
    
    // Evento para cambiar el idioma
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        setLanguage(currentLang);
    });
}

// Función para actualizar los textos
function setLanguage(lang) {
    const t = translations[lang];
    
    // Actualizar textos
    document.getElementById('title').textContent = t.title;
    document.getElementById('telefono').placeholder = t.inputPlaceholder;
    document.querySelector('#telefonoForm button').innerHTML = `
        <i class="fas fa-search"></i> ${t.searchButton}
    `;
    
    // Actualizar el botón de idioma
    document.querySelector('#langToggle span').textContent = lang.toUpperCase();
    
    // Si hay resultados mostrados, actualizarlos
    const resultado = document.getElementById('resultado');
    if (resultado.innerHTML && !resultado.innerHTML.includes(t.loading)) {
        updateResultContent(resultado);
    }
}

// Función para actualizar el contenido del resultado
function updateResultContent(resultado) {
    const t = translations[currentLang];
    const telefono = document.getElementById('telefono').value;
    
    if (resultado.querySelector('.error')) {
        resultado.innerHTML = `
            <h3 class="error">
                <i class="fas fa-exclamation-triangle"></i>
                ${t.invalidFormat}
            </h3>
        `;
        return;
    }
    
    // Actualizar los títulos y etiquetas manteniendo los valores
    const values = {
        country: resultado.querySelector('p:nth-child(2) strong').textContent,
        countryCode: resultado.querySelector('p:nth-child(3) strong').textContent,
        location: resultado.querySelector('p:nth-child(4) strong').textContent,
        localFormat: resultado.querySelector('p:nth-child(5) strong').textContent,
        carrier: resultado.querySelector('p:nth-child(6) strong').textContent
    };
    
    resultado.innerHTML = `
        <h3><i class="fas fa-info-circle"></i> ${t.numberInfo} ${telefono}</h3>
        <p>
            <span><i class="fas fa-globe"></i> ${t.country}</span>
            <strong>${values.country}</strong>
        </p>
        <p>
            <span><i class="fas fa-flag"></i> ${t.countryCode}</span>
            <strong>${values.countryCode}</strong>
        </p>
        <p>
            <span><i class="fas fa-map-marker-alt"></i> ${t.location}</span>
            <strong>${values.location}</strong>
        </p>
        <p>
            <span><i class="fas fa-phone"></i> ${t.localFormat}</span>
            <strong>${values.localFormat}</strong>
        </p>
        <p>
            <span><i class="fas fa-building"></i> ${t.carrier}</span>
            <strong>${values.carrier}</strong>
        </p>
    `;
}

// Inicializar el tema cuando se carga el documento
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
});

// Función para validar el formato del teléfono
function validarTelefono(telefono) {
    const regex = /^\+[0-9]{1,3}[0-9]{4,14}$/;
    if (!regex.test(telefono)) {
        return {
            valido: false,
            mensaje: 'El formato del número no es válido. Use: +[código país][número]'
        };
    }
    return { valido: true };
}

// Función para sanitizar datos antes de guardar
function sanitizarDatos(data, telefono) {
    const timestamp = new Date().toISOString();
    
    return {
        telefono: telefono.trim(),
        country_name: (data.country_name || '').trim(),
        country_code: (data.country_code || '').trim(),
        location: (data.location || 'No disponible').trim(),
        local_format: (data.local_format || '').trim(),
        carrier: (data.carrier || 'No disponible').trim(),
        timestamp: timestamp,
        created_at: timestamp,
        valid: true
    };
}

// Función para obtener la consulta de ubicación
function getLocationQuery(data) {
    // Si tenemos una ubicación específica, la usamos junto con el país
    if (data.location && data.location !== 'No disponible') {
        return `${data.location}, ${data.country_name}`;
    }
    // Si no hay ubicación específica pero tenemos el país, usamos solo el país
    else if (data.country_name && data.country_name !== 'No disponible') {
        return data.country_name;
    }
    // Si no tenemos datos válidos, retornamos null
    return null;
}

// Función para guardar en el historial
function guardarEnHistorial(telefono) {
    const historial = JSON.parse(localStorage.getItem('historial') || '[]');
    if (!historial.includes(telefono)) {
        historial.unshift(telefono); // Agregar al inicio
        if (historial.length > 5) historial.pop(); // Mantener solo los últimos 5
        localStorage.setItem('historial', JSON.stringify(historial));
    }
}

// Función para mostrar el historial
function mostrarHistorial() {
    const historial = JSON.parse(localStorage.getItem('historial') || '[]');
    if (historial.length > 0) {
        const historialHTML = `
            <div class="historial">
                <h3><i class="fas fa-history"></i> Búsquedas recientes</h3>
                <ul>
                    ${historial.map(tel => `
                        <li>
                            <span>${tel}</span>
                            <button onclick="consultarNumero('${tel}')">
                                <i class="fas fa-search"></i>
                            </button>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        document.querySelector('.historial-container').innerHTML = historialHTML;
    }
}

function mostrarNotificacion(mensaje, tipo = 'success') {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion ${tipo}`;
    notificacion.innerHTML = `
        <i class="fas ${tipo === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        ${mensaje}
    `;
    document.body.appendChild(notificacion);
    setTimeout(() => notificacion.remove(), 3000);
}

document.getElementById('telefonoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const telefono = document.getElementById('telefono').value.trim();
    const resultado = document.getElementById('resultado');
    const mapContainer = document.querySelector('.map-container');
    
    const t = translations[currentLang];
    
    // Validación inicial del formato del teléfono
    if (!/^\+[0-9]{1,3}[0-9]{4,14}$/.test(telefono)) {
        resultado.innerHTML = `
            <h3 class="error">
                <i class="fas fa-exclamation-triangle"></i>
                ${t.invalidFormat}
            </h3>
        `;
        return;
    }
    
    resultado.style.display = 'block';
    resultado.innerHTML = t.loading;
    mapContainer.style.display = 'none';
    
    try {
        // Buscar en Firebase
        db.collection('numbers')
          .where('telefono', '==', telefono)
          .get()
          .then(querySnapshot => {
            let data;

            if (!querySnapshot.empty) {
                data = querySnapshot.docs[0].data();
                console.log('Datos recuperados de Firebase:', data);
            } else {
                console.log('Consultando API externa...');
                const response = await fetch(`https://api.numlookupapi.com/v1/validate/${telefono}?apikey=${API_KEY}`);
                const apiData = await response.json();
                
                if (apiData.valid) {
                    data = apiData;
                    // Guardar en Firebase
                    try {
                        const sanitizedData = sanitizarDatos(data, telefono);
                        console.log('Intentando guardar datos:', sanitizedData);
                        const docRef = await addDoc(collection(db, 'numeros'), sanitizedData);
                        console.log('Datos guardados en Firebase con ID:', docRef.id);
                        data = sanitizedData; // Usar los datos sanitizados para mostrar
                    } catch (error) {
                        console.error('Error detallado al guardar en Firebase:', error);
                    }
                }
            }

            // Mostrar resultados
            if (data && (data.valid || data.telefono)) { // Verificar ambos casos
                resultado.innerHTML = `
                    <h3><i class="fas fa-info-circle"></i> ${t.numberInfo} ${telefono}</h3>
                    <p>
                        <span><i class="fas fa-globe"></i> ${t.country}</span>
                        <strong>${data.country_name || t.notAvailable}</strong>
                    </p>
                    <p>
                        <span><i class="fas fa-flag"></i> ${t.countryCode}</span>
                        <strong>${data.country_code || t.notAvailable}</strong>
                    </p>
                    <p>
                        <span><i class="fas fa-map-marker-alt"></i> ${t.location}</span>
                        <strong>${data.location || t.notAvailable}</strong>
                    </p>
                    <p>
                        <span><i class="fas fa-phone"></i> ${t.localFormat}</span>
                        <strong>${data.local_format || t.notAvailable}</strong>
                    </p>
                    <p>
                        <span><i class="fas fa-building"></i> ${t.carrier}</span>
                        <strong>${data.carrier || t.notAvailable}</strong>
                    </p>
                `;

                // Obtener la consulta de ubicación
                const locationQuery = getLocationQuery(data);

                if (locationQuery) {
                    try {
                        console.log('Buscando coordenadas para:', locationQuery);
                        const geocodeResponse = await fetch(
                            `https://nominatim.openstreetmap.org/search?` + 
                            `format=json&q=${encodeURIComponent(locationQuery)}&limit=1`
                        );
                        const geocodeData = await geocodeResponse.json();

                        if (geocodeData && geocodeData.length > 0) {
                            const { lat, lon } = geocodeData[0];
                            console.log('Coordenadas encontradas:', lat, lon);
                            
                            mapContainer.style.display = 'block';

                            if (map) {
                                map.remove();
                                map = null;
                            }

                            setTimeout(() => {
                                try {
                                    map = L.map('map', {
                                        zoomControl: true,
                                        scrollWheelZoom: true
                                    }).setView([lat, lon], 6);
                                    
                                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                        attribution: '© OpenStreetMap contributors'
                                    }).addTo(map);

                                    L.marker([lat, lon])
                                        .addTo(map)
                                        .bindPopup(locationQuery)
                                        .openPopup();

                                    map.invalidateSize();
                                    console.log('Mapa inicializado correctamente');
                                } catch (mapError) {
                                    console.error('Error al inicializar el mapa:', mapError);
                                }
                            }, 300);
                        } else {
                            console.log('No se encontraron coordenadas específicas, intentando con el país');
                            // Intenta buscar solo el país si no se encontraron coordenadas específicas
                            if (data.country_name && data.country_name !== 'No disponible') {
                                const countryResponse = await fetch(
                                    `https://nominatim.openstreetmap.org/search?` +
                                    `format=json&q=${encodeURIComponent(data.country_name)}&limit=1`
                                );
                                const countryData = await countryResponse.json();

                                if (countryData && countryData.length > 0) {
                                    const { lat, lon } = countryData[0];
                                    // ... código del mapa igual que arriba ...
                                    mapContainer.style.display = 'block';

                                    if (map) {
                                        map.remove();
                                        map = null;
                                    }

                                    setTimeout(() => {
                                        map = L.map('map', {
                                            zoomControl: true,
                                            scrollWheelZoom: true
                                        }).setView([lat, lon], 4); // Zoom más alejado para países
                                        
                                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                            attribution: '© OpenStreetMap contributors'
                                        }).addTo(map);

                                        L.marker([lat, lon])
                                            .addTo(map)
                                            .bindPopup(data.country_name)
                                            .openPopup();

                                        map.invalidateSize();
                                    }, 300);
                                }
                            } else {
                                console.log('No hay datos de ubicación suficientes para mostrar el mapa');
                                mapContainer.style.display = 'none';
                            }
                        }
                    } catch (error) {
                        console.error('Error al obtener coordenadas:', error);
                        mapContainer.style.display = 'none';
                    }
                } else {
                    console.log('No hay datos de ubicación válidos para mostrar el mapa');
                    mapContainer.style.display = 'none';
                }
            } else {
                resultado.innerHTML = `
                    <h3 class="error">
                        <i class="fas fa-exclamation-triangle"></i>
                        ${t.invalidNumber}
                    </h3>
                `;
            }
        })
        .catch(error => {
            console.error('Error en la operación:', error);
            resultado.innerHTML = t.processingError;
        });
    } catch (error) {
        console.error('Error general:', error);
        resultado.innerHTML = t.error;
    }
}); 