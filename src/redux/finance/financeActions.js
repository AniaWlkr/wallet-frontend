import { createAction } from '@reduxjs/toolkit';

export const fetchBalanceRequest = createAction('finance/fetchBalanceRequest');
export const fetchBalanceSuccess = createAction('finance/fetchBalanceSuccess');
export const fetchBalanceError = createAction('finance/fetchBalanceError');
