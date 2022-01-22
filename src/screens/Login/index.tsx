import * as Yup from 'yup';
import { Input } from 'components/Input';
import { PrimaryButton } from 'components/PrimaryButton';
import { useForm } from 'hooks/useForm';
import { ErrorMessages } from 'utils/constants';
import { PasswordInput } from 'components/PasswordInput';
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
  login: Yup.string().required(ErrorMessages.loginRequired),
  password: Yup.string().required(ErrorMessages.passwordRequired),
});

export function Login() {
  const onSubmit = async (values: IFormLogin) => {
    console.log(values);
  };

  const { errors, fieldProps, handleSubmit, hasError } = useForm<IFormLogin>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <WrapperForm>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          {...fieldProps('login')}
          isInvalid={hasError('login')}
          error={errors.login}
        />
        <PasswordInput
          label="Senha"
          {...fieldProps('password')}
          isInvalid={hasError('password')}
          error={errors.password}
        />
        <PrimaryButton label="Entrar" type="submit" />
      </form>
    </WrapperForm>
  );
}
