// import React, { useState } from 'react';
import styles from './Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setModalClose } from '../../redux/transactions/transOperations';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';

import PropTypes from 'prop-types';

import selectors from '../../redux/transactions/transSelectors';

export default function Modal({ component: Component }) {
  const isOpen = useSelector(selectors.isModalOpen);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setModalClose());
  };

  const closeByEsc = e => {
    // if (e.code === 27) {
    //   dispatch(setModalClose());
    // }
    console.log(e);
  };

  return (
    <div>
      {isOpen ? (
        <div
          className={styles.modal}
          // className={
          //   isOpen ? `${styles.modal}` : `${styles.modal} ${styles.isOpen}`
          // }
        >
          <div
            onKeyDown={closeByEsc}
            onClick={closeModal}
            className={styles.overlay}
          ></div>

          <div
            className={styles.content}
            // className={
            //   isOpen
            //     ? `${styles.content}`
            //     : `${styles.content} ${styles.isOpen}`
            // }
          >
            <Component />
            <button
              onClick={closeModal}
              type="button"
              className={styles.button}
            >
              <span className={styles.cross}>
                <CloseSharpIcon />
              </span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

Modal.propTypes = {
  component: PropTypes.any,
};
