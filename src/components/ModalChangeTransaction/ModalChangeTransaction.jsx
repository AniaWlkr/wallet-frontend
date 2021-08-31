import moment from 'moment';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { selectors } from '../../redux/transactions';
import { editTransactionOperation } from '../../redux/transactions/transOperations';
import categoriesSelector from '../../redux/categories/categoriesSelectors';
import { getCategoriesOperation } from '../../redux/categories/categoriesOperations.js';

import styles from './ModalChangeTransaction.module.scss';

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    outline: 'none',
    borderColor: 'none',
    marginTop: 40,
  }),
  control: (provided, state) => ({
    ...provided,
    boxShadow: 'none',
    border: 'none',
    outline: 'none',
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
    color: state.categoryId ? '#000000' : '#bdbdbd',
  }),
  indicatorsContainer: (provided, _) => ({
    ...provided,
    border: 'none',
  }),
  indicatorSeparator: (provided, _) => ({
    ...provided,
    backgroundColor: 'none',
  }),
  menu: (provided, _) => ({
    ...provided,
    backgroundColor: '#ffffffb3',
    padding: 20,
    border: 'none',
  }),
  menuList: (provided, _) => ({
    ...provided,
    color: '#000000',
    fontSize: 18,
    border: 'none',
  }),
  option: (provided, _) => ({
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
    singleValue: (provided, _) => ({
      ...provided,
      color: '#000000',
    }),
  }),
};

const TransactionEdit = ({ toggleModal, transactionId }) => {
  const dispatch = useDispatch();
  const initialTransaction = useSelector(
    selectors.getTransactionById(transactionId),
  );

  const getCategories = () => dispatch(getCategoriesOperation());

  const [sum, setSum] = useState(0);
  const [comment, setComment] = useState('');
  const [category, setCategory] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const categories = useSelector(categoriesSelector.getCategories);

  const categoryArray = categories?.map(category => ({
    value: category._id,
    label: category.categoryName,
  }));

  useEffect(() => {
    getCategories();
    setSum(initialTransaction?.sum);
    setComment(initialTransaction?.comment ?? '');
    setCategory(initialTransaction?.categoryId.categoryName);
    setCategoryId(initialTransaction?.categoryId._id);
  }, []);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'sum':
        setSum(value);
        break;
      case 'comment':
        setComment(value);
        break;
      default:
        console.error('This field is not defined');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const selectedCategoryId =
      transType === 'income' ? '612b739e357da905903ec848' : categoryId;
    let updatedTransaction = {
      sum,
      categoryId: selectedCategoryId,
    };
    if (comment) updatedTransaction = { ...updatedTransaction, comment };

    console.log('TransactionEdit -> updatedTransaction', updatedTransaction);
    dispatch(editTransactionOperation(transactionId, updatedTransaction));
    toggleModal();

    setSum('');
    setComment('');
    setCategory('');
  };

  const onSelectCategory = event => {
    setCategoryId(event.value);
    setCategory(event.label);
  };

  const { transType, date } = initialTransaction;
  const transDate = moment(date).format('DD.MM.YYYY');

  return (
    <div className={styles.mainDiv}>
      <p className={styles.text}>Изменить транзакцию</p>
      <div className={styles.transType}>
        <p className={transType === 'income' ? styles.income : styles.spend}>
          {transType === 'income' ? 'Доход' : 'Расход'}
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        {transType === 'income' ? null : (
          <Select
            styles={customStyles}
            options={categoryArray}
            className={styles.select}
            onChange={onSelectCategory}
            name="select"
            value={category}
            placeholder={category}
          />
        )}
        <div className={styles.sumAndDate}>
          <label className={styles.label}>
            <input
              onChange={handleChange}
              value={parseFloat(sum).toFixed(2)}
              type="float"
              name="sum"
              className={`${styles.input} ${styles.sumInput}`}
            ></input>
          </label>
          <label className={styles.label}>
            <input
              type="text"
              name="date"
              value={transDate}
              disabled
              className={`${styles.input} ${styles.datetimeInput}`}
            ></input>
          </label>
        </div>
        <textarea
          onChange={handleChange}
          value={comment}
          name="comment"
          maxLength="300"
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Комментарий"
        ></textarea>
        <button
          type="submit"
          className={`${styles.button} ${styles.buttonAdd}`}
        >
          Изменить
        </button>
        <button
          onClick={() => toggleModal()}
          className={`${styles.button} ${styles.buttonCancel}`}
        >
          Отмена
        </button>
      </form>
    </div>
  );
};

TransactionEdit.propTypes = {
  transactionId: PropTypes.string,
  toggleModal: PropTypes.func,
};

export default TransactionEdit;
