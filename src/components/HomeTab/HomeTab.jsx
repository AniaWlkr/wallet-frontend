import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import HomeTabMobileTable from './HomeTabMobileTable';
import HomeTabTable from './HomeTabTable';
import ModalTemplate from '../ModalTemplate';
import ModalChangeTransaction from '../ModalChangeTransaction';
import ModalDeleteTransaction from '../ModalDeleteTransaction';

import selectors from '../../redux/transactions/transSelectors';
import { normalizedTransactions } from '../../utils/normalizedTransactions';

import styles from './HomeTab.module.scss';

export default function HomeTab({ style = 'otherScreenSize' }) {
  const data = useSelector(selectors.getAllTransactions);

  const transactions = normalizedTransactions(data);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [transactionId, setTransactionId] = useState(0);

  const toggleEditModal = useCallback(() => {
    setShowEditModal(prevShowModal => !prevShowModal);
    document.body.classList.toggle('no-scroll');
  }, []);
  const toggleDeleteModal = useCallback(() => {
    setShowDeleteModal(prevShowModal => !prevShowModal);
    document.body.classList.toggle('no-scroll');
  }, []);

  const btnHandleClick = (operation, idTransaction) => {
    switch (operation) {
      case 'upgrade':
        toggleEditModal();
        break;
      case 'delete':
        toggleDeleteModal();
        break;

      default:
        console.log('Operation is not determined');
    }

    setTransactionId(idTransaction);
  };

  return (
    <section className={styles.wrapper}>
      {style === 'mobile' && (
        <HomeTabMobileTable
          transactions={transactions}
          btnHandleClick={btnHandleClick}
        />
      )}
      {style === 'otherScreenSize' && (
        <HomeTabTable
          transactions={transactions}
          btnHandleClick={btnHandleClick}
        />
      )}
      {showEditModal && (
        <ModalTemplate onClose={toggleEditModal}>
          <ModalChangeTransaction
            toggleModal={toggleEditModal}
            transactionId={transactionId}
          />
        </ModalTemplate>
      )}
      {showDeleteModal && (
        <ModalTemplate onClose={toggleDeleteModal}>
          <ModalDeleteTransaction
            toggleModal={toggleDeleteModal}
            transactionId={transactionId}
          />
        </ModalTemplate>
      )}
    </section>
  );
}

HomeTab.propTypes = {
  style: PropTypes.string,
};
