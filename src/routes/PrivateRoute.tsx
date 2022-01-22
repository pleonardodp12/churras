import { Redirect, Route, RouteProps } from 'react-router-dom';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
} & RouteProps;

export default function ProtectedRoute(props: ProtectedRouteProps) {
  const { isAuthenticated, authenticationPath, ...routeProps } = props;

  if (isAuthenticated) {
    return <Route {...routeProps} />;
  }
  return <Redirect to={{ pathname: authenticationPath }} />;
}
