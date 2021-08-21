// import authRedusers from './auth/authReducer';
import { authUserReducer, isAuthedReducer } from './auth/authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  authUserReducer,
  isAuthedReducer,
});

// console.dir(rootReducer);

export default rootReducer;
