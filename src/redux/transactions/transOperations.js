import {
  getTransactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
} from '../../utils/requests';
import {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  editTransactionRequest,
  editTransactionSuccess,
  editTransactionError,
  // deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
  openTransactionModal,
  closeTransactionModal,
  openExitModal,
  closeExitModal,
} from './transActions';
const errorCodesArray = [400, 401, 409, 429, 500];

export const getTransactionsOperation = () => (dispatch, getStore) => {
  const {
    auth: { token },
  } = getStore();

  dispatch(fetchTransactionsRequest());
  return getTransactions(token)
    .then(response => {
      const transactions = [...response.data.result.docs];
      dispatch(fetchTransactionsSuccess(transactions));
    })
    .catch(() => dispatch(fetchTransactionsError()));
};

export const addTransactionOperation =
  newTransaction => (dispatch, getStore) => {
    const {
      auth: { token },
    } = getStore();

    dispatch(addTransactionRequest());
    return addTransaction(newTransaction, token)
      .then(response => {
        const transaction = response.data.data;
        dispatch(addTransactionSuccess(transaction));
        return transaction;
      })
      .catch(() => dispatch(addTransactionError()));
  };

export const deleteTransactionOperation = id => (dispatch, getStore) => {
  const {
    auth: { token },
  } = getStore();

  if (!id) return;

  deleteTransaction(id, token)
    .then(() => dispatch(deleteTransactionSuccess(id)))
    .catch(() => dispatch(deleteTransactionError()));
};

export const editTransactionOperation =
  (id, updatedTransaction) => (dispatch, getStore) => {
    const {
      auth: { token },
    } = getStore();

    if (!id) return;

    dispatch(editTransactionRequest());

    return editTransaction(id, token, updatedTransaction)
      .then(response => {
        return dispatch(editTransactionSuccess(response.data.data.result));
      })
      .catch(error => {
        console.dir('error', error);
        if (errorCodesArray.includes(error.response.data.code)) {
          return dispatch(editTransactionError(error.response.data.message));
        }
        return dispatch(editTransactionError(error));
      });
  };

export const setTransactionModalOpen = () => dispatch => {
  dispatch(openTransactionModal());
};
export const setTransactionModalClose = () => dispatch => {
  dispatch(closeTransactionModal());
};

export const setExitModalOpen = () => dispatch => {
  dispatch(openExitModal());
};
export const setExitModalClose = () => dispatch => {
  dispatch(closeExitModal());
};
