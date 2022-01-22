import { InputHTMLAttributes, useState, useMemo } from 'react';
import { ErrorMessage } from 'components';
import { Eye, EyeSlash } from 'phosphor-react';
import {
  InputWrapper,
  Label,
  InputBase,
  ContentIconPassword,
} from '../Input/styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isInvalid: boolean;
  error?: string;
}

export function PasswordInput(props: IProps) {
  const { label, isInvalid, error, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  const memoized = useMemo(() => {
    const passwordInputType = showPassword ? 'text' : 'password';
    const passwordIcon = showPassword ? <Eye /> : <EyeSlash />;

    return { passwordInputType, passwordIcon };
  }, [showPassword]);

  const onClickToggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputBase
        isInvalid={isInvalid}
        type={memoized.passwordInputType}
        {...rest}
      />
      {}
      <ContentIconPassword onClick={onClickToggleShowPassword}>
        {memoized.passwordIcon}
      </ContentIconPassword>
      {isInvalid && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}

PasswordInput.defaultProps = {
  error: '',
};
