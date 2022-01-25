import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {
  SignIn,
  SignUp,
  ListBarbecue,
  DetailBarbecue,
  CreateBarbecue,
} from 'screens';
import PrivateRoute from './PrivateRoute';

export function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={SignIn} path="/" exact />
        <Route component={SignUp} path="/signup" />
        <PrivateRoute component={ListBarbecue} path="/churras" exact />
        <PrivateRoute component={DetailBarbecue} path="/churras/:id" />
        <PrivateRoute component={CreateBarbecue} path="/churras-novo" />
      </Switch>
    </BrowserRouter>
  );
}
