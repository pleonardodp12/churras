import { InputHTMLAttributes } from 'react';
import { ErrorMessage, PriceTotal } from 'components';
import { Label } from 'components/Inputs/Input/styles';
import { InputWrapper, InputBase, ContentInputs } from './styles';
import { Input } from '../Input';

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
      <Label>{label}</Label>
      <PriceTotal currency={value} />
      <ContentInputs>
        <Input
          {...rest}
          label=""
          isInvalid={isInvalid}
          value={value}
          type="number"
        />
        <div>
          {min}
          <InputBase isInvalid={isInvalid} {...rest} type="range" step={0.5} />
          {max}
        </div>
      </ContentInputs>
      {isInvalid && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}

InputRange.defaultProps = {
  error: '',
};
