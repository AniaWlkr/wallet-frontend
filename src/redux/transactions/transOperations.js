import { getTransactions } from '../../utils/requests';
import {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsError,
  // addTransactionRequest,
  // addTransactionSuccess,
  // addTransactionError,
  // deleteTransactionRequest,
  // deleteTransactionSuccess,
  // deleteTransactionError,
} from './transActions';

export const getTransactionsOperation = () => (dispatch, getStore) => {
  const {
    auth: {
      user: { token },
    },
  } = getStore();

  dispatch(fetchTransactionsRequest());
  return getTransactions(token)
    .then(res => {
      if (res.data.status === 'success') {
        const transactions = {
          transactions: res.data,
        };
        dispatch(fetchTransactionsSuccess(transactions));
      } else {
        throw new Error(res);
      }
    })
    .catch(err => {
      let errData = err;
      if (err instanceof Error) {
        errData = err.res;
      }
      dispatch(fetchTransactionsError(errData));
    });
};
