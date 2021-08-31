import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
} from './financeActions';

import actions from '../auth/authActions';

const INITIAL_BALANCE = 0;

const totalBalance = createReducer(INITIAL_BALANCE, {
  [fetchBalanceSuccess]: (_, { payload }) => payload,
  [actions.logoutSuccess]: () => INITIAL_BALANCE,
});

const loading = createReducer(false, {
  [fetchBalanceRequest]: () => true,
  [fetchBalanceSuccess]: () => false,
  [fetchBalanceError]: () => false,
});

export default combineReducers({ totalBalance, loading });
