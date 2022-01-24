import {
  createContext,
  ReactNode,
  useState,
  SetStateAction,
  Dispatch,
  useMemo,
} from 'react';

interface FormDataContextData {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingContext = createContext({} as FormDataContextData);

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState(false);

  const value = useMemo(
    () => ({
      loading,
      setLoading,
    }),
    [loading],
  );

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}
