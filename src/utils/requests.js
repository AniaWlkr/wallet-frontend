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
export const getCategories = () => axios.get(api.categories());
export const addCategory = newCategory =>
  axios.post(api.categories(), newCategory);

// transactions
export const getTransactions = token =>
  axios.get(api.transactions(), setToken(token));
export const addTransaction = (newTransaction, token) =>
  axios.post(api.transactions(), newTransaction, setToken(token));
export const deleteTransaction = (id, token) =>
  axios.delete(api.transaction(id), setToken(token));
export const editTransaction = (id, token, updatedTransaction) =>
  axios.put(api.transaction(id), updatedTransaction, setToken(token));
