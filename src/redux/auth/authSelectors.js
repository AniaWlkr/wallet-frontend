const isAuthed = state => state.auth.isAuth;
const authUser = state => state.authUser;
const getIsAuthenticated = state => Boolean(state.auth.token);
const getUserName = state => state.auth.authUser.name;
const userToken = state => state.auth.token;
const authError = state => state.auth.error;

export default {
  isAuthed,
  authUser,
  getIsAuthenticated,
  getUserName,
  userToken,
  authError,
};
