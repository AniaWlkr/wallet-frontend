import { createAction } from '@reduxjs/toolkit';
import types from './transActionTypes';

export const fetchTransactionsRequest = createAction(
  types.TRANSACTIONS_FETCH_REQUEST,
);
export const fetchTransactionsSuccess = createAction(
  types.TRANSACTIONS_FETCH_SUCCESS,
);
export const fetchTransactionsError = createAction(
  types.TRANSACTIONS_FETCH_ERROR,
);

export const addTransactionRequest = createAction(
  types.TRANSACTIONS_ADD_REQUEST,
);
export const addTransactionSuccess = createAction(
  types.TRANSACTIONS_ADD_SUCCESS,
);
export const addTransactionError = createAction(types.TRANSACTIONS_ADD_ERROR);

export const deleteTransactionRequest = createAction(
  types.TRANSACTIONS_DELETE_REQUEST,
);
export const deleteTransactionSuccess = createAction(
  types.TRANSACTIONS_DELETE_SUCCESS,
);
export const deleteTransactionError = createAction(
  types.TRANSACTIONS_DELETE_ERROR,
);

export const openModal = createAction('openModal');

export const closeModal = createAction('closeModal');
