import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.transactions.loading;
const getAllTransactions = state => state.transactions.items;
// export const getAllTransactions = state => state.transactions.items.data.docs;
const AAA = state => state;
const isModalOpen = state => state.transactions.isModalOpen;

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
  AAA,
  getLoading,
  getAllTransactions,
  getSpend,
  getIncome,
  getBalance,
  isModalOpen,
};
