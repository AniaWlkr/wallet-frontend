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
  openModal,
  closeModal,
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

const isModalOpen = createReducer(false, {
  [openModal]: () => true,
  [closeModal]: () => false,
});

export default combineReducers({ items, loading, isModalOpen });
