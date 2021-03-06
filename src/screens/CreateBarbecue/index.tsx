import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { WrapperScreen } from 'styles/global';
import { useForm } from 'hooks/useForm';
import {
  CloseButton,
  DatePickerInput,
  Input,
  InputRange,
  PrimaryButton,
} from 'components';
import { IResponseBarbecues } from 'context/barbecueContext';
import { toast } from 'react-toastify';
import api from 'services/api';
import moment from 'moment';
import { ErrorMessages, SuccessMessages } from 'utils/constants';
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
  priceDrink: Yup.number()
    .required(ErrorMessages.priceDrinkRequired)
    .min(1, ErrorMessages.priceDrinkMinValue)
    .max(100, ErrorMessages.priceDrinkMaxValue),
  priceWithoutDrink: Yup.number()
    .required(ErrorMessages.priceDrinkRequired)
    .min(1, ErrorMessages.priceDrinkMinValue)
    .max(100, ErrorMessages.priceDrinkMaxValue),
});

export function CreateBarbecue() {
  const history = useHistory();
  const [date, setDate] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: IFormCreateBarbecue) => {
    setIsLoading(true);
    const { data } = await api.post<IResponseBarbecues>('/barbecues', values);
    setIsLoading(false);
    if (!data.success) {
      return toast.error(ErrorMessages.failedOnCreateChurras);
    }
    toast.success(SuccessMessages.successOnCreateChurras);
    return history.push('churras');
  };

  const { errors, fieldProps, handleSubmit, hasError, setValue, values } =
    useForm<IFormCreateBarbecue>({
      initialValues,
      onSubmit,
      validationSchema,
    });

  useEffect(() => {
    const dateFormated = date.toLocaleDateString();
    if (!date) setValue('date', '');
    if (date) {
      setValue('date', dateFormated);
    }
  }, [date]);

  const handleBack = () => {
    history.goBack();
  };

  return (
    <WrapperScreen>
      <WrapperOutSide>
        <CloseButton onClick={handleBack} />
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
            value={date}
            onChange={setDate}
            error={errors.date}
          />
          <InputRange
            label="Pre??o com bebida"
            isInvalid={hasError('priceDrink')}
            {...fieldProps('priceDrink')}
            error={errors.priceDrink}
            placeholder="Digite o pre??o com bebidas"
            value={values.priceDrink}
            min={0}
            max={100}
          />

          <InputRange
            label="Pre??o sem bebida"
            isInvalid={hasError('priceWithoutDrink')}
            {...fieldProps('priceWithoutDrink')}
            error={errors.priceWithoutDrink}
            placeholder="Digite o pre??o sem bebidas"
            value={values.priceWithoutDrink}
            min={0}
            max={100}
          />
          <PrimaryButton label="Criar" type="submit" loading={isLoading} />
        </form>
      </WrapperOutSide>
    </WrapperScreen>
  );
}
