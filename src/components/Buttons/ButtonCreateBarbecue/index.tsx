import iconChurras from 'assets/icon-churras.svg';

import { ButtonWrapper } from './styles';

interface IProps {
  onClick: () => void;
}

export function ButtonCreateBarbecue(props: IProps) {
  const { onClick } = props;

  return (
    <ButtonWrapper onClick={onClick}>
      <img src={iconChurras} alt="churras" />
      <h6>Adicionar Churras</h6>
    </ButtonWrapper>
  );
}
