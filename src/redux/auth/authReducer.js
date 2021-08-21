import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import actions from '../auth/authActions';

const user = { name: null, email: null };

const authUserReducer = createReducer(user, {
  [actions.registerSuccess]: (_, action) => action,
  [actions.loginSuccess]: (_, action) => action,
  [actions.logoutSuccess]: () => user,
  [actions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const isAuthedReducer = createReducer(true, {
  [actions.registerSuccess]: () => true,
  [actions.registerError]: () => false,
  [actions.getCurrentUserSuccess]: () => true,
  [actions.getCurrentUserError]: () => false,
  [actions.loginError]: () => false,
  [actions.loginSuccess]: () => true,
  [actions.logoutSuccess]: () => false,
});

const token = createReducer(null, {
  [actions.registerUserSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.getCurrentUserError]: () => null,
  [actions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [actions.registerUserError]: (_, { payload }) => payload,
  [actions.loginError]: (_, { payload }) => payload,
  [actions.logoutError]: (_, { payload }) => payload,
  [actions.getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  authUserReducer,
  isAuthedReducer,
  token,
  error,
});
