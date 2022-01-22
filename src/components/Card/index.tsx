import { CurrencyCircleDollar, Users } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { CardWrapper, Title, RegularText, FooterCard } from './styles';

export function Card() {
  const { colors } = useTheme();
  return (
    <CardWrapper>
      <Title>01/12</Title>
      <RegularText>Niver do Gui</RegularText>
      <FooterCard>
        <section>
          <Users size={28} color={colors.primary} />
          <RegularText>12</RegularText>
        </section>
        <section>
          <CurrencyCircleDollar
            size={28}
            color={colors.primary}
            weight="fill"
          />
          <RegularText>R$140</RegularText>
        </section>
      </FooterCard>
    </CardWrapper>
  );
}
