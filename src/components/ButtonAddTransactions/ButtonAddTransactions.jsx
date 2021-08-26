import { useDispatch } from 'react-redux';
import { setModalOpen } from '../../redux/transactions/transOperations';
import styles from './ButtonAddTransactions.module.scss';
import AddSharpIcon from '@material-ui/icons/AddSharp';

export default function ButtonAddTransactions() {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setModalOpen());
  };

  return (
    <div>
      <button className={styles.button} onClick={openModal}>
        <span>
          <AddSharpIcon className={styles.span} />
        </span>
      </button>
    </div>
  );
}
