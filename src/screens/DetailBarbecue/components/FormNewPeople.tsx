import * as Yup from 'yup';
import { ErrorMessages } from 'utils/constants';
import { useForm } from 'hooks/useForm';
import api from 'services/api';
import { CheckBoxBeer, CloseButton, Input, PrimaryButton } from 'components';
import { toast } from 'react-toastify';
import { useBarbecue } from 'hooks/useBarbecue';
import { Form, Title } from '../styles';

interface IProps {
  closeModalNewPeople: () => void;
}

interface IFormNewPeople {
  name: string;
  drink: boolean;
}

const initialValues: IFormNewPeople = {
  name: '',
  drink: true,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(ErrorMessages.loginRequired),
});

export function FormNewPeople(props: IProps) {
  const { closeModalNewPeople } = props;
  const { selectedBarbecue, setSelectedBarbecue } = useBarbecue();

  const onSubmit = async (values: IFormNewPeople) => {
    const valueFormated = {
      ...values,
      confirm: false,
      amountToPay: values.drink
        ? selectedBarbecue.priceDrink
        : selectedBarbecue.priceWithoutDrink,
    };
    const { data } = await api.post<{ success: boolean }>(
      `/barbecues/${selectedBarbecue.id}`,
      valueFormated,
    );

    if (!data.success) {
      return toast.error(ErrorMessages.alreadySomeoneInChurras);
    }

    const peoples = [...selectedBarbecue.peoples];
    peoples.push(valueFormated);

    setSelectedBarbecue({
      ...selectedBarbecue,
      peoples,
    });

    toast.success(`Sucesso ao adicionar ${values.name} no churras!`);

    return closeModalNewPeople();
  };

  const { errors, fieldProps, handleSubmit, hasError, values, setValue } =
    useForm<IFormNewPeople>({
      initialValues,
      onSubmit,
      validationSchema,
    });

  const onChangeDrink = () => {
    setValue('drink', !values.drink);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Title>{selectedBarbecue.reason}:</Title>
      <CloseButton onClick={closeModalNewPeople} />
      <Input
        label="Nome"
        {...fieldProps('name')}
        placeholder="Nome"
        value={values.name}
        isInvalid={hasError('name')}
        error={errors.name}
        autoComplete="off"
      />
      <CheckBoxBeer
        label="Bebe?"
        drink={values.drink}
        onChange={onChangeDrink}
      />
      <PrimaryButton label="Adicionar" type="submit" />
    </Form>
  );
}
