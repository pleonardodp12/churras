import { PriceTotal } from 'components/PriceTotal/intex';
import { QuantityPeoples } from 'components/QuantityPeoples';
import { CardWrapper, Title, RegularText, FooterCard } from './styles';

interface IProps {
  onClick: () => void;
}

export function Card(props: IProps) {
  const { onClick } = props;
  return (
    <CardWrapper onClick={onClick}>
      <Title>01/12</Title>
      <RegularText>Niver do Gui</RegularText>
      <FooterCard>
        <PriceTotal currencyBarbecue={280} />
        <QuantityPeoples quantity={12} />
      </FooterCard>
    </CardWrapper>
  );
}
