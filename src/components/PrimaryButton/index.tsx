import { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function PrimaryButton(props: IProps) {
  const { label, ...rest } = props;
  return <Button {...rest}>{label}</Button>;
}
