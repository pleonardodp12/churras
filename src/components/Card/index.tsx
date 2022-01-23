import { PriceTotal, QuantityPeoples } from 'components';
import { IBarbecue } from 'context/barbecueContext';
import { getTotalMoney } from 'utils/helpers';
import { CardWrapper, Title, RegularText, FooterCard } from './styles';

interface IProps {
  onClick: () => void;
  barbecue: IBarbecue;
}

export function Card(props: IProps) {
  const { onClick, barbecue } = props;

  if (!barbecue) return null;

  return (
    <CardWrapper onClick={onClick}>
      <Title>{barbecue.date}</Title>
      <RegularText>{barbecue.reason}</RegularText>
      <FooterCard>
        <PriceTotal currency={getTotalMoney(barbecue.peoples)} />
        <QuantityPeoples quantity={barbecue.peoples?.length} />
      </FooterCard>
    </CardWrapper>
  );
}
