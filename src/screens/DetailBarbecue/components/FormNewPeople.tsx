import * as Yup from 'yup';
import { ErrorMessages } from 'utils/constants';
import { useForm } from 'hooks/useForm';
import { CheckBoxBeer, Input, PrimaryButton } from 'components';
import { X } from 'phosphor-react';
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

  const onSubmit = (values: IFormNewPeople) => {
    console.log(values);
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
