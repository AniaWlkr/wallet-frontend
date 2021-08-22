import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

const PublicRoute = ({
  component: Component,
  isAuthed,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthed && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthed: authSelectors.isAuthed(state),
});

PublicRoute.propTypes = {
  component: PropTypes.any,
  isAuthed: PropTypes.bool,
  redirectTo: PropTypes.any,
};

export default connect(mapStateToProps)(PublicRoute);
