import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Login, ListBarbecue, DetailBarbecue, CreateBarbecue } from 'screens';

export function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/" exact />
        <Route component={ListBarbecue} path="/churras" exact />
        <Route component={DetailBarbecue} path="/churras/:id" />
        <Route component={CreateBarbecue} path="/churras-novo" />
      </Switch>
    </BrowserRouter>
  );
}
