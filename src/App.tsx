import { Loading, Title } from 'components';
import { AppRoute } from 'routes/router';
import { ToastContainer } from 'react-toastify';
import { Providers } from 'providers/Providers';
import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Providers>
      <GlobalStyles />
      <Title text="Agenda de Churras" />
      <AppRoute />
      <Loading />
      <ToastContainer position="top-center" />
    </Providers>
  );
}

export default App;
