import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import actions from '../auth/authActions';

const user = '';

const authUserReducer = createReducer(user, {
  [actions.registerSuccess]: (_, action) => action,
  [actions.loginSuccess]: (_, action) => action,
  [actions.logoutSuccess]: () => user,
});

const isAuthedReducer = createReducer(true, {
  [actions.registerSuccess]: () => true,
  [actions.registerError]: () => false,
  // [actions.getCurrentUserSuccess]: () => true,
  // [actions.getCurrentUserError]: () => false,
  [actions.loginError]: () => false,
  [actions.loginSuccess]: () => true,
  [actions.logoutSuccess]: () => false,
});

export { authUserReducer, isAuthedReducer };
