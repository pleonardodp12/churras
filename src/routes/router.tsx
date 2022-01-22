import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Login } from 'screens/Login';

export function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
}
