import { useAuth } from 'hooks/useAuth';
import { SignOut } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { ButtonBase } from './styles';

export function LogoutButton() {
  const { colors } = useTheme();
  const { isAuthenticated, signOut } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <ButtonBase onClick={signOut}>
      <SignOut size={24} color={colors.white} />
    </ButtonBase>
  );
}
