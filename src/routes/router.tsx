import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ListBarbecue } from 'screens/ListBarbeCue';
import { Login } from 'screens/Login';

export function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/" exact />
        <Route component={ListBarbecue} path="/churras" />
      </Switch>
    </BrowserRouter>
  );
}
