const isAuthed = state => state.auth.isAuthedReducer;
const authUser = state => state.auth.authUserReducer;
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
