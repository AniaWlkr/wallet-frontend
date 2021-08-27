import { useState, useEffect } from 'react';
import moment from 'moment';
import apiService from '../../services/api-service';
import Loader from '../Loader';
import styles from './Currency.module.scss';
import cx from 'classnames';

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
        setCurrencyRates(data);
        setIsLoading(false);
        setCurrentDate(moment().format('MMM Do YY'));
        setLocalStorage(currencyRates, currentDate);
      })
      .catch(err => {
        const currencyFromLocalStorage = JSON.parse(
          localStorage.getItem('currency'),
        );
        if (
          !currencyFromLocalStorage ||
          currentDate !== currencyFromLocalStorage.date
        )
          return setTimeout(getRates, HOUR);

        setCurrencyRates(currencyFromLocalStorage.data);
        console.log(err);
      });
  };

  const setLocalStorage = (currencyRates, currentDate) => {
    const localStorageData = { rates: currencyRates, date: currentDate };
    localStorage.setItem('currency', JSON.stringify(localStorageData));
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
          {currencyRates?.map(
            item =>
              item.base_ccy === 'UAH' && (
                <tr key={item.ccy} className={styles.traw}>
                  <td className={cx(styles.left, styles.td)}>{item.ccy}</td>
                  <td className={cx(styles.center, styles.td)}>
                    {round(item.buy)}
                  </td>
                  <td className={cx(styles.right, styles.td)}>
                    {round(item.sale)}
                  </td>
                </tr>
              ),
          )}
        </tbody>
      </table>
    </>
  );
};

export default Currency;
