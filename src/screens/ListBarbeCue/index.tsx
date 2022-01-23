import { ButtonCreateBarbecue, Card } from 'components';
import { IResponseBarbecues } from 'context/barbecueContext';
import { useBarbecue } from 'hooks/useBarbecue';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from 'services/api';
import { WrapperScreen } from 'styles/global';
import { WrapperOutSide } from './styles';

export function ListBarbecue() {
  const history = useHistory();
  const { barbecues, setBarbecues, setSelectedBarbecue } = useBarbecue();

  const redirectToDetailBarbecue = (id: string) => {
    const selectedBarbecue = barbecues.find((barbecue) => barbecue.id === id);
    if (!selectedBarbecue) return;
    setSelectedBarbecue(selectedBarbecue);
    history.push(`churras/${id}`);
  };

  const redirectCreateBarbecue = () => {
    history.push('churras-novo');
  };

  const handleBarbecues = async () => {
    const { data } = await api.get<IResponseBarbecues>('/barbecues');
    if (!data.success) return;
    setBarbecues(data.result);
  };

  useEffect(() => {
    handleBarbecues();
  }, []);

  return (
    <WrapperScreen>
      <WrapperOutSide>
        {barbecues?.map((barbecue) => (
          <Card
            barbecue={barbecue}
            onClick={() => redirectToDetailBarbecue(barbecue.id)}
          />
        ))}
        <ButtonCreateBarbecue onClick={redirectCreateBarbecue} />
      </WrapperOutSide>
    </WrapperScreen>
  );
}
