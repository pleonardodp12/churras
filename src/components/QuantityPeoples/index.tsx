import { Users } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { Text, Wrapper } from './styles';

interface IProps {
  quantity: number;
}

export function QuantityPeoples(props: IProps) {
  const { quantity } = props;
  const { colors } = useTheme();
  return (
    <Wrapper>
      <Users size={24} color={colors.primary} />
      <Text>{quantity}</Text>
    </Wrapper>
  );
}
