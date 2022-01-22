import { CurrencyCircleDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { formatCurrencyBRL } from 'utils/helpers';
import { Text, Wrapper } from './styles';

interface IProps {
  currencyBarbecue: number;
}

export function PriceTotal(props: IProps) {
  const { currencyBarbecue } = props;
  const { colors } = useTheme();
  return (
    <Wrapper>
      <CurrencyCircleDollar size={24} color={colors.primary} weight="fill" />
      <Text>{formatCurrencyBRL(currencyBarbecue)}</Text>
    </Wrapper>
  );
}
