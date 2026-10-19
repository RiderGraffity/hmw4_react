"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task1_1 = require("./task1");
const task2_1 = require("./task2");
const task3_1 = require("./task3");
const task4_1 = require("./task4");
const task5_1 = require("./task5");
const task6_1 = require("./task6");
const task7_1 = require("./task7");
console.log(" 1 ");
console.log((0, task1_1.getMessage)({ status: "loading" }));
console.log((0, task1_1.getMessage)({ status: "success", data: [1, 2, 3] }));
console.log((0, task1_1.getMessage)({ status: "error", error: "немає з'єднання" }));
console.log(" 2 ");
const user1 = { id: 1, name: "Петро", email: "petro@gmail.com", role: "user", avatar: "/img/petro.jpg" };
const user2 = { id: 2, name: "Оля", email: "olya@gmail.com", role: "manager" };
console.log((0, task2_1.getAvatar)(user1));
console.log((0, task2_1.getAvatar)(user2));
console.log(" 3 ");
console.log((0, task3_1.formatPrice)(250, "UAH", true));
console.log((0, task3_1.formatPrice)(19.99, "USD"));
console.log((0, task3_1.formatPrice)(40, "EUR", true));
const products = [
    { id: 1, name: "Мишка", price: 450 },
    { id: 2, name: "Монітор", price: 7200 },
    { id: 3, name: "Навушники", price: 1300 },
    { id: 4, name: "Килимок", price: 200 },
];
console.log((0, task3_1.filterProducts)(products, 1500));
console.log(" 4 ");
console.log((0, task4_1.getUser)());
console.log((0, task4_1.getProducts)());
console.log(" 5 ");
try {
    throw new task5_1.AppError("Сторінку не знайдено", 404);
}
catch (e) {
    if (e instanceof task5_1.AppError) {
        console.log(e.getFullMessage());
    }
}
console.log(" 7 ");
const cart = new task7_1.Cart();
cart.add(products[0]);
cart.add(products[2], 2);
cart.add(products[0]);
console.log(cart.getItems());
console.log("Сума:", cart.getTotal());
cart.remove(3);
console.log("Після видалення:", cart.getTotal());
async function testApi() {
    console.log(" 6 ");
    const api = new task6_1.ApiService("https://jsonplaceholder.typicode.com");
    try {
        const post = await api.get("/posts/1");
        console.log(post.title);
        const again = await api.get("/posts/1");
        console.log("з кешу:", post === again);
    }
    catch (e) {
        if (e instanceof task5_1.AppError) {
            console.log(e.getFullMessage());
        }
        else {
            console.log("Щось пішло не так", e);
        }
    }
}
testApi();
