"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = getUser;
exports.getProducts = getProducts;
function getUser() {
    return {
        status: 200,
        data: {
            id: 1,
            name: "Андрій",
            email: "andrii@gmail.com",
            role: "admin",
        },
        timestamp: new Date(),
    };
}
function getProducts() {
    return {
        status: 200,
        data: [
            { id: 1, name: "Чохол для телефону", price: 350 },
            { id: 2, name: "Павербанк", price: 1100 },
        ],
        timestamp: new Date(),
    };
}
