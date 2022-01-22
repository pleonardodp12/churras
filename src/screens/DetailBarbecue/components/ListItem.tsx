import { formatCurrencyBRL } from 'utils/helpers';
import { ListItemBase, ListItemText, ListItemPrice, Check } from '../styles';

interface IProps {
  paid: boolean;
}

export function ListItem(props: IProps) {
  const { paid } = props;
  return (
    <ListItemBase>
      <ListItemText>
        <Check paid={paid} />
        Paulo
      </ListItemText>
      <ListItemPrice paid={paid}>{formatCurrencyBRL(240)}</ListItemPrice>
    </ListItemBase>
  );
}
