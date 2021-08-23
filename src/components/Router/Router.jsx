import { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import routes from '../../routes/routes';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Loader from '../Loader';
// import DiagramTab from '../DiagramTab/DiagramTab';
// console.log(routes);

const DashBoardPage = lazy(() => import('../../Pages/DashBoardPage'));
const RegisterPage = lazy(() => import('../../Pages/RegisterPage'));
const LoginPage = lazy(() => import('../../Pages/LoginPage'));

const Router = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        {/* <DiagramTab /> */}
        <Switch>
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.dashBoard}
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
        </Switch>
      </Suspense>
    </div>
  );
};

export default Router;
