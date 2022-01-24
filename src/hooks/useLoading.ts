import { useContext } from 'react';
import { LoadingContext } from 'context/loadingContext';

export const useLoading = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  return { loading, setLoading };
};
