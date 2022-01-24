import { useEffect, useState } from 'react';
import {
  AddButton,
  EmpityState,
  PriceTotal,
  PrimaryButton,
  QuantityPeoples,
} from 'components';
import { toast } from 'react-toastify';
import { WrapperScreen } from 'styles/global';
import { getTotalMoney } from 'utils/helpers';
import empityIcon from 'assets/icon-empity-state.svg';
import api from 'services/api';
import { useBarbecue } from 'hooks/useBarbecue';
import { useHistory, useParams } from 'react-router-dom';
import { IPeople, IResponseBarbecue } from 'context/barbecueContext';
import { SecondaryButton } from 'components/SecondaryButton';
import { ErrorMessages, SuccessMessages } from 'utils/constants';
import { ListItem } from './components/ListItem';
import {
  WrapperOutSide,
  Header,
  ContentRight,
  ContentLeft,
  Title,
  Description,
  ListContainer,
  ContainerButtons,
} from './styles';
import { FormNewPeople } from './components/FormNewPeople';

interface IExtendParams {
  id: string;
}

export function DetailBarbecue() {
  const history = useHistory();
  const params = useParams<IExtendParams>();
  const { selectedBarbecue, setSelectedBarbecue } = useBarbecue();
  const [modalNewPeople, setModalNewPeople] = useState(false);

  const handleBarbecue = async () => {
    const { data } = await api.get<IResponseBarbecue>(`barbecues/${params.id}`);
    if (!data.success) {
      return toast.error(ErrorMessages.failedToGetChurras);
    }

    return setSelectedBarbecue(data.result);
  };

  useEffect(() => {
    if (!selectedBarbecue?.id) {
      handleBarbecue();
    }
  }, [selectedBarbecue]);

  const handleModalNewPeople = () => {
    setModalNewPeople((prevState) => !prevState);
  };

  const handleSaveConfirmations = async () => {
    const { data } = await api.put(
      `/barbecues/${selectedBarbecue.id}/confirm`,
      {
        peoples: selectedBarbecue.peoples,
      },
    );

    if (!data.success) {
      return toast.error(ErrorMessages.failedToSaveConfirmations);
    }
    toast.success(SuccessMessages.successOnSaveConfirmations);
    return history.push('/churras');
  };

  const handleBackToListBarbecues = () => {
    history.push('/churras');
  };

  const handleConfirmPaid = (peopleSelected: IPeople, index: number) => {
    const peoples = [...selectedBarbecue.peoples];
    peoples[index].confirm = !peopleSelected.confirm;

    setSelectedBarbecue({
      ...selectedBarbecue,
      peoples,
    });
  };

  return (
    <WrapperScreen>
      {selectedBarbecue && (
        <WrapperOutSide>
          <Header>
            <ContentRight>
              <Title>{selectedBarbecue?.date}</Title>
              <Description>{selectedBarbecue?.reason}</Description>
            </ContentRight>

            <ContentLeft>
              <QuantityPeoples quantity={selectedBarbecue?.peoples?.length} />
              <PriceTotal currency={getTotalMoney(selectedBarbecue?.peoples)} />
            </ContentLeft>
          </Header>

          <ListContainer>
            {selectedBarbecue?.peoples?.length === 0 ? (
              <EmpityState
                icon={empityIcon}
                message="Por enquanto ninguém foi cadastrado"
              />
            ) : (
              selectedBarbecue?.peoples?.map((people, index) => (
                <ListItem
                  handleConfirmPaid={() => handleConfirmPaid(people, index)}
                  people={people}
                />
              ))
            )}

            {modalNewPeople && (
              <FormNewPeople closeModalNewPeople={handleModalNewPeople} />
            )}

            <AddButton onClick={handleModalNewPeople} />
          </ListContainer>
          <ContainerButtons>
            <SecondaryButton
              label="Voltar"
              onClick={handleBackToListBarbecues}
            />
            <PrimaryButton
              label="Salvar"
              onClick={handleSaveConfirmations}
              type="button"
            />
          </ContainerButtons>
        </WrapperOutSide>
      )}
    </WrapperScreen>
  );
}
