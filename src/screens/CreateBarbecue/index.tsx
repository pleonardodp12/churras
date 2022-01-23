import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { WrapperScreen } from 'styles/global';
import { useForm } from 'hooks/useForm';
import { DatePickerInput, Input, InputRange, PrimaryButton } from 'components';
import { useEffect, useState } from 'react';
import { ErrorMessages } from 'utils/constants';
import moment from 'moment';
import { WrapperOutSide, TitlePage } from './styles';

interface IFormCreateBarbecue {
  reason: string;
  date: string;
  priceDrink: number;
  priceWithoutDrink: number;
}

const initialValues: IFormCreateBarbecue = {
  reason: '',
  date: '',
  priceDrink: 20,
  priceWithoutDrink: 10,
};

const validationSchema = Yup.object().shape({
  reason: Yup.string().required(ErrorMessages.reasonRequired),
  date: Yup.string()
    .required(ErrorMessages.dateRequired)
    .test(
      'Date valid',
      ErrorMessages.previousDate,
      (value) =>
        moment(value, 'DD/MM/YYYY').isAfter() ||
        moment().isSame(moment(value, 'DD/MM/YYYY'), 'day'),
    ),
  priceDrink: Yup.string().required(),
  priceWithoutDrink: Yup.string().required(),
});

export function CreateBarbecue() {
  const history = useHistory();
  const [startDate, setStartDate] = useState<Date>(new Date());

  const onSubmit = (values: IFormCreateBarbecue) => {
    console.log(values);
  };

  const { errors, fieldProps, handleSubmit, hasError, setValue, values } =
    useForm<IFormCreateBarbecue>({
      initialValues,
      onSubmit,
      validationSchema,
    });

  useEffect(() => {
    const date = startDate.toLocaleDateString();
    if (!startDate) setValue('date', '');
    if (startDate) {
      setValue('date', date);
    }
  }, [startDate]);

  return (
    <WrapperScreen>
      <WrapperOutSide>
        <TitlePage>Criar churras</TitlePage>
        <form onSubmit={handleSubmit}>
          <Input
            label="Motivo"
            {...fieldProps('reason')}
            placeholder="Qual o motivo do churras?"
            isInvalid={hasError('reason')}
            error={errors.reason}
          />
          <DatePickerInput
            label="Data"
            {...fieldProps('date')}
            isInvalid={hasError('date')}
            value={startDate}
            onChange={setStartDate}
            error={errors.date}
          />
          <InputRange
            label="Preço com bebida"
            isInvalid={hasError('priceDrink')}
            {...fieldProps('priceDrink')}
            error={errors.priceDrink}
            value={values.priceDrink}
            min={0}
            max={100}
          />

          <InputRange
            label="Preço sem bebida"
            isInvalid={hasError('priceWithoutDrink')}
            {...fieldProps('priceWithoutDrink')}
            error={errors.priceWithoutDrink}
            value={values.priceWithoutDrink}
            min={0}
            max={100}
          />
          <PrimaryButton label="Criar" type="submit" />
        </form>
      </WrapperOutSide>
    </WrapperScreen>
  );
}
