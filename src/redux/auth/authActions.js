import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('registerRequest');
const registerSuccess = createAction('registerSuccess');
const registerError = createAction('registerError');

const loginRequest = createAction('loginRequest');
const loginSuccess = createAction('loginSuccess');
const loginError = createAction('loginError');

const logoutRequest = createAction('logoutRequest');
const logoutSuccess = createAction('logoutSuccess');
const logoutError = createAction('logoutError');

const getCurrentUserRequest = createAction('getCurrentUserRequest');
const getCurrentUserSuccess = createAction('getCurrentUserSuccess');
const getCurrentUserError = createAction('getCurrentUserError');

export default {
  registerRequest,
  registerSuccess,
  registerError,

  loginRequest,
  loginSuccess,
  loginError,

  logoutRequest,
  logoutSuccess,
  logoutError,

  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
