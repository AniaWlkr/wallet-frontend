import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import HomeTabMobileTable from './HomeTabMobileTable';
import HomeTabTable from './HomeTabTable';

import selectors from '../../redux/transactions/transSelectors';
import { normalizedTransactions } from '../../utils/normalizedTransactions';

import styles from './HomeTab.module.scss';

export default function HomeTab({ style = 'otherScreenSize' }) {
  const data = useSelector(selectors.getAllTransactions);

  const transactions = normalizedTransactions(data);

  // для открытия модалки на редактирование и модалки на удаления транзакции
  const btnHandleClick = (operation, idTransaction) =>
    console.log(operation, idTransaction);

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
    </section>
  );
}

HomeTab.propTypes = {
  style: PropTypes.string,
};
