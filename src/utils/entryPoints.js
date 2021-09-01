const baseUrl = 'https://db-wallet.herokuapp.com/api';

const url = {
  register: () => `${baseUrl}/users/signup`,
  login: () => `${baseUrl}/users/login`,
  logout: () => `${baseUrl}/users/logout`,
  verifyEmail: verificationToken =>
    `${baseUrl}/users/verify/${verificationToken}`,
  user: () => `${baseUrl}/users/user`,

  categories: () => `${baseUrl}/categories`,

  transactions: () => `${baseUrl}/transactions`,
  transaction: transactionId => `${baseUrl}/transactions/${transactionId}`,
};

export default url;
