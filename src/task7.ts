import { Product } from "./task3";

export interface CartItem {
  product: Product;
  quantity: number;
}

export class Cart {
  private items: CartItem[] = [];

  add(product: Product, quantity = 1) {
    const found = this.items.find((item) => item.product.id === product.id);

    if (found) {
      found.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  remove(id: number) {
    this.items = this.items.filter((item) => item.product.id !== id);
  }

  getTotal(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.product.price * item.quantity;
    }
    return total;
  }

  getItems(): readonly CartItem[] {
    return this.items.map((item) => ({ ...item }));
  }
}
