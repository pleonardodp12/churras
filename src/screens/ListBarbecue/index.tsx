import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonCreateBarbecue, Card } from 'components';
import { IResponseBarbecues } from 'context/barbecueContext';
import { useBarbecue } from 'hooks/useBarbecue';
import { toast } from 'react-toastify';
import api from 'services/api';
import { WrapperScreen } from 'styles/global';
import { ErrorMessages } from 'utils/constants';
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
    if (!data.success) {
      return toast.error(ErrorMessages.failedToGetAllChurras);
    }
    return setBarbecues(data.result);
  };

  useEffect(() => {
    handleBarbecues();
  }, []);

  return (
    <WrapperScreen>
      <WrapperOutSide>
        {barbecues?.map((barbecue) => (
          <Card
            key={barbecue.id}
            barbecue={barbecue}
            onClick={() => redirectToDetailBarbecue(barbecue.id)}
          />
        ))}
        <ButtonCreateBarbecue onClick={redirectCreateBarbecue} />
      </WrapperOutSide>
    </WrapperScreen>
  );
}
