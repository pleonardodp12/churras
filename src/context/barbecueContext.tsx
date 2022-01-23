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

export interface IPeoples {
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
  peoples: IPeoples[];
}

export interface IResponseBarbecues {
  success: boolean;
  result: IBarbecue[];
}

interface IBarbecueContextData {
  barbecues: IBarbecue[];
  setBarbecues: Dispatch<SetStateAction<IBarbecue[]>>;
}

export const BarbecueContext = createContext({} as IBarbecueContextData);

export function BarbecueProvider(props: IProps) {
  const { children } = props;
  const [barbecues, setBarbecues] = useState<any>();

  const value = useMemo(
    () => ({
      barbecues,
      setBarbecues,
    }),
    [barbecues],
  );

  return (
    <BarbecueContext.Provider value={value}>
      {children}
    </BarbecueContext.Provider>
  );
}
