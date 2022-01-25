import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Input, PasswordInput, PrimaryButton } from 'components';
import { useForm } from 'hooks/useForm';
import { ErrorMessages } from 'utils/constants';
import { useLoading } from 'hooks/useLoading';
import { SecondaryButton } from 'components/SecondaryButton';
import { useAuth } from 'hooks/useAuth';
import { WrapperForm } from '../SignIn/styles';

interface IFormSignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: IFormSignUp = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(ErrorMessages.nameRequired),
  email: Yup.string()
    .email(ErrorMessages.invalidEmail)
    .required(ErrorMessages.loginRequired),
  password: Yup.string()
    .required(ErrorMessages.passwordRequired)
    .min(6, ErrorMessages.minPassword),
  confirmPassword: Yup.string()
    .required(ErrorMessages.passwordConfirmRequired)
    .oneOf([Yup.ref('password'), null], ErrorMessages.confirmPasswordEquals)
    .min(6, ErrorMessages.minPassword),
});

export function SignUp() {
  const history = useHistory();
  const { signUp } = useAuth();
  const { setLoading } = useLoading();

  const onSubmit = async (values: IFormSignUp) => {
    setLoading(true);
    const signup = await signUp(values);
    setLoading(false);

    if (signup) {
      history.push('/');
    }
  };

  const { errors, fieldProps, handleSubmit, hasError } = useForm<IFormSignUp>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleBack = () => {
    history.push('/');
  };

  return (
    <WrapperForm>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          {...fieldProps('name')}
          placeholder="Digite seu nome"
          isInvalid={hasError('name')}
          error={errors.name}
        />

        <Input
          label="Email"
          {...fieldProps('email')}
          placeholder="Digite seu email"
          isInvalid={hasError('email')}
          error={errors.email}
        />

        <PasswordInput
          label="Senha"
          {...fieldProps('password')}
          placeholder="Digite sua senha"
          isInvalid={hasError('password')}
          error={errors.password}
        />

        <PasswordInput
          label="Confirmação de senha"
          {...fieldProps('confirmPassword')}
          placeholder="Digite sua senha novamente"
          isInvalid={hasError('confirmPassword')}
          error={errors.confirmPassword}
        />

        <PrimaryButton label="Cadastrar" type="submit" />

        <SecondaryButton label="Voltar" type="button" onClick={handleBack} />
      </form>
    </WrapperForm>
  );
}
