import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
} from './financeActions';

const INITIAL_BALANCE = 0;

const totalBalance = createReducer(INITIAL_BALANCE, {
  [fetchBalanceSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchBalanceRequest]: () => true,
  [fetchBalanceSuccess]: () => false,
  [fetchBalanceError]: () => false,
});

export default combineReducers({ totalBalance, loading });
