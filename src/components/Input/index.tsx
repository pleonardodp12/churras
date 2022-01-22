import { ErrorMessage } from 'components/ErrorMessage';
import { InputHTMLAttributes, useState, useMemo, useEffect } from 'react';
import { Eye, EyeSlash } from 'phosphor-react';
import { InputWrapper, Label, InputBase, ContentIconPassword } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isInvalid: boolean;
  error: string;
  isPassword?: boolean;
}

export function Input(props: IProps) {
  const { label, isInvalid, error, isPassword = false, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordInput, setInsPasswordInput] = useState(false);

  const memoized = useMemo(() => {
    const passwordInputType = showPassword ? 'text' : 'password';
    const passwordIcon = showPassword ? <Eye /> : <EyeSlash />;

    return { passwordInputType, passwordIcon };
  }, [showPassword]);

  useEffect(() => {
    if (isPassword) {
      setInsPasswordInput(true);
    }
  }, [isPassword]);

  const onClickToggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputBase
        isInvalid={isInvalid}
        type={memoized.passwordInputType}
        {...rest}
      />
      {isPasswordInput && (
        <ContentIconPassword onClick={onClickToggleShowPassword}>
          {memoized.passwordIcon}
        </ContentIconPassword>
      )}
      {isInvalid && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}

Input.defaultProps = {
  isPassword: false,
};
