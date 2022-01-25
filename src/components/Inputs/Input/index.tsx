import { InputHTMLAttributes } from 'react';
import { ErrorMessage } from 'components';
import { InputWrapper, Label, InputBase } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isInvalid: boolean;
  error?: string;
}

export function Input(props: IProps) {
  const { label, isInvalid, error, ...rest } = props;

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputBase isInvalid={isInvalid} {...rest} />
      {isInvalid ? <ErrorMessage>{error}</ErrorMessage> : null}
    </InputWrapper>
  );
}

Input.defaultProps = {
  error: '',
};
