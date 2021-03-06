import styles from './Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTransactionModalClose,
  setExitModalClose,
} from '../../redux/transactions/transOperations';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import PropTypes from 'prop-types';
import selectors from '../../redux/transactions/transSelectors';

export default function Modal({ component: Component }) {
  const isTransactionModalOpen = useSelector(selectors.isTransactionModalOpen);
  const isExitModalOpen = useSelector(selectors.isExitModalOpen);

  isTransactionModalOpen || isExitModalOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'scroll');

  const closeByEsc = e => {
    if (e.code === 'Escape') {
      dispatch(setTransactionModalClose());
      dispatch(setExitModalClose());
      window.removeEventListener('keydown', closeByEsc);
    }
  };

  window.addEventListener('keydown', closeByEsc);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setTransactionModalClose());
    dispatch(setExitModalClose());
    window.removeEventListener('keydown', closeByEsc);
  };

  return (
    <div>
      {isTransactionModalOpen || isExitModalOpen ? (
        <div className={styles.modal}>
          <div
            onKeyDown={closeByEsc}
            onClick={closeModal}
            className={styles.overlay}
          ></div>
          <div className={styles.content}>
            <button
              onClick={closeModal}
              type="button"
              className={styles.button}
            >
              <span className={styles.cross}>
                <CloseSharpIcon />
              </span>
            </button>
            <Component />
          </div>
        </div>
      ) : null}
    </div>
  );
}

Modal.propTypes = {
  component: PropTypes.any,
};
