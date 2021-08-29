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

  return (
    <section className={styles.wrapper}>
      {style === 'mobile' && <HomeTabMobileTable transactions={transactions} />}
      {style === 'otherScreenSize' && (
        <HomeTabTable transactions={transactions} />
      )}
    </section>
  );
}

HomeTab.propTypes = {
  style: PropTypes.string,
};
