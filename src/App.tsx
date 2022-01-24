import { ThemeProvider } from 'styled-components';
import { Title } from 'components';
import { AppRoute } from 'routes/router';
import { BarbecueProvider } from 'context/barbecueContext';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BarbecueProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Title text="Agenda de Churras" />
        <AppRoute />
        <ToastContainer position="top-center" />
      </ThemeProvider>
    </BarbecueProvider>
  );
}

export default App;
