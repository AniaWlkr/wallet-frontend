import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.transactions.loading;
const getAllTransactions = state => state.transactions.items;
// export const getAllTransactions = state => state.transactions.items.data.docs;
const AAA = state => state;
const isModalOpen = state => state.transactions.isModalOpen;

const getSpend = createSelector(getAllTransactions, items => {
  const value = items.reduce((sum, current) => {
    if (current.transType !== 'spend') return sum;
    return sum + current.sum;
  }, 0);
  return value;
});

const getIncome = createSelector(getAllTransactions, items => {
  const value = items.reduce((sum, current) => {
    if (current.transType !== 'income') return sum;
    return sum + current.sum;
  }, 0);
  return value;
});

const getBalance = createSelector(
  getSpend,
  getIncome,
  (spend, income) => income - spend,
);

const getSpendPerCategory = createSelector(getAllTransactions, items => {
  const result = items.reduce((arr, item) => {
    const index = arr.findIndex(arrItem => item.categoryId._id === arrItem.id);
    if (index === -1)
      arr.push({
        id: item.categoryId._id,
        category: item.categoryId.categoryName,
        sum: item.sum,
      });
    if (index !== -1) arr[index].sum += item.sum;
    return arr;
  }, []);
  return result;
});

export default {
  AAA,
  getLoading,
  getAllTransactions,
  getSpend,
  getIncome,
  getBalance,
  isModalOpen,
  getSpendPerCategory,
};
