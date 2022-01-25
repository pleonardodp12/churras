import { X } from 'phosphor-react';
import { CloseButtonBase } from './styles';

interface IProps {
  onClick: () => void;
}

export function CloseButton(props: IProps) {
  const { onClick } = props;
  return (
    <CloseButtonBase onClick={onClick}>
      <X size={24} />
    </CloseButtonBase>
  );
}
