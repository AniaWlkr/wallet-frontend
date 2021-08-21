import actions from './authActions';
import axios from 'axios';

let storageToken = '';

const registerUser = user => dispatch => {
  // axios
  //   .post('adress', user)
  //   .then(answer =>
  //     dispatch(
  //       actions.registerSuccess(answer.data),
  //       (storageToken = answer.data.token),
  //       localStorage.setItem('token', storageToken),
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
  //       (storageToken = answer.data.token),
  //       localStorage.setItem('token', storageToken),
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
  if (!storageToken) {
    return;
  }
  dispatch(actions.logoutRequest());
  axios({
    method: 'post',
    url: 'adress',
    headers: {
      Authorization: storageToken,
    },
  })
    .then(
      () => dispatch(actions.logoutSuccess()),
      localStorage.removeItem('token'),
      (storageToken = ''),
    )
    .catch(error => dispatch(actions.logoutError(error)));
};

export default {
  registerUser,
  loginUser,
  logoutUser,
};
