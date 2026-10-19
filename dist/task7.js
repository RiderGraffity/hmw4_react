"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    items = [];
    add(product, quantity = 1) {
        const found = this.items.find((item) => item.product.id === product.id);
        if (found) {
            found.quantity += quantity;
        }
        else {
            this.items.push({ product, quantity });
        }
    }
    remove(id) {
        this.items = this.items.filter((item) => item.product.id !== id);
    }
    getTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.product.price * item.quantity;
        }
        return total;
    }
    getItems() {
        return this.items.map((item) => ({ ...item }));
    }
}
exports.Cart = Cart;
