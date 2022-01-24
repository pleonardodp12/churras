import { useAuth } from 'hooks/useAuth';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export default function PrivateRoute(props: RouteProps) {
  const { location, ...routeProps } = props;
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Route {...routeProps} />;
  }
  return <Redirect to={{ pathname: '/', state: { from: location } }} />;
}
