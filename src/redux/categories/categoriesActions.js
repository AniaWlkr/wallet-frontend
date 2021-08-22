import { createAction } from '@reduxjs/toolkit';
import types from './categoriesActionTypes';

export const fetchCategoriesRequest = createAction(
  types.CATEGORIES_ADD_REQUEST,
);
export const fetchCategoriesSuccess = createAction(
  types.CATEGORIES_FETCH_SUCCESS,
);
export const fetchCategoriesError = createAction(types.CATEGORIES_FETCH_ERROR);

export const addCategoryRequest = createAction(types.CATEGORIES_ADD_REQUEST);
export const addCategorySuccess = createAction(types.CATEGORIES_ADD_SUCCESS);
export const addCategoryError = createAction(types.CATEGORIES_ADD_ERROR);

export const deleteCategoryRequest = createAction(
  types.CATEGORIES_DELETE_REQUEST,
);
export const deleteCategorySuccess = createAction(
  types.CATEGORIES_DELETE_SUCCESS,
);
export const deleteCategoryError = createAction(types.CATEGORIES_DELETE_ERROR);
