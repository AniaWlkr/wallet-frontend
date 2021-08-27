const getCurrentUserBalance = state => state.finance.totalBalance;
const getLoading = state => state.finance.loading;
export default { getCurrentUserBalance, getLoading };
