import { normalizedSum } from './normalizedSum';
import { normalizedDate } from './normalizedDate';

const normalizedTransactions = data => {
  if (data.length === 0) return [];
  return data.map(el => {
    const id = el._id;
    const transType = el.transType;
    const date = normalizedDate(el.date);
    const category = el.categoryId.categoryName;
    const commentary = el.comment;
    const sum = normalizedSum(el.sum);
    const balance = normalizedSum(el.balance);
    return {
      id,
      date,
      transType,
      category,
      commentary,
      sum,
      balance,
    };
  });
};
export { normalizedTransactions };
