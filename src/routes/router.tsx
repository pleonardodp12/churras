import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { SignIn } from 'screens/SignIn';
import { SignUp } from 'screens/SignUp';
import { ListBarbecue } from 'screens/ListBarbecue';
import { DetailBarbecue } from 'screens/DetailBarbecue';
import { CreateBarbecue } from 'screens/CreateBarbecue';
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
