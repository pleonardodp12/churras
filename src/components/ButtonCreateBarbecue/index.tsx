import iconChurras from 'assets/icon-churras.svg';

import { ButtonWrapper } from './styles';

export function ButtonCreateBarbecue() {
  return (
    <ButtonWrapper>
      <img src={iconChurras} alt="churras" />
      <h6>Adicionar Churras</h6>
    </ButtonWrapper>
  );
}
