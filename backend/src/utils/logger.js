const levels = {
    ERROR: 0,
    WARN: 1,
    INFO: 2,
    DEBUG: 3
};

const colors = {
    ERROR: '\x1b[31m', // Red
    WARN: '\x1b[33m',  // Yellow
    INFO: '\x1b[36m',  // Cyan
    DEBUG: '\x1b[90m', // Gray
    RESET: '\x1b[0m'
};

class Logger {
    constructor() {
        this.level = process.env.NODE_ENV === 'production' ? levels.INFO : levels.DEBUG;
    }

    setLevel(level) {
        if (levels[level] !== undefined) {
            this.level = levels[level];
        }
    }

    _log(level, message, ...args) {
        if (levels[level] <= this.level) {
            const timestamp = new Date().toISOString();
            const color = colors[level];
            console.log(
                `${color}[${timestamp}] ${level}:${colors.RESET}`,
                message,
                ...args
            );
        }
    }

    error(message, ...args) {
        this._log('ERROR', message, ...args);
    }

    warn(message, ...args) {
        this._log('WARN', message, ...args);
    }

    info(message, ...args) {
        this._log('INFO', message, ...args);
    }

    debug(message, ...args) {
        this._log('DEBUG', message, ...args);
    }
}

export const logger = new Logger();
