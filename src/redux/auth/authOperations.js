import actions from './authActions';
import axios from 'axios';
// import selectors from './authSelectors';
import { alert, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
defaults.delay = '3000';
defaults.width = '200px';

// axios.defaults.baseURL = 'https://db-wallet.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:4444';
// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const registerUser = user => dispatch => {
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
      if (error.response.data.code === 400) {
        dispatch(actions.registerError(error.response.data.message));
      }
      if (error.response.data.code === 409) {
        dispatch(actions.registerError(error.response.data.message));
        alert({
          text: `${error.response.data.message}`,
        });
      }
      if (error.response.data.code === 429) {
        dispatch(actions.registerError(error.response.data.message));
        alert({
          text: `${error.response.data.message}`,
        });
      }
      if (error.response.data.code === 500) {
        dispatch(actions.registerError(error.response.data.message));
        alert({
          text: `${error.response.data.message}`,
        });
      }
    });
};

const loginUser = user => dispatch => {
  axios
    .post('/api/users/login', user)
    .then(answer => {
      if (answer.data.code === 200) {
        dispatch(actions.loginSuccess(answer.data.data));
        localStorage.setItem('wallet-token', answer.data.data.accessToken);
        alert({
          text: `${answer.data.data.message}`,
        });
      }
    })
    .catch(error => {
      // console.dir(error);
      if (error.response.data.code === 400) {
        dispatch(actions.loginError(error.response.data.message));
        alert({
          text: `${error.response.data.message}`,
        });
      }
      if (error.response.data.code === 401) {
        dispatch(actions.loginError(error.response.data.message));
        alert({
          text: `${error.response.data.message}`,
        });
      }
      if (error.response.data.code === 429) {
        dispatch(actions.loginError(error.response.data.message));
        alert({
          text: `${error.response.data.message}`,
        });
      }
      if (error.response.data.code === 500) {
        dispatch(actions.loginError(error.response.data.message));
        alert({
          text: `${error.response.data.message}`,
        });
      }
    });
};

const logoutUser = () => dispatch => {
  const token = localStorage.getItem('wallet-token');
  if (!token) {
    return console.log('no token');
  }
  axios({
    method: 'post',
    url: '/api/users/logout',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(() => {
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
  const token = localStorage.getItem('wallet-token');
  if (!token) {
    return console.log('no token');
  }
  axios({
    method: 'get',
    url: '/api/users/current',
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
      console.dir(error);
      dispatch(actions.getCurrentUserError(error));
      alert({
        text: `${error.response.data.message}`,
      });
    });

  // const {
  //   auth: { token: persistedToken },
  // } = getState();

  // if (!persistedToken) {
  //   return;
  // }
  // token.set(persistedToken);
  // dispatch(actions.getCurrentUserRequest());

  // return axios
  //   .get('/api/users/current')
  //   .then(({ data }) => dispatch(actions.getCurrentUserSuccess(data)))
  //   .catch(error => {
  //     token.unset();
  //     dispatch(actions.getCurrentUserError(error.message));
  //   });
};

export default {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};
