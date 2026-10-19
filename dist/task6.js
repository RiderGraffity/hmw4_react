"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const task5_1 = require("./task5");
class ApiService {
    #baseUrl;
    #cache = new Map();
    constructor(baseUrl) {
        this.#baseUrl = baseUrl;
    }
    async get(path) {
        const url = this.#baseUrl + path;
        if (this.#cache.has(url)) {
            return this.#cache.get(url);
        }
        const res = await fetch(url);
        if (!res.ok) {
            throw new task5_1.AppError("Не вдалося отримати дані", res.status);
        }
        const data = await res.json();
        this.#cache.set(url, data);
        return data;
    }
}
exports.ApiService = ApiService;
