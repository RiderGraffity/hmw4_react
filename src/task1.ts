type Loading = {
  status: "loading";
};

type Success<T> = {
  status: "success";
  data: T[];
};

type Failure = {
  status: "error";
  error: string;
};

export type RequestState<T> = Loading | Success<T> | Failure;

export function getMessage<T>(state: RequestState<T>): string {
  if (state.status === "loading") {
    return "Завантаження...";
  } else if (state.status === "success") {
    return `Отримано ${state.data.length} елементів`;
  } else {
    return "Помилка: " + state.error;
  }
}
