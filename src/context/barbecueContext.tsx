import {
  createContext,
  ReactNode,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';

interface IProps {
  children: ReactNode;
}

export interface IPeople {
  name: string;
  drink: boolean;
  amountToPay: number;
  confirm: boolean;
}

export interface IBarbecue {
  id: string;
  date: string;
  reason: string;
  priceDrink: number;
  priceWithoutDrink: number;
  peoples: IPeople[];
}

export interface IResponseBarbecues {
  success: boolean;
  result: IBarbecue[];
}

export interface IResponseBarbecue {
  success: boolean;
  result: IBarbecue;
}

interface IBarbecueContextData {
  barbecues: IBarbecue[];
  selectedBarbecue: IBarbecue;
  setBarbecues: Dispatch<SetStateAction<IBarbecue[]>>;
  setSelectedBarbecue: Dispatch<SetStateAction<IBarbecue>>;
}

export const BarbecueContext = createContext({} as IBarbecueContextData);

export function BarbecueProvider(props: IProps) {
  const { children } = props;
  const [barbecues, setBarbecues] = useState<IBarbecue[]>([] as IBarbecue[]);
  const [selectedBarbecue, setSelectedBarbecue] = useState<IBarbecue>(
    {} as IBarbecue,
  );

  const value = useMemo(
    () => ({
      barbecues,
      setBarbecues,
      selectedBarbecue,
      setSelectedBarbecue,
    }),
    [barbecues, selectedBarbecue],
  );

  return (
    <BarbecueContext.Provider value={value}>
      {children}
    </BarbecueContext.Provider>
  );
}
