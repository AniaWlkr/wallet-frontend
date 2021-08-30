import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButtonTemplate';
import { ReactComponent as CloseIcon } from '../../images/icons/crossIcon.svg';
import styles from './ModalTemplate.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  const handleEscape = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const closeOnBackdrop = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={closeOnBackdrop}>
      <div className={styles.content}>{children}</div>
      <IconButton
        className={styles.button}
        onClick={onClose}
        aria-label="close button"
      >
        <CloseIcon className={styles.icon} />
      </IconButton>
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default Modal;
