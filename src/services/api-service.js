import axios from 'axios';
import rates from './rates.json';

const getCurrencyRates = () =>
  axios
    .get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(response => {
      console.log('response', response);
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
