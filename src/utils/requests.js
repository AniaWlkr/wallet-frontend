import axios from 'axios';
import api from './entryPoints';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export const setToken = token => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const unsetToken = () => ({
  headers: { Authorization: '' },
});

// users
export const usersRegister = data => axios.post(api.register(), data);
export const usersLogin = data => axios.post(api.login(), data);
export const usersLogout = () => axios.post(api.logout(), null, unsetToken());
export const usersGetCurrent = token => {
  const options = {
    method: 'get',
    url: api.user(),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios(options);
};

// categories
export const getCategories = token =>
  axios.get(api.categories(), setToken(token));

// transactions
export const getTransactions = token =>
  axios.get(api.transactions(), setToken(token));
