import { Text } from './styles';

type IProps = {
  text: string;
};

export function Title(props: IProps) {
  const { text } = props;
  return <Text>{text}</Text>;
}
