export const formatCurrencyBRL = (currency: number) => {
  const formated = currency.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return formated;
};
