import { IPeople } from 'context/barbecueContext';
import { formatCurrencyBRL } from 'utils/helpers';
import { ListItemBase, ListItemText, ListItemPrice, Check } from '../styles';

interface IProps {
  people: IPeople;
  handleConfirmPaid: () => void;
}

export function ListItem(props: IProps) {
  const { people, handleConfirmPaid } = props;
  return (
    <ListItemBase onClick={handleConfirmPaid}>
      <Check paid={people.confirm} />
      <ListItemText>{people.name}</ListItemText>
      <ListItemPrice paid={people.confirm}>
        {formatCurrencyBRL(people.amountToPay)}
      </ListItemPrice>
    </ListItemBase>
  );
}
