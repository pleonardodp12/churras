import { ReactNode } from 'react';
import { AuthProvider } from 'context/authContext';
import { BarbecueProvider } from 'context/barbecueContext';
import { LoadingProvider } from 'context/loadingContext';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

interface Props {
  children: ReactNode;
}

export function Providers(props: Props) {
  const { children } = props;

  return (
    <CookiesProvider>
      <AuthProvider>
        <BarbecueProvider>
          <LoadingProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </LoadingProvider>
        </BarbecueProvider>
      </AuthProvider>
    </CookiesProvider>
  );
}
