import { ButtonCreateBarbecue } from 'components/ButtonCreateBarbecue';
import { Card } from 'components/Card';
import { WrapperScreen } from 'styles/global';
import { WrapperOutSide } from './styles';

export function ListBarbecue() {
  return (
    <WrapperScreen>
      <WrapperOutSide>
        <Card />
        <Card />
        <Card />
        <ButtonCreateBarbecue />
      </WrapperOutSide>
    </WrapperScreen>
  );
}
