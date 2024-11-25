export const sanitizarDatos = (data, telefono) => {
    const timestamp = new Date().toISOString();
    return {
        telefono: telefono.trim(),
        country_name: (data.country_name || '').trim(),
        country_code: (data.country_code || '').trim(),
        location: (data.location || 'No disponible').trim(),
        local_format: (data.local_format || '').trim(),
        carrier: (data.carrier || 'No disponible').trim(),
        timestamp,
        created_at: timestamp,
        valid: true
    };
};

export const validarTelefono = (telefono) => {
    const regex = /^\+[0-9]{1,3}[0-9]{4,14}$/;
    return {
        valido: regex.test(telefono),
        mensaje: regex.test(telefono) ? '' : 'El formato del número no es válido. Use: +[código país][número]'
    };
}; 