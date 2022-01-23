import { InputHTMLAttributes } from 'react';
import { ErrorMessage, PriceTotal } from 'components';
import { Label } from 'components/Input/styles';
import { InputWrapper, InputBase } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isInvalid: boolean;
  error?: string;
  value: number;
}

export function InputRange(props: IProps) {
  const { label, isInvalid, error, min, max, value, ...rest } = props;

  return (
    <InputWrapper>
      <Label>
        {label}
        <PriceTotal currency={value} />
      </Label>
      <div>
        {min}
        <InputBase isInvalid={isInvalid} {...rest} type="range" step={0.5} />
        {max}
      </div>
      {isInvalid && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}

InputRange.defaultProps = {
  error: '',
};
