// import { createSelector } from '@reduxjs/toolkit';

// const getLoading = state => state.transactions.loading;
// const getAllTransactions = state => state.transactions.items;
// const isModalOpen = state => state.transactions.isModalOpen;

// const getSpend = createSelector(getAllTransactions, items => {
//   const value = items.reduce((sum, current) => {
//     if (current.transType !== 'spend') return sum;
//     return sum + current.sum;
//   }, 0);
//   return value;
// });

// const getIncome = createSelector(getAllTransactions, items => {
//   const value = items.reduce((sum, current) => {
//     if (current.transType !== 'income') return sum;
//     return sum + current.sum;
//   }, 0);
//   return value;
// });

// const getBalance = createSelector(
//   getSpend,
//   getIncome,
//   (spend, income) => income - spend,
// );

// const getSpendPerCategory = createSelector(getAllTransactions, items => {
//   const result = items.reduce((arr, item) => {
//     const index = arr.findIndex(arrItem => item.categoryId._id === arrItem.id);
//     if (index === -1)
//       arr.push({
//         id: item.categoryId._id,
//         category: item.categoryId.categoryName,
//         sum: item.sum,
//       });
//     if (index !== -1) arr[index].sum += item.sum;
//     return arr;
//   }, []);
//   return result;
// });

// export default {
//   getLoading,
//   getAllTransactions,
//   getSpend,
//   getIncome,
//   getBalance,
//   isModalOpen,
//   getSpendPerCategory,
// };

import { createSelector } from '@reduxjs/toolkit';
import memoize from 'lodash.memoize';
const SPEND = 'spend';
const INCOME = 'income';

const getLoading = state => state.transactions.loading;
const getAllTransactions = memoize(state => state.transactions.items);
const isModalOpen = state => state.transactions.isModalOpen;

const getTransactionsPerMonth = (month, year) =>
  createSelector(
    getAllTransactions,
    items =>
      items.filter(
        item =>
          item.month === month &&
          item.year === year &&
          item.transType === SPEND,
      ) || [],
  );

const getSpend = (month, year) =>
  createSelector(getAllTransactions, items => {
    const value = items.reduce((sum, current) => {
      if (
        current.month === month &&
        current.year === year &&
        current.transType !== SPEND
      )
        return sum;
      return sum + current.sum;
    }, 0);
    return value;
  });

const getIncome = (month, year) =>
  createSelector(getAllTransactions, items => {
    const value = items.reduce((sum, current) => {
      if (
        current.month === month &&
        current.year === year &&
        current.transType !== INCOME
      )
        return sum;
      return sum + current.sum;
    }, 0);
    return value;
  });

const getSpendPerCategory = (month, year) =>
  createSelector(getAllTransactions, items => {
    const result = items
      .filter(
        item =>
          item.month === month &&
          item.year === year &&
          item.transType === SPEND,
      )
      .reduce((arr, item) => {
        const index = arr.findIndex(
          arrItem => item.categoryId._id === arrItem.id,
        );
        if (index === -1)
          arr.push({
            id: item.categoryId._id,
            category: item.categoryId.categoryName,
            sum: item.sum,
          });
        if (index !== -1) arr[index].sum += item.sum;
        return arr;
      }, []);
    return result ?? [];
  });

export default {
  getLoading,
  getAllTransactions,
  getSpend,
  getIncome,
  isModalOpen,
  getSpendPerCategory,
  getTransactionsPerMonth,
};
