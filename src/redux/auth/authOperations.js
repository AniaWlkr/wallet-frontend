import actions from './authActions';
import axios from 'axios';
// import selectors from './authSelectors';
import { alert, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
defaults.delay = '3000';
defaults.width = '200px';
const errorCodesArray = [400, 401, 409, 429, 500];

axios.defaults.baseURL = 'https://db-wallet.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:4444';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = user => dispatch => {
  console.log('user', user);

  axios
    .post('/api/users/signup', user)
    .then(answer => {
      console.dir(answer);
      if (answer.data.code === 201) {
        dispatch(actions.registerSuccess(answer.data.data.user));
        alert({
          text: `${answer.data.data.message}`,
        });
      }
    })
    .catch(error => {
      // console.dir(error);
      // if (error.response.data.code === 400) {
      //   dispatch(actions.registerError(error.response.data.message));
      // }
      if (errorCodesArray.includes(error.response.data.code)) {
        dispatch(actions.registerError(error.response.data.message));
        alert({
          text: `${error.response.data.message}`,
        });
      }
      // if (error.response.data.code === 429) {
      //   dispatch(actions.registerError(error.response.data.message));
      //   alert({
      //     text: `${error.response.data.message}`,
      //   });
      // }
      // if (error.response.data.code === 500) {
      //   dispatch(actions.registerError(error.response.data.message));
      //   alert({
      //     text: `${error.response.data.message}`,
      //   });
      // }

      dispatch(actions.loginError(error));
    });
};

const loginUser = user => dispatch => {
  axios
    .post('/api/users/login', user)
    .then(answer => {
      if (answer.data.code === 200) {
        token.set(answer.data.accessToken);
        localStorage.setItem('refreshToken', answer.data.data.refreshToken);
        dispatch(actions.loginSuccess(answer.data.data));

        alert({
          text: `${answer.data.data.message}`,
        });
      }
    })
    .catch(error => {
      console.dir(error);
      if (!error.response) {
        dispatch(actions.loginError(error.message));
        alert({
          text: `${error.message}`,
        });
        return;
      }
      // if (error.response.data.code === 400) {
      //   dispatch(actions.loginError(error.response.data.message));
      //   alert({
      //     text: `${error.response.data.message}`,
      //   });
      // }
      if (errorCodesArray.includes(error.response.data.code)) {
        dispatch(actions.loginError(error.response.data.message));
        alert({
          text: `${error.response.data.message}`,
        });
      }
      // if (error.response.data.code === 429) {
      //   dispatch(actions.loginError(error.response.data.message));
      //   alert({
      //     text: `${error.response.data.message}`,
      //   });
      // }
      // if (error.response.data.code === 500) {
      //   dispatch(actions.loginError(error.response.data.message));
      //   alert({
      //     text: `${error.response.data.message}`,
      //   });
      // }
      dispatch(actions.loginError(error));
    });
};

const logoutUser = () => dispatch => {
  // const token = localStorage.getItem('wallet-token');
  // if (!token) {
  //   return console.log('no token');
  // }
  // axios({
  //   method: 'post',
  //   url: '/api/users/logout',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // })
  return axios
    .post('/api/users/logout')
    .then(() => {
      token.unset();
      console.log('clear refreshToken');
      localStorage.setItem('refreshToken', '');
      dispatch(actions.logoutSuccess());
      alert({
        text: `Logout success!`,
      });
    })
    .catch(error => {
      if (error) {
        dispatch(actions.logoutError(error));
      }
      alert({
        text: `${error.response.data.message}`,
      });
    });
};

const getCurrentUser = () => (dispatch, getState) => {
  // retrieve token & refresh token
  const {
    auth: { token: persistedToken },
  } = getState();
  const refreshToken = localStorage.getItem('refreshToken');

  // check if both tokens are null
  if (!persistedToken) {
    console.log('no token');
    return dispatch(actions.getCurrentUserError('There is no valid token'));
  }

  // request with token
  token.set(persistedToken);

  axios
    .get('/api/users/current')
    .then(response => {
      const { email, name } = response.data.data;
      return dispatch(actions.getCurrentUserSuccess({ email, name }));
    })
    .catch(error => {
      // if token is not valid
      console.log('token is invalid');
      if (error.response.data.code === 401) {
        // request for token update with refreshToken
        if (!refreshToken) {
          console.log('no refreshToken');
          token.unset();
          dispatch(actions.getCurrentUserError(error));
          return null;
        }
        console.log('request for token update with refreshToken');
        console.log('persisted token', persistedToken);
        console.log('refreshToken', refreshToken);
        token.set(persistedToken);

        axios
          .post('api/users/updateTokens', refreshToken)
          .then(response => {
            console.log('refreshToken -> response', response);
            const { accessToken, refreshToken } = response.data.data;
            console.log(
              'New accessToken, refreshToken ',
              accessToken,
              refreshToken,
            );
            token.set(response.data.data);
            localStorage.setItem('refreshToken', refreshToken);
            dispatch(actions.registerSuccess(response.data.data));
          })
          .catch(error => {
            console.log('update Token failed');
            token.unset();
            console.log('clear refreshToken');
            localStorage.setItem('refreshToken', '');
            return dispatch(actions.getCurrentUserError(error));
          });
        // request with new token
        console.log('request with new token');
        axios
          .get('/api/users/current')
          .then(response => {
            console.log('request with new token -> response', response);
            const { email, name } = response.data.data;
            return dispatch(actions.getCurrentUserSuccess({ email, name }));
          })
          .catch(error => dispatch(actions.getCurrentUserError(error)));
      }
      // if all requests fail

      token.unset();
      console.log('clear refreshToken');
      localStorage.setItem('refreshToken', '');
      if (errorCodesArray.includes(error.response.data.code)) {
        alert({
          text: `${error.response.data.message}`,
        });
        return dispatch(
          actions.getCurrentUserError(error.response.data.message),
        );
      }
      return dispatch(actions.getCurrentUserError(error));
    });
};

export default {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};
