import { ButtonCreateBarbecue } from 'components/ButtonCreateBarbecue';
import { Card } from 'components/Card';
import { useHistory } from 'react-router-dom';
import { WrapperScreen } from 'styles/global';
import { WrapperOutSide } from './styles';

export function ListBarbecue() {
  const history = useHistory();
  const redirectToDetailBarbecue = (id: string) => {
    history.push(`churras/${id}`);
  };

  return (
    <WrapperScreen>
      <WrapperOutSide>
        <Card onClick={() => redirectToDetailBarbecue('1')} />
        <Card onClick={() => redirectToDetailBarbecue('2')} />
        <Card onClick={() => redirectToDetailBarbecue('3')} />
        <ButtonCreateBarbecue />
      </WrapperOutSide>
    </WrapperScreen>
  );
}
