import { ReactNode } from 'react';
import { ErrorText } from './styles';

type TProps = {
  children: ReactNode;
};

export function ErrorMessage(props: TProps) {
  const { children } = props;
  return <ErrorText>{children}</ErrorText>;
}
