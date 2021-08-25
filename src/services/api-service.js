import axios from 'axios';
axios.defaults.baseURL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const getCurrencyRates = () => axios.get().then(response => response.data);

export default { getCurrencyRates };