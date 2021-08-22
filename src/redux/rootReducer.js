import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import transactionsReducer from './transactions/transReducer';
import categoriesReducer from './categories/categoriesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
