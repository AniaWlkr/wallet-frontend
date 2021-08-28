import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  setModalClose,
  // addTransactionOperation,
} from '../../redux/transactions/transOperations';
import { getCategoriesOperation } from '../../redux/categories/categoriesOperations';
import selectors from '../../redux/categories/categoriesSelectors';
import styles from './ModalAddTransaction.module.scss';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';

export default function ModallAddTransaction() {
  useEffect(() => {
    dispatch(getCategoriesOperation());
  }, []);

  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const dateNow = `${day}.${month}.${year}`;

  const [checkbox, setCheckbox] = useState(true);
  const [category, setCategory] = useState('Выберите категорию');
  const [sum, setSum] = useState(null);
  const [date, setDate] = useState(`${dateNow}`);
  const [textarea, setTextarea] = useState('');

  const dispatch = useDispatch();

  const allCategories = useSelector(selectors.getCategories);
  // console.log(allCategories);

  const changeChekbox = e => {
    setCheckbox(!checkbox);
  };

  const handleCategory = e => {
    setCategory(e.target.value);
    console.dir(e.target);
  };

  const handleSum = e => {
    setSum(e.target.value);
  };

  const handleDate = e => {
    setDate(e.target.value);
    console.dir(e.target);
  };

  const handleTextarea = e => {
    setTextarea(e.target.value);
  };

  const closeModal = () => {
    dispatch(setModalClose());
  };

  const addTransaction = e => {
    e.preventDefault();
    const transaction = {
      transType: `${!checkbox ? 'Расход' : 'Доход'}`,
      category,
      sum,
      date,
      comment: textarea,
    };

    console.log(transaction);

    //     {
    //   "transType": "spend",
    //   "date": "2021-08-23",
    //   "sum": 2000,
    //   "comment": "some coment",
    //   "balance": 9000,
    //   "categoryId": "6122284cfd194a14a7cfe3c9"
    // }

    // dispatch(addTransactionOperation(transaction));
    dispatch(setModalClose());
  };

  return (
    <div>
      <p>Добавить транзакцию</p>

      <form onSubmit={addTransaction} className={styles.form}>
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
          <p>Доход</p>
          <p>Расход</p>
        </div>
        {!checkbox ? (
          <div>
            <label>
              <select onChange={handleCategory} name="select" value={category}>
                {allCategories.map(category => {
                  return (
                    <option
                      key={category._id}
                      id={`${category._id}`}
                      value={category.categoryName}
                    >
                      {category.categoryName}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              <input
                onChange={handleSum}
                value={sum}
                type="number"
                name="sum"
                placeholder="0.00"
              ></input>
            </label>
            <label>
              <input
                onChange={handleDate}
                value={date}
                type="date"
                name="date"
              ></input>
            </label>
            <textarea
              onChange={handleTextarea}
              value={textarea}
              name="comment"
              maxLength="300"
            ></textarea>
          </div>
        ) : (
          <div>
            <label>
              <input
                onChange={handleSum}
                value={sum}
                type="number"
                name="sum"
                placeholder="0.00"
              ></input>
            </label>
            <label>
              <input
                onChange={handleDate}
                value={date}
                type="date"
                name="date"
              ></input>
            </label>
            <textarea
              onChange={handleTextarea}
              value={textarea}
              name="comment"
              maxLength="300"
            ></textarea>
          </div>
        )}
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
