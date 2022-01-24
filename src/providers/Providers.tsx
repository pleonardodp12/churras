import { BarbecueProvider } from 'context/barbecueContext';
import { LoadingProvider } from 'context/loadingContext';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

interface Props {
  children: ReactNode;
}

export function Providers(props: Props) {
  const { children } = props;

  return (
    <BarbecueProvider>
      <LoadingProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </LoadingProvider>
    </BarbecueProvider>
  );
}
