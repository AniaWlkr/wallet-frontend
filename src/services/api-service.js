import axios from 'axios';
import rates from './rates.json';

const getCurrencyRates = () =>
  axios
    .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      let errData = err;
      if (err instanceof Error) {
        errData = err.res;
      }
      console.log(errData);
      return rates;
    });

export default { getCurrencyRates };
