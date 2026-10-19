"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPrice = formatPrice;
exports.filterProducts = filterProducts;
function formatPrice(amount, currency, showSymbol) {
    const value = amount.toFixed(2);
    if (!showSymbol) {
        return value + " " + currency;
    }
    let symbol = "";
    if (currency === "UAH") {
        symbol = "₴";
    }
    else if (currency === "USD") {
        symbol = "$";
    }
    else {
        symbol = "€";
    }
    return value + " " + symbol;
}
function filterProducts(products, maxPrice) {
    return products.filter((p) => p.price <= maxPrice);
}
