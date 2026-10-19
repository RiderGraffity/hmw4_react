import { getMessage } from "./task1";
import { getAvatar, User } from "./task2";
import { formatPrice, filterProducts, Product } from "./task3";
import { getUser, getProducts } from "./task4";
import { AppError } from "./task5";
import { ApiService } from "./task6";
import { Cart } from "./task7";

console.log(" 1 ");
console.log(getMessage({ status: "loading" }));
console.log(getMessage({ status: "success", data: [1, 2, 3] }));
console.log(getMessage({ status: "error", error: "немає з'єднання" }));

console.log(" 2 ");
const user1: User = { id: 1, name: "Петро", email: "petro@gmail.com", role: "user", avatar: "/img/petro.jpg" };
const user2: User = { id: 2, name: "Оля", email: "olya@gmail.com", role: "manager" };
console.log(getAvatar(user1));
console.log(getAvatar(user2));

console.log(" 3 ");
console.log(formatPrice(250, "UAH", true));
console.log(formatPrice(19.99, "USD"));
console.log(formatPrice(40, "EUR", true));

const products: Product[] = [
  { id: 1, name: "Мишка", price: 450 },
  { id: 2, name: "Монітор", price: 7200 },
  { id: 3, name: "Навушники", price: 1300 },
  { id: 4, name: "Килимок", price: 200 },
];
console.log(filterProducts(products, 1500));

console.log(" 4 ");
console.log(getUser());
console.log(getProducts());

console.log(" 5 ");
try {
  throw new AppError("Сторінку не знайдено", 404);
} catch (e) {
  if (e instanceof AppError) {
    console.log(e.getFullMessage());
  }
}

console.log(" 7 ");
const cart = new Cart();
cart.add(products[0]);
cart.add(products[2], 2);
cart.add(products[0]);
console.log(cart.getItems());
console.log("Сума:", cart.getTotal());
cart.remove(3);
console.log("Після видалення:", cart.getTotal());

async function testApi() {
  console.log(" 6 ");
  const api = new ApiService("https://jsonplaceholder.typicode.com");
  try {
    const post = await api.get<{ id: number; title: string }>("/posts/1");
    console.log(post.title);
    const again = await api.get<{ id: number; title: string }>("/posts/1");
    console.log("з кешу:", post === again);
  } catch (e) {
    if (e instanceof AppError) {
      console.log(e.getFullMessage());
    } else {
      console.log("Щось пішло не так", e);
    }
  }
}

testApi();