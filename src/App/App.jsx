import { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes/routes';
// import Container from '../components/Container';
import Loader from '../components/Loader';
// import PrivateRoute from '../routes/privateRoute';

const AsyncRegister = lazy(
  () =>
    import(
      '../components/Pages/RegistrationPage'
    ) /* webpackChunkName: "Register" */,
);
const AsyncLogin = lazy(() =>
  import('../components/Pages/LoginPage' /* webpackChunkName: "Login" */),
);
const AsyncDashboardPage = lazy(() =>
  import(
    '../components/Pages/DashboardPage' /* webpackChunkName: "DashboardPage" */
  ),
);

class App extends Component {
  render() {
    return (
      // <Container>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            exact
            path={routes.homepage}
            component={AsyncDashboardPage}
            redirectTo={routes.login}
          />
          <Route
            exact
            path={routes.register}
            component={AsyncRegister}
            redirectTo={routes.login}
          />
          <Route
            exact
            path={routes.login}
            component={AsyncLogin}
            redirectTo={routes.homepage}
          />
        </Switch>
      </Suspense>
      // </Container>
    );
  }
}

export default App;
