import {
  getTransactions,
  addTransaction,
  deleteTransaction,
} from '../../utils/requests';
import {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  // deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
  openModal,
  closeModal,
} from './transActions';

export const getTransactionsOperation = () => (dispatch, getStore) => {
  const {
    auth: { token },
  } = getStore();

  dispatch(fetchTransactionsRequest());
  return getTransactions(token)
    .then(response => {
      if (response.data.status === 'success') {
        const transactions = [...response.data.result.docs];
        dispatch(fetchTransactionsSuccess(transactions));
      } else {
        throw new Error(response);
      }
    })
    .catch(err => {
      let errData = err;
      if (err instanceof Error) {
        errData = err.response;
      }
      dispatch(fetchTransactionsError(errData));
    });
};

export const addTransactionOperation =
  newTransaction => (dispatch, getStore) => {
    const {
      auth: { token },
    } = getStore();

    dispatch(addTransactionRequest());
    return addTransaction(newTransaction, token)
      .then(response => {
        if (response.status === 201) {
          const transaction = response.data.transaction;
          dispatch(addTransactionSuccess(transaction));
          return transaction;
        }
        throw response;
      })
      .catch(err => {
        console.dir(err);
        let errData = err;
        if (err instanceof Error) {
          errData = err.response;
        }
        dispatch(addTransactionError(errData));
      });
  };

export const deleteTransactionOperation = id => (dispatch, getState) => {
  const {
    session: {
      user: { token },
    },
  } = getState();

  if (!id) return;

  deleteTransaction(id, token)
    .then(() => dispatch(deleteTransactionSuccess()))
    .catch(() => dispatch(deleteTransactionError()));
};

export const setModalOpen = () => dispatch => {
  dispatch(openModal());
};

export const setModalClose = () => dispatch => {
  dispatch(closeModal());
};
