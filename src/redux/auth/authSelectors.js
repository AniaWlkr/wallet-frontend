const isAuthed = state => state.auth.isAuth;
const authUser = state => state.authUserReducer;
const getIsAuthenticated = state => Boolean(state.auth.token);
const getUserName = state => state.auth.user.name;

export default {
  isAuthed,
  authUser,
  getIsAuthenticated,
  getUserName,
};
