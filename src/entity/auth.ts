import { User } from "./user";

export interface LoginForm {
  email: User['email'];
  password: User['password'];
}

export interface RegisterForm {
  name: User['name'];
  email: User['email'];
  password: User['password'];
}
