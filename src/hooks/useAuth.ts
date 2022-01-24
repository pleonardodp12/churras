import { useContext } from 'react';
import { AuthContext } from 'context/authContext';

export const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};
