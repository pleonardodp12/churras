import * as Yup from 'yup';
import { Input, PasswordInput, PrimaryButton } from 'components';
import { useForm } from 'hooks/useForm';
import { ErrorMessages } from 'utils/constants';
import { useHistory } from 'react-router-dom';
import { WrapperForm } from '../SignIn/styles';

interface IFormLogin {
  login: string;
  password: string;
  confirmPassword: string;
}

const initialValues: IFormLogin = {
  login: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object().shape({
  login: Yup.string().required(ErrorMessages.loginRequired),
  password: Yup.string()
    .required(ErrorMessages.passwordRequired)
    .min(8, ErrorMessages.minPassword),
  confirmPassword: Yup.string()
    .required(ErrorMessages.passwordConfirmRequired)
    .oneOf([Yup.ref('senha'), null], ErrorMessages.confirmPasswordEquals)
    .min(8, ErrorMessages.minPassword),
});

export function SignUp() {
  const history = useHistory();

  const onSubmit = (values: IFormLogin) => {
    console.log(values);
    history.push('churras');
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

        <PasswordInput
          label="Confirmação de senha"
          {...fieldProps('confirmPassword')}
          placeholder="Digite sua senha novamente"
          isInvalid={hasError('confirmPassword')}
          error={errors.confirmPassword}
        />

        <PrimaryButton label="Cadastrar" type="submit" />
      </form>
    </WrapperForm>
  );
}
