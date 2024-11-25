export const guardarEnHistorial = (telefono) => {
    const historial = JSON.parse(localStorage.getItem('historial') || '[]');
    if (!historial.includes(telefono)) {
        historial.unshift(telefono);
        if (historial.length > 5) historial.pop();
        localStorage.setItem('historial', JSON.stringify(historial));
    }
};

export const mostrarHistorial = () => {
    const historial = JSON.parse(localStorage.getItem('historial') || '[]');
    if (historial.length > 0) {
        return `
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
    }
    return '';
}; 