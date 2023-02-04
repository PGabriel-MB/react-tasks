import React, {
  createContext,
  useState,
  useEffect
} from 'react'
import { User } from '../entity/user'
import { LoginForm, RegisterForm } from '../entity/auth';
import UserRequest from '../requests/UserRequests';

export interface UserContextProps {
  user?: User;
  setUser?: (user: User) => void;
  isAuthenticated: boolean;
  Login: (data: LoginForm) => void;
  Register: (data: RegisterForm) => void;
  RecoveryPessword: (email: string) => void;
  VerifyToken: (token: string) => void;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)

export const UserProvider: React.FC = ({ children }: any) => {
  const [user, setUser] = useState<User>({} as User);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userRequest = new UserRequest()

  const Login = async (data: LoginForm) => {
    try {
      await userRequest.login(data)
        .then(user => {
          setUser(user);
          setIsAuthenticated(true);
        })
    } catch (err) {
      console.log('Erro - Login', err);
    }
  }

  const Register = async (data: RegisterForm) => {
    try {
      await userRequest.signUp(data)
        .then(response => {
          console.log('Sucesso - Register', data)
        });
    } catch (err) {
      console.log('Erro - Register', err)
    }
  }

  const RecoveryPessword = async (email: string) => {}

  const VerifyToken = async (token: string) => {}

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        Login,
        Register,
        RecoveryPessword,
        VerifyToken
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
