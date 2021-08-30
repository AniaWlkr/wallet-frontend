import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  setTransactionModalClose,
  addTransactionOperation,
} from '../../redux/transactions/transOperations';
// import { getCategoriesOperation } from '../../redux/categories/categoriesOperations';
import selectors from '../../redux/categories/categoriesSelectors';
import styles from './ModalAddTransaction.module.scss';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import { validate } from 'indicative/validator';
import { alert, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import DateRangeSharpIcon from '@material-ui/icons/DateRangeSharp';
import Select from 'react-select';

defaults.delay = '3000';
defaults.width = '280px';

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    outline: 'none',
    marginButton: '40',
    borderColor: 'none',
  }),
  control: (provided, state) => ({
    ...provided,
    boxShadow: 'none',
    border: 'none',
    borderBottom: '1px solid #bdbdbd',
    outline: 'none',
    marginButton: '40',
    borderRadius: 0,
    cursor: 'text',
    paddingLeft: 20,
    '&:hover': {
      borderColor: 'none',
    },
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: 18,
    color: !state.categoryId ? '#000000' : '#bdbdbd',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    paddingRight: 30,
    border: 'none',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: 'none',
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: '#ffffffb3',
    borderRadius: 20,
    padding: 8,
  }),
  menuList: (provided, state) => ({
    ...provided,
    color: '#000000',
    borderRadius: 20,
    fontSize: 18,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#ffffffb3',
    '&:hover': {
      color: '#ff6596',
      cursor: 'pointer',
      backgroundColor: '#ffffff',
    },
    '&:active': {
      color: '#ff6596',
      cursor: 'pointer',
      backgroundColor: '#ffffff',
    },
    singleValue: (provided, state) => ({
      ...provided,
      color: '#000000',
    }),
  }),
};

export default function ModallAddTransaction() {
  const [checkbox, setCheckbox] = useState(true);
  const [categoryId, setCategoryId] = useState('61222863fd194a14a7cfe3cf');
  const [category, setCategory] = useState('Выберите категорию');
  const [sum, setSum] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [textarea, setTextarea] = useState('');

  const dispatch = useDispatch();

  const allCategories = useSelector(selectors.getCategories);

  const changeChekbox = e => {
    setCheckbox(!checkbox);
  };

  const handleCategory = e => {
    setCategoryId(e.value);
    setCategory(e.label);
  };

  const handleSum = e => {
    // if(e.target.value === '0')
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
    // console.log(e.target.value);
  };

  const closeModal = () => {
    dispatch(setTransactionModalClose());
  };

  const addTransaction = e => {
    e.preventDefault();

    const rules = {
      sum: 'required|above:0',
      selectedDate: 'required',
      category: 'required',
    };

    const messages = {
      required: 'Make sure to enter the field value',
    };

    //   const transaction = () => {
    //  !checkbox ?
    //   }

    // const transaction = {
    //   transType: `${!checkbox ? 'spend' : 'income'}`,
    //   sum,
    //   date: selectedDate,
    //   comment: textarea,
    // };

    // !checkbox ? (transaction.categoryId = categoryId) : null;

    const makeTransaction = () => {
      if (!checkbox && !textarea) {
        return {
          transType: 'spend',
          sum,
          date: selectedDate,
          //  comment: textarea,
          categoryId: categoryId,
        };
      }
      if (checkbox && !textarea) {
        return {
          transType: 'income',
          sum,
          date: selectedDate,
          categoryId: '612b739e357da905903ec848',
          //  comment: textarea,
        };
      }
      if (!checkbox && textarea) {
        return {
          transType: 'spend',
          sum,
          date: selectedDate,
          comment: textarea,
          categoryId: categoryId,
        };
      }
      if (checkbox && textarea) {
        return {
          transType: 'income',
          sum,
          date: selectedDate,
          comment: textarea,
          categoryId: '612b739e357da905903ec848',
        };
      }
    };

    validate({ sum, selectedDate, category }, rules, messages)
      .then(() => {
        dispatch(addTransactionOperation(transaction));
        dispatch(setTransactionModalClose());
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

    const transaction = makeTransaction();
    console.log(transaction);
  };

  const options = allCategories.map(category => ({
    value: category._id,
    label: category.categoryName,
  }));

  return (
    <div className={styles.mainDiv}>
      <p className={styles.text}>Добавить транзакцию</p>
      <form onSubmit={addTransaction} className={styles.form}>
        <div className={styles.textDiv}>
          <div>
            <p
              className={
                !checkbox
                  ? `${styles.grey} ${styles.positionAdd}`
                  : `${styles.grey}  ${styles.positionAdd} ${styles.addAccent}`
              }
            >
              Доход
            </p>
          </div>

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
          <div>
            <p
              className={
                !checkbox
                  ? `${styles.grey}  ${styles.positionExpense} ${styles.expenseAccent}`
                  : `${styles.positionExpense} ${styles.grey}`
              }
            >
              Расход
            </p>
          </div>
        </div>

        {checkbox ? null : (
          <Select
            styles={customStyles}
            options={options}
            className={styles.select}
            onChange={handleCategory}
            name="select"
            value={categoryId}
            placeholder={category}
          />
        )}
        <div className={styles.sumAndDate}>
          <label className={styles.label}>
            <input
              onChange={handleSum}
              value={sum}
              type="number"
              name="sum"
              placeholder="0.00"
              className={`${styles.input} ${styles.sumInput}`}
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
              className={`${styles.input} ${styles.datetimeInput}`}
              inputProps={{ className: styles.datetime }}
            />
            <DateRangeSharpIcon
              className={styles.calendarIcon}
            ></DateRangeSharpIcon>
          </label>
        </div>
        <textarea
          onChange={handleTextarea}
          value={textarea}
          name="comment"
          maxLength="300"
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Комментарий"
        ></textarea>
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
