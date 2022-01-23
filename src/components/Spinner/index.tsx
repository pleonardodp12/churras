import { CircleNotch } from 'phosphor-react';
import { useTheme } from 'styled-components';

interface IProps {
  color?: string;
}

export function Spinner(props: IProps) {
  const { color } = props;
  const { colors } = useTheme();
  return (
    <CircleNotch size={28} color={color || colors.primary}>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="2s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      />
    </CircleNotch>
  );
}

Spinner.defaultProps = {
  color: '',
};
