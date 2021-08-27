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
        console.log('answer.data', answer.data);
        token.set(answer.data.accessToken);
        dispatch(actions.loginSuccess(answer.data.data));
        localStorage.setItem('refreshToken', answer.data.data.refreshToken);

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
  // if (!token) {
  //   return;
  // }
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken)
      return dispatch(actions.getCurrentUserError('No valid token'));

    axios
      .post('api/users/updateTokens', refreshToken)
      .then(response => {
        if (response.data.code === 200) {
          token.set(response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.data.refreshToken);
        }
      })
      .catch(error => {
        localStorage.setItem('refreshToken', '');
        return dispatch(actions.getCurrentUserError(error));
      });
  }

  token.set(persistedToken);

  axios({
    method: 'get',
    url: '/api/users/current',
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  })
    .then(answer => {
      const email = answer.data.data.email;
      const name = answer.data.data.name;
      const user = {
        email,
        name,
      };
      dispatch(actions.getCurrentUserSuccess(user));
      alert({
        text: `Hi!`,
      });
    })
    .catch(error => {
      token.unset();
      dispatch(actions.getCurrentUserError(error));
      if (error.response.data.message) {
        alert({
          text: `${error.response.data.message}`,
        });
      }
      console.dir(error);
    });
};

export default {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};
