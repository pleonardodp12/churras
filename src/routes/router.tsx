import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Login, ListBarbecue, DetailBarbecue } from 'screens';

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
