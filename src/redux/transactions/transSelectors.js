import { createSelector } from '@reduxjs/toolkit';
import memoize from 'lodash.memoize';
import { generateLightColorHex } from '../../utils/helpers';
const SPEND = 'spend';

const getLoading = state => state.transactions.loading;
const getAllTransactions = memoize(state => state.transactions.items);

const isTransactionModalOpen = state =>
  state.transactions.isTransactionModalOpen;
const isExitModalOpen = state => state.transactions.isExitModalOpen;

const getTransactionById = transactionId =>
  createSelector(getAllTransactions, items => {
    const transactionArr = items.filter(item => item._id === transactionId);
    return transactionArr[0];
  });

const getTransactionsPerMonth = (month, year) =>
  createSelector(
    getAllTransactions,
    items =>
      items.filter(item => item.month === month && item.year === year) || [],
  );

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

        const color = generateLightColorHex();
        if (index === -1)
          arr.push({
            id: item.categoryId._id,
            category: item.categoryId.categoryName,
            sum: item.sum,
            color,
          });
        if (index !== -1) arr[index].sum += item.sum;
        return arr;
      }, []);
    return result ?? [];
  });

export default {
  getLoading,
  getAllTransactions,
  isTransactionModalOpen,
  isExitModalOpen,
  getSpendPerCategory,
  getTransactionsPerMonth,
  getTransactionById,
};
