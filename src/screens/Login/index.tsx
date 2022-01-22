import { Input } from 'components/Input';
import { PrimaryButton } from 'components/PrimaryButton';
import { WrapperForm } from './styles';

export function Login() {
  return (
    <WrapperForm>
      <form>
        <Input label="Email" isInvalid={false} error="" />
        <Input label="Senha" isInvalid={false} error="tErro" isPassword />
        <PrimaryButton label="Entrar" />
      </form>
    </WrapperForm>
  );
}
