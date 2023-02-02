import { baseRequest } from "./base"; 

import { User } from "../entity/user";
import { LoginForm, RegisterForm } from "../entity/auth";

interface RegisterReturn {
  id: string
  message: string
}

class UserRequest {
  // Auth/Register Requests
  async login(data: LoginForm): Promise<User> {
    const response = baseRequest.post<User>('auth/login', data);
    return (await response).data
  }

  async signUp(data: RegisterForm): Promise<RegisterForm> {
    const response = baseRequest.post<User>('auth/register', data);
    return (await response).data
  }

  // User requests
}

export default UserRequest