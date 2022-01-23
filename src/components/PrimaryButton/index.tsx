import { Spinner } from 'components';
import { ButtonHTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import { Button } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loading?: boolean;
}

export function PrimaryButton(props: IProps) {
  const { label, loading, ...rest } = props;
  const { colors } = useTheme();
  return (
    <Button {...rest}>
      {loading ? <Spinner color={colors.white} /> : label}
    </Button>
  );
}

PrimaryButton.defaultProps = {
  loading: false,
};
