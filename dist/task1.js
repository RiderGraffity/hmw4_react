"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessage = getMessage;
function getMessage(state) {
    if (state.status === "loading") {
        return "Завантаження...";
    }
    else if (state.status === "success") {
        return `Отримано ${state.data.length} елементів`;
    }
    else {
        return "Помилка: " + state.error;
    }
}
