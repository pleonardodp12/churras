import { AddButton, PriceTotal, QuantityPeoples } from 'components';
import { WrapperScreen } from 'styles/global';
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

export function DetailBarbecue() {
  return (
    <WrapperScreen>
      <WrapperOutSide>
        <Header>
          <ContentRight>
            <Title>01/12</Title>
            <Description>Niver do Gui</Description>
          </ContentRight>
          <ContentLeft>
            <QuantityPeoples quantity={15} />
            <PriceTotal currencyBarbecue={112.4} />
          </ContentLeft>
        </Header>
        <ListContainer>
          <ListItem paid={false} />
          <ListItem paid />
          <ListItem paid />
          <ListItem paid />
          <AddButton />
        </ListContainer>
      </WrapperOutSide>
    </WrapperScreen>
  );
}
