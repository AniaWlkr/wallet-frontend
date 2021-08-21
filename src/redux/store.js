import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV === 'development',
});

// console.dir(store);

export default store;
