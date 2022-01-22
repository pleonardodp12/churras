import { Plus } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import { Button } from './styles';

type IProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function AddButton(props: IProps) {
  const { ...rest } = props;
  const { colors } = useTheme();
  return (
    <Button {...rest}>
      <Plus size={24} color={colors.white} />
    </Button>
  );
}
