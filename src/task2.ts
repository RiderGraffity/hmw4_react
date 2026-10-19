export type Role = "admin" | "manager" | "user";

export interface User {
  readonly id: number;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

const defaultAvatar = "/img/no-avatar.png";

export function getAvatar(user: User): string {
  if (user.avatar) {
    return user.avatar;
  }
  return defaultAvatar;
}
