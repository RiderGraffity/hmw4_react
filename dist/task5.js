"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.name = "AppError";
        this.code = code;
    }
    getFullMessage() {
        return `Помилка ${this.code}: ${this.message}`;
    }
}
exports.AppError = AppError;
