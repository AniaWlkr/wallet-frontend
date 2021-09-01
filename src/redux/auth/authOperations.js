import actions from './authActions';
import { fetchBalanceSuccess } from '../finance/financeActions';
import axios from 'axios';
// import selectors from './authSelectors';
import { alert, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
defaults.delay = '3000';
defaults.width = '200px';
// const errorCodesArray = [400, 401, 409, 429, 500];

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

// const registerUser = user => dispatch => {
//   console.log('user', user);

//   axios
//     .post('/api/users/signup', user)
//     .then(answer => {
//       // console.dir(answer);
//       if (answer.data.code === 201) {
//         dispatch(actions.registerSuccess(answer.data.data.user));
//         alert({
//           text: `${answer.data.data.message}`,
//         });
//       }
//     })
//     .catch(error => {
//       // console.dir(error);
//       // if (error.response.data.code === 400) {
//       //   dispatch(actions.registerError(error.response.data.message));
//       // }
//       if (errorCodesArray.includes(error.response.data.code)) {
//         alert({
//           text: `${error.response.data.message}`,
//         });
//         return dispatch(actions.registerError(error.response.data.message));
//       }
//       // if (error.response.data.code === 429) {
//       //   dispatch(actions.registerError(error.response.data.message));
//       //   alert({
//       //     text: `${error.response.data.message}`,
//       //   });
//       // }
//       // if (error.response.data.code === 500) {
//       //   dispatch(actions.registerError(error.response.data.message));
//       //   alert({
//       //     text: `${error.response.data.message}`,
//       //   });
//       // }

//       dispatch(actions.loginError(error));
//     });
// };

/*
const loginUser = user => dispatch => {
  axios
    .post('/api/users/login', user)
    .then(answer => {
      console.log(answer.data);
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
      // console.dir(error);
      if (!error.response) {
        alert({
          text: `${error.message}`,
        });
        return dispatch(actions.loginError(error.message));
      }
      // if (error.response.data.code === 400) {
      //   dispatch(actions.loginError(error.response.data.message));
      //   alert({
      //     text: `${error.response.data.message}`,
      //   });
      // }
      if (errorCodesArray.includes(error.response.data.code)) {
        alert({
          text: `${error.response.data.message}`,
        });
        return dispatch(actions.loginError(error.response.data.message));
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
*/

// const logoutUser = () => (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();
//   token.set(persistedToken);
//   // const token = localStorage.getItem('wallet-token');
//   // if (!token) {
//   //   return console.log('no token');
//   // }
//   // axios({
//   //   method: 'post',
//   //   url: '/api/users/logout',
//   //   headers: {
//   //     Authorization: `Bearer ${token}`,
//   //   },
//   // })
//   return axios
//     .post('/api/users/logout')
//     .then(() => {
//       // console.log('clear refreshToken');

//       dispatch(actions.logoutSuccess());
//       alert({
//         text: `Logout success!`,
//       });
//     })
//     .catch(error => {
//       console.log(error);
//       if (error) {
//         dispatch(actions.logoutError(error));
//       }
//       alert({
//         text: `${error.response.data.message}`,
//       });
//     })
//     .finally(() => {
//       token.unset();
//       localStorage.setItem('refreshToken', '');
//     });
// };

// const getCurrentUser = () => (dispatch, getState) => {
//   // retrieve token & refresh token
//   const {
//     auth: { token: persistedToken },
//   } = getState();
//   const refreshToken = localStorage.getItem('refreshToken');

//   // check if both tokens are null
//   if (!persistedToken) {
//     // console.log('no token');
//     return dispatch(actions.getCurrentUserError('There is no valid token'));
//   }

//   // request with token
//   token.set(persistedToken);

//   axios
//     .get('/api/users/current')
//     .then(response => {
//       const { email, name } = response.data.data;
//       return dispatch(actions.getCurrentUserSuccess({ email, name }));
//     })
//     .catch(error => {
//       // if token is not valid
//       console.log('token is invalid');
//       if (error.response.data.code === 401) {
//         // request for token update with refreshToken
//         if (!refreshToken) {
//           console.log('no refreshToken');
//           token.unset();
//           dispatch(actions.getCurrentUserError(error));
//           return null;
//         }
//         console.log('request for token update with refreshToken');
//         console.log('persisted token', persistedToken);
//         console.log('refreshToken', refreshToken);
//         token.set(persistedToken);

//         axios
//           .post('api/users/updateTokens', refreshToken)
//           .then(response => {
//             console.log('refreshToken -> response', response);
//             const { accessToken, refreshToken } = response.data.data;
//             console.log(
//               'New accessToken, refreshToken ',
//               accessToken,
//               refreshToken,
//             );
//             token.set(response.data.data);
//             localStorage.setItem('refreshToken', refreshToken);
//             dispatch(actions.registerSuccess(response.data.data));
//           })
//           .catch(error => {
//             console.log('update Token failed');
//             token.unset();
//             console.log('clear refreshToken');
//             localStorage.setItem('refreshToken', '');
//             return dispatch(actions.getCurrentUserError(error));
//           });
//         // request with new token
//         console.log('request with new token');
//         axios
//           .get('/api/users/current')
//           .then(response => {
//             console.log('request with new token -> response', response);
//             const { email, name } = response.data.data;
//             return dispatch(actions.getCurrentUserSuccess({ email, name }));
//           })
//           .catch(error => dispatch(actions.getCurrentUserError(error)));
//       }
//       // if all requests fail

//       token.unset();
//       console.log('clear refreshToken');
//       localStorage.setItem('refreshToken', '');
//       if (errorCodesArray.includes(error.response.data.code)) {
//         alert({
//           text: `${error.response.data.message}`,
//         });
//         return dispatch(
//           actions.getCurrentUserError(error.response.data.message),
//         );
//       }
//       return dispatch(actions.getCurrentUserError(error));
//     });
// };

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
