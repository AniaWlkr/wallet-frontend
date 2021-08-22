import { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { operations, selectors } from '../redux/auth';
import routes from '../routes/routes';
// import Container from '../components/Container';
import Loader from '../components/Loader';
import PrivateRoute from '../routes/privateRoute';

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
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      // <Container>
      <Suspense fallback={<Loader />}>
        <Switch>
          <PrivateRoute
            exact
            path={routes.homepage}
            component={AsyncDashboardPage}
            isAuthed={isAuthenticated}
            redirectTo={routes.login}
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
      // </Container>
    );
  }
}
App.propTypes = {
  getCurrentUser: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

const mapDispatchToProps = {
  getCurrentUser: operations.getCurrentUser,
};

const mapStateToProps = state => ({
  isAuthenticated: selectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
