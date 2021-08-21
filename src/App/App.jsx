import styles from './App.module.css';
import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes/routes';

const AsyncRegister = lazy(() =>
  import(
    '../components/Pages/RegistrationPage' /* webpackChunkName: "Register" */
  ),
);
const AsyncLogin = lazy(() =>
  import('../components/Pages/LoginPage' /* webpackChunkName: "Login" */),
);
const AsyncDashboardPage = lazy(() =>
  import(
    '../components/Pages/DashboardPage' /* webpackChunkName: "DashboardPage" */
  ),
);

function App() {
  return (
    <div className={styles.App}>
      <h1>Wallet</h1>
      <div>
        <Suspense fallback={<h1 className="loading">Loading...</h1>}>
          <Switch>
            <Route
              exact
              path={routes.homepage}
              component={AsyncDashboardPage}
            />
            <Route
              exact
              restricted
              path={routes.register}
              redirectTo={routes.login}
              component={AsyncRegister}
            />
            <Route
              exact
              restricted
              path={routes.login}
              redirectTo={routes.homepage}
              component={AsyncLogin}
            />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
