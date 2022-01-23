import {
  AddButton,
  EmpityState,
  PriceTotal,
  QuantityPeoples,
} from 'components';
import { useEffect, useState } from 'react';
import { WrapperScreen } from 'styles/global';
import { getTotalMoney } from 'utils/helpers';
import empityIcon from 'assets/icon-empity-state.svg';
import { useBarbecue } from 'hooks/useBarbecue';
import api from 'services/api';
import { useParams } from 'react-router-dom';
import { IResponseBarbecue } from 'context/barbecueContext';
import { ListItem } from './components/ListItem';
import {
  WrapperOutSide,
  Header,
  ContentRight,
  ContentLeft,
  Title,
  Description,
  ListContainer,
} from './styles';
import { FormNewPeople } from './components/FormNewPeople';

interface IExtendParams {
  id: string;
}

export function DetailBarbecue() {
  const params = useParams<IExtendParams>();
  const { selectedBarbecue, setSelectedBarbecue } = useBarbecue();
  const [modalNewPeople, setModalNewPeople] = useState(false);

  const handleBarbecue = async () => {
    const { data } = await api.get<IResponseBarbecue>(`barbecues/${params.id}`);
    if (!data.success) return;
    setSelectedBarbecue(data.result);
  };

  useEffect(() => {
    if (!selectedBarbecue?.id) {
      handleBarbecue();
    }
  }, [selectedBarbecue]);

  const handleModalNewPeople = () => {
    setModalNewPeople((prevState) => !prevState);
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
              selectedBarbecue?.peoples?.map((people) => (
                <ListItem people={people} />
              ))
            )}

            {modalNewPeople && (
              <FormNewPeople closeModalNewPeople={handleModalNewPeople} />
            )}

            <AddButton onClick={handleModalNewPeople} />
          </ListContainer>
        </WrapperOutSide>
      )}
    </WrapperScreen>
  );
}
