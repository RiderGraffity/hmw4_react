import { AppError } from "./task5";

export class ApiService {
  #baseUrl: string;
  #cache = new Map<string, unknown>();

  constructor(baseUrl: string) {
    this.#baseUrl = baseUrl;
  }

  async get<T>(path: string): Promise<T> {
    const url = this.#baseUrl + path;

    if (this.#cache.has(url)) {
      return this.#cache.get(url) as T;
    }

    const res = await fetch(url);
    if (!res.ok) {
      throw new AppError("Не вдалося отримати дані", res.status);
    }

    const data = await res.json();
    this.#cache.set(url, data);
    return data as T;
  }
}
