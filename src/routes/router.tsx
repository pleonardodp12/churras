import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ListBarbecue } from 'screens/ListBarbecue';
import { DetailBarbecue } from 'screens/DetailBarbecue';
import { Login } from 'screens/Login';

export function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/" exact />
        <Route component={ListBarbecue} path="/churras" exact />
        <Route component={DetailBarbecue} path="/churras/:id" />
      </Switch>
    </BrowserRouter>
  );
}
