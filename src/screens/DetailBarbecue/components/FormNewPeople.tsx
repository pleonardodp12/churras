import * as Yup from 'yup';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ErrorMessages } from 'utils/constants';
import { useForm } from 'hooks/useForm';
import { CheckBoxBeer, Input, PrimaryButton } from 'components';
import { X } from 'phosphor-react';
import api from 'services/api';
import { useBarbecue } from 'hooks/useBarbecue';
import { Form, CloseButton } from '../styles';

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
  const history = useHistory();
  const { selectedBarbecue, setSelectedBarbecue } = useBarbecue();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: IFormNewPeople) => {
    const valueFormated = {
      ...values,
      confirm: false,
      amountToPay: values.drink
        ? selectedBarbecue.priceDrink
        : selectedBarbecue.priceWithoutDrink,
    };

    setIsLoading(true);
    const { data } = await api.post<{ success: boolean }>(
      `/barbecues/${selectedBarbecue.id}`,
      valueFormated,
    );
    setIsLoading(false);

    if (!data.success) return;

    const peoples = [...selectedBarbecue.peoples];
    peoples.push(valueFormated);

    setSelectedBarbecue({
      ...selectedBarbecue,
      peoples,
    });
    closeModalNewPeople();
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
      <CloseButton onClick={closeModalNewPeople}>
        <X size={24} />
      </CloseButton>
      <Input
        label="Nome"
        {...fieldProps('name')}
        placeholder="Nome"
        value={values.name}
        isInvalid={hasError('name')}
        error={errors.name}
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
