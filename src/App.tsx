import { ThemeProvider } from 'styled-components';
import { Title } from 'components';
import { AppRoute } from 'routes/router';
import { BarbecueProvider } from 'context/barbecueContext';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <BarbecueProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Title text="Agenda de Churras" />
        <AppRoute />
      </ThemeProvider>
    </BarbecueProvider>
  );
}

export default App;
