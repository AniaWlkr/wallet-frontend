import { useState, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalElement = document.getElementById('modal-root');

export function Modal({ children, defaultOpen = false }, ref) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // const closeModal =
  useImperativeHandle(
    ref,
    () => ({
      open: () => setShowModal(true),
      close: () => setShowModal(false),
    }),
    [close],
  );

  return createPortal(
    showModal ? (
      <div>
        <button onClick={toggleModal}>X</button>
        <div>{children}</div>
      </div>
    ) : null,
    modalElement,
  );
}

Modal.propTypes = {
  children: PropTypes.any,
};

export default forwardRef(Modal);
