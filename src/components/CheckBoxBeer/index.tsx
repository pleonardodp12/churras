import { Label } from 'components/Input/styles';
import iconDrink from 'assets/drink.png';
import iconNoDrink from 'assets/no-drink.png';
import { Wrapper, Option } from './styles';

interface IProps {
  label: string;
  drink: boolean;
  onChange: () => void;
}

export function CheckBoxBeer(props: IProps) {
  const { label, drink, onChange } = props;

  return (
    <Wrapper>
      <Label>{label}</Label>
      <div>
        <Option selected={drink} onClick={onChange}>
          <img src={iconDrink} alt="drink" />
          Sim
        </Option>
        <Option selected={!drink} onClick={onChange}>
          <img src={iconNoDrink} alt="drink" />
          Não
        </Option>
      </div>
    </Wrapper>
  );
}
