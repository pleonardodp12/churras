import { ButtonCreateBarbecue, Card } from 'components';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from 'services/api';
import { WrapperScreen } from 'styles/global';
import { WrapperOutSide } from './styles';

export function ListBarbecue() {
  const history = useHistory();

  const redirectToDetailBarbecue = (id: string) => {
    history.push(`churras/${id}`);
  };

  const redirectCreateBarbecue = () => {
    history.push('churras-novo');
  };

  const handleBarbecues = async () => {
    const response = await api.get('/barbecues');

    console.log('response', response);
  };

  useEffect(() => {
    handleBarbecues();
  }, []);

  return (
    <WrapperScreen>
      <WrapperOutSide>
        <Card onClick={() => redirectToDetailBarbecue('1')} />
        <Card onClick={() => redirectToDetailBarbecue('2')} />
        <Card onClick={() => redirectToDetailBarbecue('3')} />
        <ButtonCreateBarbecue onClick={redirectCreateBarbecue} />
      </WrapperOutSide>
    </WrapperScreen>
  );
}
