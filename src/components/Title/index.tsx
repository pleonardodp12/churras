import { Text } from './styles';

type TProps = {
  text: string;
};

export function Title(props: TProps) {
  const { text } = props;
  return <Text>{text}</Text>;
}
