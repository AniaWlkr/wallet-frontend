import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

const PrivateRoute = ({
  component: Component,
  isAuthed,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthed ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = state => ({
  isAuthed: authSelectors.isAuthed(state),
});

PrivateRoute.propTypes = {
  component: PropTypes.any,
  isAuthed: PropTypes.bool,
  redirectTo: PropTypes.any,
};

export default connect(mapStateToProps)(PrivateRoute);
