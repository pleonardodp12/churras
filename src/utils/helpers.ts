import { IPeoples } from 'context/barbecueContext';

export const formatCurrencyBRL = (currency: number) => {
  const formated = currency.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return formated;
};

export const getTotalMoney = (peoples: IPeoples[]) => {
  if (!peoples.length) return 0;
  const sumTotalMoney = peoples
    .map((people) => people.amountToPay)
    .reduce((prev, next) => prev + next);
  return sumTotalMoney;
};
