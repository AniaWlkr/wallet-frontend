// import { useSelector } from 'react-redux';
import { useState } from 'react';
// import selectors from '../../redux/transactions/transSelectors';
// import Modal from '../Modal';
// import { useRef } from 'react';
import styles from './ModalAddTransaction.module.scss';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';

export default function ModallAddTransaction() {
  const [checkbox, setCheckbox] = useState(false);

  const changeChekbox = () => {
    setCheckbox(!checkbox);
  };

  return (
    <div>
      <p>Добавить транзакцию</p>
      <div className={styles.switch}>
        <div className={styles.switchControl}>
          <input
            onClick={changeChekbox}
            name="checkbox"
            type="checkbox"
            className={styles.switchToggle}
            id="switchToggle"
            value={checkbox}
          ></input>
          <label className={styles.switchTrack} htmlFor="switchToggle"></label>
          <div className={styles.switchMarker}>
            {checkbox ? (
              <RemoveSharpIcon className={styles.icon} />
            ) : (
              <AddSharpIcon className={styles.icon} />
            )}
          </div>
        </div>
      </div>
      {checkbox ? (
        <form className={styles.form}>
          <p>Доход</p>
          <p>Расход</p>
          <label>
            <select name="select">
              <option disabled>Выберите категорию</option>
              <option value="Основное">Основное</option>
              <option value="Еда">Еда</option>
              <option value="Авто">Авто</option>
              <option value="Развитие">Развитие</option>
              <option value="Дети">Дети</option>
              <option value="Дом">Дом</option>
              <option value="Образование">Образование</option>
              <option value="Остальное">Остальное</option>
            </select>
          </label>
          <label>
            <input type="number" name="sum" placeholder="0.00"></input>
          </label>
          <label>
            <input type="date" name="date"></input>
          </label>
          <textarea name="comment" maxLength="300"></textarea>
        </form>
      ) : (
        <form className={styles.form}>
          <p>Доход</p>
          <p>Расход</p>
          <label>
            <input type="number" name="sum" placeholder="0.00"></input>
          </label>
          <label>
            <input type="date" name="date"></input>
          </label>
          <textarea name="comment" maxLength="300"></textarea>
        </form>
      )}
    </div>
  );
}
