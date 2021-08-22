const isAuthed = state => state.auth.isAuth;
const authUser = state => state.authUser;
const getIsAuthenticated = state => Boolean(state.auth.token);
const getUserName = state => state.auth.user.name;
const userToken = state => state.auth.token;

export default {
  isAuthed,
  authUser,
  getIsAuthenticated,
  getUserName,
  userToken,
};
