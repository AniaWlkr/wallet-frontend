import { useDispatch } from 'react-redux';
import { setExitModalClose } from '../../redux/transactions/transOperations';
import authOperations from '../../redux/auth/authOperations';
import styles from './ModalLogout.module.scss';

export default function ModalLogout() {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setExitModalClose());
  };

  const exit = () => {
    dispatch(authOperations.logoutUser());
    dispatch(setExitModalClose());
  };

  return (
    <div className={styles.mainDiv}>
      <p className={styles.text}>Вы уверены, что хотите выйти?</p>
      <button className={`${styles.button} ${styles.exit}`} onClick={exit}>
        {' '}
        Да
      </button>
      <button
        className={`${styles.button} ${styles.close}`}
        onClick={closeModal}
      >
        {' '}
        Нет
      </button>
    </div>
  );
}
