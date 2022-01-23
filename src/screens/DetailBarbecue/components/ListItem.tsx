import { IPeople } from 'context/barbecueContext';
import { formatCurrencyBRL } from 'utils/helpers';
import { ListItemBase, ListItemText, ListItemPrice, Check } from '../styles';

interface IProps {
  people: IPeople;
}

export function ListItem(props: IProps) {
  const { people } = props;
  return (
    <ListItemBase>
      <ListItemText>
        <Check paid={people.confirm} />
        {people.name}
      </ListItemText>
      <ListItemPrice paid={people.confirm}>
        {formatCurrencyBRL(people.amountToPay)}
      </ListItemPrice>
    </ListItemBase>
  );
}
