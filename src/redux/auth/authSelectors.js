const isAuthed = state => state.auth.isAuth;
const authUser = state => state.auth.authUser;
const getUserName = state => state.auth.authUser.name;
const userToken = state => state.auth.token;
const authError = state => state.auth.error;
const tokenExpireTime = state => state.auth.tokenExpireTime;
const isRegistered = state => state.auth.isRegistered;

export default {
  isAuthed,
  authUser,
  getUserName,
  userToken,
  authError,
  tokenExpireTime,
  isRegistered,
};
