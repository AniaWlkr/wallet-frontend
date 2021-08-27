import { Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from '../../routes/routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Loader from '../Loader';

const DashBoardPage = lazy(() => import('../../Pages/DashBoardPage'));
const RegisterPage = lazy(() => import('../../Pages/RegisterPage'));
const LoginPage = lazy(() => import('../../Pages/LoginPage'));

const Router = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.login}
          >
            <RegisterPage />
          </PublicRoute>

          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.dashBoard}
          >
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path={routes.dashBoard} redirectTo={routes.login}>
            <DashBoardPage />
          </PrivateRoute>
          <PrivateRoute path={routes.statistics} redirectTo={routes.login}>
            <DashBoardPage />
          </PrivateRoute>
          <PrivateRoute path={routes.currency} redirectTo={routes.login}>
            <DashBoardPage />
          </PrivateRoute>
          <Redirect to={routes.dashBoard} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Router;
