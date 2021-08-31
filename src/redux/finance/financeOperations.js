import axios from 'axios';

import {
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
} from './financeActions';

export const getCurrentBalance = () => async (dispatch, getStore) => {
  dispatch(fetchBalanceRequest());
  const {
    auth: { token },
  } = getStore();
  try {
    const { data } = await axios({
      method: 'get',
      url: '/api/users/current',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(fetchBalanceSuccess(data.data.balance));
  } catch (error) {
    dispatch(fetchBalanceError(error.message));
  }
};
