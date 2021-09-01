import actions from './authActions';
import { fetchBalanceSuccess } from '../finance/financeActions';
import axios from 'axios';
import { alert, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
defaults.delay = '3000';
defaults.width = '200px';

axios.defaults.baseURL = 'https://db-wallet.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// ---------------register
export const registerUser = userData => async dispatch => {
  dispatch(actions.registerRequest());

  try {
    const { data } = await axios.post('api/users/signup', userData);
    dispatch(actions.registerSuccess());
    alert({
      text: `${data.data.message}`,
    });
  } catch (error) {
    dispatch(actions.registerError(error.response.message));
  }
};

// ---------------login
export const loginUser = userData => async dispatch => {
  dispatch(actions.loginRequest());

  try {
    const { data } = await axios.post('api/users/login', userData);
    token.set(data.data.accessToken);
    dispatch(actions.loginSuccess(data.data));
    alert({
      text: `${data.data.message}`,
    });
  } catch (error) {
    dispatch(actions.loginError(error.response.message));
  }
};
// ---------------logout
export const logoutUser = () => async dispatch => {
  dispatch(actions.logoutRequest());

  try {
    await axios.post('api/users/logout');

    token.unset();
    dispatch(actions.logoutSuccess());
    alert({
      text: `Logout success!`,
    });
  } catch (error) {
    dispatch(actions.logoutError(error.response.message));
  }
};

// ---------------current user
export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(actions.getCurrentUserRequest());

  try {
    const { data } = await axios.get('api/users/current');

    dispatch(actions.getCurrentUserSuccess(data.data));
    dispatch(fetchBalanceSuccess(data.data.balance));
  } catch (error) {
    dispatch(actions.getCurrentUserError(error.response.message));
  }
};

export default {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};
