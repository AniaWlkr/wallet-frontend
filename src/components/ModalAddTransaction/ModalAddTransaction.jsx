import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  setModalClose,
  addTransactionOperation,
} from '../../redux/transactions/transOperations';
import { getCategoriesOperation } from '../../redux/categories/categoriesOperations';
import selectors from '../../redux/categories/categoriesSelectors';
import styles from './ModalAddTransaction.module.scss';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import { validate } from 'indicative/validator';
import { alert, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
// import LockSharpIcon from '@material-ui/icons/LockSharp';

defaults.delay = '3000';
defaults.width = '280px';

export default function ModallAddTransaction() {
  useEffect(() => {
    dispatch(getCategoriesOperation());
  }, []);

  const [checkbox, setCheckbox] = useState(true);
  const [category, setCategory] = useState('Выберите категорию');
  // const [categoryId, setCategoryId] = useState(null);
  const [sum, setSum] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [textarea, setTextarea] = useState('');

  const dispatch = useDispatch();

  const allCategories = useSelector(selectors.getCategories);
  // console.log(allCategories);

  const changeChekbox = e => {
    setCheckbox(!checkbox);
  };

  const handleCategory = e => {
    setCategory(e.target.value);
    // console.dir(e);
  };

  const handleSum = e => {
    setSum(e.target.value);
  };

  const handleDate = e => {
    setSelectedDate(String(e._d));

    // const [day, mounth, dateNumber, year, time, zone] = date.split(' ');

    // const dateObj = {
    //   day,
    //   mounth,
    //   dateNumber,
    //   year,
    //   time,
    //   zone,
    // };
    // console.log(dateObj);
  };

  const handleTextarea = e => {
    setTextarea(e.target.value);
  };

  const closeModal = () => {
    dispatch(setModalClose());
  };

  const addTransaction = e => {
    e.preventDefault();

    const rules = {
      sum: 'required',
      selectedDate: 'required',
      category: 'required',
    };

    const messages = {
      required: 'Make sure to enter the field value)',
    };

    const transaction = {
      transType: `${!checkbox ? 'spend' : 'income'}`,
      sum,
      date: selectedDate,
      comment: textarea,
      balance: 9000,
      categoryId: category,
    };

    validate({ sum, selectedDate, category }, rules, messages)
      .then(() => {
        dispatch(addTransactionOperation(transaction));
        dispatch(setModalClose());
        alert({
          text: `Added!`,
        });
      })
      .catch(error => {
        console.dir(error);
        alert({
          text: `${error[0].message}`,
        });
      });

    console.log(transaction);
  };

  return (
    <div className={styles.mainDiv}>
      <p className={styles.text}>Добавить транзакцию</p>

      <form onSubmit={addTransaction} className={styles.form}>
        <p
          className={
            !checkbox
              ? `${styles.grey} ${styles.positionAdd}`
              : `${styles.grey}  ${styles.positionAdd} ${styles.addAccent}`
          }
        >
          Доход
        </p>
        <p
          className={
            !checkbox
              ? `${styles.grey}  ${styles.positionExpense} ${styles.expenseAccent}`
              : `${styles.positionExpense} ${styles.grey}`
          }
        >
          Расход
        </p>
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
            <label
              className={styles.switchTrack}
              htmlFor="switchToggle"
            ></label>
            <div className={styles.switchMarker}>
              {!checkbox ? (
                <RemoveSharpIcon className={styles.icon} />
              ) : (
                <AddSharpIcon className={styles.icon} />
              )}
            </div>
          </div>
        </div>

        {/* <div> */}
        {checkbox ? null : (
          <label className={styles.label}>
            <select
              className={styles.select}
              onChange={handleCategory}
              name="select"
              value={category}
            >
              {allCategories.map(category => {
                return (
                  <option
                    key={category._id}
                    value={category._id}
                    // value={category.categoryName}
                  >
                    {category.categoryName}
                  </option>
                );
              })}
            </select>
          </label>
        )}
        <label className={styles.label}>
          <input
            onChange={handleSum}
            value={sum}
            type="number"
            name="sum"
            placeholder="0.00"
            className={styles.input}
          ></input>
        </label>
        <label className={styles.label}>
          <Datetime
            selected={selectedDate}
            dateFormat="DD.MM.YYYY"
            timeFormat={false}
            locale="fr-ca"
            type="date"
            value={selectedDate}
            onChange={handleDate}
            className={styles.input}
            inputProps={{ className: styles.datetime }}
          />
          {/* <span className={styles.span}>
              <LockSharpIcon></LockSharpIcon>
            </span> */}
        </label>
        <textarea
          onChange={handleTextarea}
          value={textarea}
          name="comment"
          maxLength="300"
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Комментарий"
        ></textarea>
        {/* </div> */}
        <button
          type="submit"
          className={`${styles.button} ${styles.buttonAdd}`}
        >
          Добавить
        </button>
        <button
          onClick={closeModal}
          className={`${styles.button} ${styles.buttonCancel}`}
        >
          Отмена
        </button>
      </form>
    </div>
  );
}
