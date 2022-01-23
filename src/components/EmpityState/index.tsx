import { Wrapper, Text } from './styles';

interface IProps {
  icon: any;
  message: string;
}

export function EmpityState(props: IProps) {
  const { icon, message } = props;

  return (
    <Wrapper>
      <img src={icon} alt="empity icon" />
      <Text>{message}</Text>
    </Wrapper>
  );
}
