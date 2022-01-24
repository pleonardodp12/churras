import * as Yup from 'yup';
import { Input, PasswordInput, PrimaryButton } from 'components';
import { useForm } from 'hooks/useForm';
import { ErrorMessages } from 'utils/constants';
import { useHistory } from 'react-router-dom';
import { SecondaryButton } from 'components/SecondaryButton';
import { useLoading } from 'hooks/useLoading';
import { useEffect } from 'react';
import { WrapperForm } from './styles';

interface IFormLogin {
  login: string;
  password: string;
}

const initialValues: IFormLogin = {
  login: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  login: Yup.string()
    .email(ErrorMessages.invalidEmail)
    .required(ErrorMessages.loginRequired),
  password: Yup.string().required(ErrorMessages.passwordRequired),
});

export function SignIn() {
  const history = useHistory();
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(false);
  }, []);

  const onSubmit = (values: IFormLogin) => {
    console.log(values);
    history.push('churras');
  };

  const { errors, fieldProps, handleSubmit, hasError } = useForm<IFormLogin>({
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
          {...fieldProps('login')}
          placeholder="Digite seu email"
          isInvalid={hasError('login')}
          error={errors.login}
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
