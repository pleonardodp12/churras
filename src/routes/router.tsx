import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {
  SignIn,
  SignUp,
  DetailBarbecue,
  ListBarbecue,
  CreateBarbecue,
} from 'screens';

export function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={SignIn} path="/" exact />
        <Route component={SignUp} path="/signup" />
        <Route component={ListBarbecue} path="/churras" exact />
        <Route component={DetailBarbecue} path="/churras/:id" />
        <Route component={CreateBarbecue} path="/churras-novo" />
      </Switch>
    </BrowserRouter>
  );
}
