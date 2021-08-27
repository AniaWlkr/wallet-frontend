import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import transactionsReducer from './transactions/transReducer';
import categoriesReducer from './categories/categoriesReducer';
import financeReducer from './finance/financeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  transactions: transactionsReducer,
  finance: financeReducer,
});

export default rootReducer;
