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
  openTransactionModal,
  closeTransactionModal,
  openExitModal,
  closeExitModal,
} from './transActions';

const items = createReducer([], {
  [fetchTransactionsSuccess]: (_, { payload }) => payload,
  [addTransactionSuccess]: (state, { payload }) => [...state.items, payload],
  [deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(transaction => transaction.id !== payload),
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
