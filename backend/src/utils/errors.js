export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
        this.status = 400;
    }
}

export class ExternalServiceError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ExternalServiceError';
        this.status = 503;
    }
}

export class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DatabaseError';
        this.status = 500;
    }
}

export function handleError(error, res) {
    console.error(`${error.name}: ${error.message}`);
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    
    res.status(status).json({
        error: message,
        status: status
    });
}
