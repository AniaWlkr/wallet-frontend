import actions from './authActions';
import axios from 'axios';

axios.defaults.baseURL = 'https://db-wallet.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = user => dispatch => {
  // axios
  //   .post('adress', user)
  //   .then(answer =>
  //     dispatch(
  //       actions.registerSuccess(answer.data),
  //       (token = answer.data.token),
  //       localStorage.setItem('token', token),
  //     ),
  //   )
  //   .catch(error =>
  //     dispatch(
  //       actions.registerError(error),
  //       window.alert('You entered something wrong'),
  //     ),
  //   );
  dispatch(actions.registerSuccess(user));
  console.log(user);
};

const loginUser = user => dispatch => {
  // axios
  //   .post('adress', user)
  //   .then(answer =>
  //     dispatch(
  //       actions.loginSuccess(answer.data),
  //       (token = answer.data.token),
  //       localStorage.setItem('token', token),
  //     ),
  //   )
  //   .catch(error =>
  //     dispatch(
  //       actions.loginError(error),
  //       window.alert('You entered something wrong'),
  //     ),
  // );
  dispatch(actions.loginSuccess(user));
  console.log(user);
};

const logoutUser = () => dispatch => {
  if (!token) {
    return;
  }
  dispatch(actions.logoutRequest());
  axios({
    method: 'post',
    url: 'adress',
    headers: {
      Authorization: token,
    },
  })
    .then(
      () => dispatch(actions.logoutSuccess()),
      localStorage.removeItem('token'),
      token.unset(),
    )
    .catch(error => dispatch(actions.logoutError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(actions.getCurrentUserRequest());

  return axios
    .get('/users/current')
    .then(({ data }) => dispatch(actions.getCurrentUserSuccess(data)))
    .catch(error => {
      token.unset();
      dispatch(actions.getCurrentUserError(error.message));
    });
};

export default {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};
