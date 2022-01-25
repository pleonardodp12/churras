import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import api from 'services/api';
import { SuccessMessages } from 'utils/constants';

interface IProps {
  children: ReactNode;
}

interface IUser {
  name: string;
}

interface IFormSignIn {
  email: string;
  password: string;
}

interface IFormSignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IAuthContextData {
  user: IUser | null;
  signIn: (values: IFormSignIn) => Promise<boolean>;
  signUp: (values: IFormSignUp) => Promise<boolean>;
  signOut: () => void;
  isAuthenticated: boolean;
}

interface IResponseSignIn {
  success: boolean;
  token: string;
  error: string;
  result: string;
  user: IUser;
}

interface IResponseSignUp {
  success: boolean;
  result: string;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider(props: IProps) {
  const { children } = props;
  const [cookies, setCookie, removeCookie] = useCookies([
    '@churras:user',
    '@churras:token',
  ]);
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(cookies['@churras:user'] && cookies['@churras:token']),
  );

  const signIn = async (values: IFormSignIn) => {
    const { email, password } = values;
    const { data } = await api.post<IResponseSignIn>('/signin', {
      email,
      password,
    });

    if (data.error) {
      toast.error(data.error);
      return false;
    }
    if (!data.success) {
      toast.error(data.result);
      return false;
    }

    if (data.token) {
      setCookie('@churras:token', data.token);
      setCookie('@churras:user', data.user);
    }
    setIsAuthenticated(true);
    setUser(data.user);
    return true;
  };

  const signUp = async (values: any) => {
    const { name, email, password } = values;
    const { data } = await api.post<IResponseSignUp>('/signup', {
      name,
      email,
      password,
    });

    if (!data.success) {
      toast.error(data.result);
      return false;
    }
    toast.success(SuccessMessages.succesSignUpUser);
    return true;
  };

  const signOut = () => {
    setUser(null);
    removeCookie('@churras:token');
    removeCookie('@churras:user');
  };

  useEffect(() => {
    const isAuth = Boolean(
      cookies['@churras:user'] && cookies['@churras:token'],
    );
    setIsAuthenticated(isAuth);
  }, [user]);

  const value = useMemo(
    () => ({
      isAuthenticated,
      signIn,
      signUp,
      signOut,
      user,
    }),
    [user, isAuthenticated],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
