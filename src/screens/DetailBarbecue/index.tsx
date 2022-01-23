import { AddButton, PriceTotal, QuantityPeoples } from 'components';
import { IBarbecue } from 'context/barbecueContext';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { WrapperScreen } from 'styles/global';
import { getTotalMoney } from 'utils/helpers';
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

interface IState {
  state: {
    barbecue: IBarbecue;
  };
}

export function DetailBarbecue() {
  const location = useLocation<any | IState>();
  const [barbecue, setBarbecue] = useState<IBarbecue>();

  useEffect(() => {
    if (location.state) {
      setBarbecue(location.state.barbecue);
    }
  }, [location.state, barbecue]);

  return (
    <WrapperScreen>
      <WrapperOutSide>
        <Header>
          <ContentRight>
            <Title>{barbecue?.date}</Title>
            <Description>{barbecue?.reason}</Description>
          </ContentRight>

          <ContentLeft>
            <QuantityPeoples quantity={barbecue?.peoples.length || 0} />
            <PriceTotal currency={getTotalMoney(barbecue?.peoples || [])} />
          </ContentLeft>
        </Header>

        <ListContainer>
          {barbecue?.peoples.map((people) => (
            <ListItem paid={people?.confirm} />
          ))}
          <AddButton />
        </ListContainer>
      </WrapperOutSide>
    </WrapperScreen>
  );
}
