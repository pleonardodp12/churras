import { Dispatch } from 'react';
import DatePicker, { DatePickerProps } from 'react-date-picker';

import { Label } from 'components/Inputs/Input/styles';
import { ErrorMessage } from 'components';

import { Wrapper } from './styles';

interface IProps extends DatePickerProps {
  label: string;
  isInvalid: boolean;
  error?: string;
  value: Date;
  onChange: Dispatch<React.SetStateAction<Date>>;
}

export function DatePickerInput(props: IProps) {
  const { label, isInvalid, error, value, onChange, ...rest } = props;

  return (
    <Wrapper isInvalid={isInvalid}>
      <Label>{label}</Label>
      <DatePicker
        {...rest}
        onChange={onChange}
        value={value}
        calendarIcon={null}
        clearIcon={null}
        locale="pt"
      />
      {isInvalid && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
}

DatePickerInput.defaultProps = {
  error: '',
};
