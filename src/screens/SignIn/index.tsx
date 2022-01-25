import * as Yup from 'yup';
import { Input, PasswordInput, PrimaryButton } from 'components';
import { useForm } from 'hooks/useForm';
import { ErrorMessages } from 'utils/constants';
import { useHistory } from 'react-router-dom';
import { SecondaryButton } from 'components/Buttons/SecondaryButton';
import { useLoading } from 'hooks/useLoading';
import { useAuth } from 'hooks/useAuth';
import { WrapperForm } from './styles';

interface IFormSignIn {
  email: string;
  password: string;
}

const initialValues: IFormSignIn = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(ErrorMessages.invalidEmail)
    .required(ErrorMessages.loginRequired),
  password: Yup.string().required(ErrorMessages.passwordRequired),
});

export function SignIn() {
  const history = useHistory();
  const { signIn, isAuthenticated } = useAuth();
  const { setLoading } = useLoading();

  const onSubmit = async (values: IFormSignIn) => {
    setLoading(true);
    const auth = await signIn(values);
    setLoading(false);
    if (auth) {
      history.push('churras');
    }
  };

  const { errors, fieldProps, handleSubmit, hasError } = useForm<IFormSignIn>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleScreenSignUp = () => {
    history.push('signup');
  };

  if (isAuthenticated) history.push('/churras');

  return (
    <WrapperForm>
      <form onSubmit={handleSubmit}>
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

        <PrimaryButton label="Entrar" type="submit" />

        <SecondaryButton label="Cadastrar" onClick={handleScreenSignUp} />
      </form>
    </WrapperForm>
  );
}
