import { ReactNode } from 'react';
import { ErrorText } from './styles';

interface IProps {
  children: ReactNode;
}

export function ErrorMessage(props: IProps) {
  const { children } = props;
  return <ErrorText>{children}</ErrorText>;
}
