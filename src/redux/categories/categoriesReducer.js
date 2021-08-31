import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,
  addCategoryRequest,
  addCategorySuccess,
  addCategoryError,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryError,
} from './categoriesActions';

const items = createReducer([], {
  [fetchCategoriesSuccess]: (_, { payload }) => payload,
  [addCategorySuccess]: (state, { payload }) => [...state.items, payload],
  [deleteCategorySuccess]: (state, { payload }) =>
    state.filter(category => category.id !== payload),
});

const loading = createReducer(false, {
  [fetchCategoriesRequest]: () => true,
  [fetchCategoriesSuccess]: () => false,
  [fetchCategoriesError]: () => false,

  [addCategoryRequest]: () => true,
  [addCategorySuccess]: () => false,
  [addCategoryError]: () => false,

  [deleteCategoryRequest]: () => true,
  [deleteCategorySuccess]: () => false,
  [deleteCategoryError]: () => false,
});

export default combineReducers({ items, loading });
