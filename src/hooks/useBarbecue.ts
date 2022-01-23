import { useContext } from 'react';
import { BarbecueContext } from 'context/barbecueContext';

export const useBarbecue = () => {
  const barbecue = useContext(BarbecueContext);

  return barbecue;
};
