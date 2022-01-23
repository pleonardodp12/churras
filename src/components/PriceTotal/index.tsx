import { CurrencyCircleDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { formatCurrencyBRL } from 'utils/helpers';
import { Text, Wrapper } from './styles';

interface IProps {
  currency: number;
}

export function PriceTotal(props: IProps) {
  const { currency } = props;
  const { colors } = useTheme();

  return (
    <Wrapper>
      <CurrencyCircleDollar size={24} color={colors.primary} weight="fill" />
      <Text>{formatCurrencyBRL(currency)}</Text>
    </Wrapper>
  );
}
