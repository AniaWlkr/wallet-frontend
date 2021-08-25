import { useState, useEffect } from 'react';
import moment from 'moment';
import apiService from '../../services/api-service';
import Loader from '../Loader';
import styles from './Currency.module.scss';

const Currency = () => {
  const [currencyRates, setCurrencyRates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState();
  const HOUR = 3600000;

  useEffect(() => {
    getRates();
  }, []);

  const getRates = async () => {
    setIsLoading(true);

    apiService
      .getCurrencyRates()
      .then(data => {
        console.log('getRates -> data', data);
        setCurrencyRates(data);
        setIsLoading(false);
        setCurrentDate(moment().format('MMM Do YY'));
      })
      .catch(err => {
        if (currentDate === moment().format('MMM Do YY')) return;
        setTimeout(getRates, HOUR);
        console.log(err);
      });
  };

  const round = number => {
    return parseFloat(number).toFixed(2);
  };

  return (
    <>
      {isLoading && <Loader />}
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.left}>Валюта</th>
            <th className={styles.center}>Покупка</th>
            <th className={styles.right}>Продажа</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {currencyRates.map(
            item =>
              item.base_ccy === 'UAH' && (
                <tr key={item.ccy} className={styles.traw}>
                  <td className={styles.left}>{item.ccy}</td>
                  <td className={styles.center}>{round(item.buy)}</td>
                  <td className={styles.right}>{round(item.sale)}</td>
                </tr>
              ),
          )}
        </tbody>
      </table>
    </>
  );
};

export default Currency;
