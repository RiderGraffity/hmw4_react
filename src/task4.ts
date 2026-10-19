import { User } from "./task2";
import { Product } from "./task3";

export interface ServerResponse<T> {
  status: number;
  data: T;
  timestamp: Date;
}

export function getUser(): ServerResponse<User> {
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

export function getProducts(): ServerResponse<Product[]> {
  return {
    status: 200,
    data: [
      { id: 1, name: "Чохол для телефону", price: 350 },
      { id: 2, name: "Павербанк", price: 1100 },
    ],
    timestamp: new Date(),
  };
}
