import { getCategories } from '../../utils/requests';
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,
  // addCategoryRequest,
  // addCategorySuccess,
  // addCategoryError,
  // deleteCategoryRequest,
  // deleteCategorySuccess,
  // deleteCategoryError,
} from './categoriesActions';

export const getCategoriesOperation = () => dispatch => {
  dispatch(fetchCategoriesRequest());
  return getCategories()
    .then(res => {
      if (res.data.status === 'success') {
        const categories = {
          categories: res.data,
        };
        dispatch(fetchCategoriesSuccess(categories));
      } else {
        throw new Error(res);
      }
    })
    .catch(err => {
      let errData = err;
      if (err instanceof Error) {
        errData = err.res;
      }
      dispatch(fetchCategoriesError(errData));
    });
};
