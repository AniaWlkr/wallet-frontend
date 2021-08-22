import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.transactions.loading;
const getAllTransactions = state => state.transactions.items;

const getSpend = createSelector(getAllTransactions, items => {
  return items.filter(({ transType }) =>
    transType.toLowerCase().includes('spend'),
  );
});

const getIncome = createSelector(getAllTransactions, items => {
  return items.filter(({ transType }) =>
    transType.toLowerCase().includes('income'),
  );
});

const getBalance = createSelector(
  [getIncome, getSpend],
  (income, spend) => income - spend,
);

export default {
  getLoading,
  getAllTransactions,
  getSpend,
  getIncome,
  getBalance,
};
