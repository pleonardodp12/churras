import { ThemeProvider } from 'styled-components';
import { Title } from 'components/Title';
import { AppRoute } from 'routes/router';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Title text="Agenda de Churras" />
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;
