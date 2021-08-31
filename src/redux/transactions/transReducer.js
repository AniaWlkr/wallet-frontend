import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
  editTransactionRequest,
  editTransactionSuccess,
  editTransactionError,
  openTransactionModal,
  closeTransactionModal,
  openExitModal,
  closeExitModal,
} from './transActions';

import actions from '../auth/authActions';

const items = createReducer([], {
  [fetchTransactionsSuccess]: (_, { payload }) => payload,
  [addTransactionSuccess]: (state, { payload }) => [...state, payload],
  [deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(transaction => transaction._id !== payload),
  [editTransactionSuccess]: (state, { payload }) =>
    state.map(transaction => {
      console.log(
        'transaction._id === payload._id',
        transaction._id,
        payload._id,
      );
      return transaction._id === payload._id ? payload : transaction;
    }),
  [actions.logoutSuccess]: () => [],
});

const loading = createReducer(false, {
  [fetchTransactionsRequest]: () => true,
  [fetchTransactionsSuccess]: () => false,
  [fetchTransactionsError]: () => false,

  [addTransactionRequest]: () => true,
  [addTransactionSuccess]: () => false,
  [addTransactionError]: () => false,

  [deleteTransactionRequest]: () => true,
  [deleteTransactionSuccess]: () => false,
  [deleteTransactionError]: () => false,

  [editTransactionRequest]: () => true,
  [editTransactionSuccess]: () => false,
  [editTransactionError]: () => false,
});

const isTransactionModalOpen = createReducer(false, {
  [openTransactionModal]: () => true,
  [closeTransactionModal]: () => false,
});

const isExitModalOpen = createReducer(false, {
  [openExitModal]: () => true,
  [closeExitModal]: () => false,
});

export default combineReducers({
  items,
  loading,
  isTransactionModalOpen,
  isExitModalOpen,
});
