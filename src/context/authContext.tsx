import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import api from 'services/api';

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

interface IAuthContextData {
  user: IUser | null;
  signIn: (values: IFormSignIn) => Promise<boolean>;
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

  const signOut = () => {
    setUser(null);
    removeCookie('@churras:token');
  };

  useEffect(() => {
    const isAuth = Boolean(
      cookies['@churras:user'] && cookies['@churras:token'],
    );
    setIsAuthenticated(isAuth);
  }, [user]);

  const value = useMemo(
    () => ({
      signIn,
      isAuthenticated,
      signOut,
      user,
    }),
    [user, isAuthenticated],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
