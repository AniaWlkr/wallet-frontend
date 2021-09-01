import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { selectors } from '../../redux/transactions';
import {
  deleteTransactionOperation,
  // getTransactionsOperation,
} from '../../redux/transactions/transOperations';

import styles from './ModalDeleteTransaction.module.scss';

const TransactionDelete = ({ toggleModal, transactionId }) => {
  const dispatch = useDispatch();
  const initialTransaction = useSelector(
    selectors.getTransactionById(transactionId),
  );

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(deleteTransactionOperation(transactionId));
    // dispatch(getTransactionsOperation());
    toggleModal();
  };

  const { transType, date, categoryId, sum, comment } = initialTransaction;
  const transDate = moment(date).format('DD.MM.YYYY');
  const category = categoryId.categoryName;

  return (
    <div className={styles.mainDiv}>
      <p className={styles.text}>Удалить транзакцию</p>
      <div className={styles.transType}>
        <p className={transType === 'income' ? styles.income : styles.spend}>
          {transType === 'income' ? 'Доход' : 'Расход'}
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        {transType === 'income' ? null : (
          <input
            type="text"
            name="category"
            value={category}
            disabled
            className={`${styles.input} ${styles.select}`}
            placeholder={category}
          ></input>
        )}
        <div className={styles.sumAndDate}>
          <label className={styles.label}>
            <input
              value={parseFloat(sum).toFixed(2)}
              disabled
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
          value={comment}
          name="comment"
          maxLength="300"
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Комментарий"
          disabled
        ></textarea>
        <button
          type="submit"
          className={`${styles.button} ${styles.buttonAdd}`}
        >
          Удалить
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

TransactionDelete.propTypes = {
  transactionId: PropTypes.string,
  toggleModal: PropTypes.func,
};

export default TransactionDelete;
