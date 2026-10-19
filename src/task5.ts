export class AppError extends Error {
  readonly code: number;

  constructor(message: string, code: number) {
    super(message);
    this.name = "AppError";
    this.code = code;
  }

  getFullMessage(): string {
    return `Помилка ${this.code}: ${this.message}`;
  }
}
