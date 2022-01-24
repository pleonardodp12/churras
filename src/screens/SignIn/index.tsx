import * as Yup from 'yup';
import { Input, PasswordInput, PrimaryButton } from 'components';
import { useForm } from 'hooks/useForm';
import { ErrorMessages } from 'utils/constants';
import { useHistory } from 'react-router-dom';
import { SecondaryButton } from 'components/SecondaryButton';
import { toast } from 'react-toastify';
import { useLoading } from 'hooks/useLoading';
import api from 'services/api';
import { WrapperForm } from './styles';

interface IFormSignIn {
  email: string;
  password: string;
}

interface IResponseSignIn {
  success: boolean;
  token: string;
  error: string;
  result: string;
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
  const { setLoading } = useLoading();

  const onSubmit = async (values: IFormSignIn) => {
    const { email, password } = values;
    setLoading(true);
    const { data } = await api.post<IResponseSignIn>('/signin', {
      email,
      password,
    });
    setLoading(false);
    if (data.error) {
      return toast.error(data.error);
    }
    if (!data.success) {
      return toast.error(data.result);
    }

    localStorage.setItem('token', data.token);
    return history.push('churras');
  };

  const { errors, fieldProps, handleSubmit, hasError } = useForm<IFormSignIn>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleScreenSignUp = () => {
    history.push('signup');
  };

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
