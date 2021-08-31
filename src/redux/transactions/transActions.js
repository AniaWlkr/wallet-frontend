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

export const editTransactionRequest = createAction(
  types.TRANSACTIONS_EDIT_REQUEST,
);
export const editTransactionSuccess = createAction(
  types.TRANSACTIONS_EDIT_SUCCESS,
);
export const editTransactionError = createAction(types.TRANSACTIONS_EDIT_ERROR);

export const openTransactionModal = createAction('openTransactionModal');
export const closeTransactionModal = createAction('closeTransactionModal');

export const openExitModal = createAction('openExitModal');
export const closeExitModal = createAction('closeExitModal');
