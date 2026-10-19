export type Currency = "UAH" | "USD" | "EUR";

export function formatPrice(amount: number, currency: Currency, showSymbol?: boolean): string {
  const value = amount.toFixed(2);

  if (!showSymbol) {
    return value + " " + currency;
  }

  let symbol = "";
  if (currency === "UAH") {
    symbol = "₴";
  } else if (currency === "USD") {
    symbol = "$";
  } else {
    symbol = "€";
  }

  return value + " " + symbol;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

export function filterProducts(products: Product[], maxPrice: number): Product[] {
  return products.filter((p) => p.price <= maxPrice);
}
