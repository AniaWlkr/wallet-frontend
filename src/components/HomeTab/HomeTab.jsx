import Media from 'react-media-next';
import { useSelector } from 'react-redux';

import HomeTabMobileTable from './HomeTabMobileTable';
import HomeTabTable from './HomeTabTable';

import selectors from '../../redux/transactions/transSelectors';
import { normalizedTransactions } from '../../utils/normalizedTransactions';

export default function HomeTab() {
  const data = useSelector(selectors.getAllTransactions);

  const transactions = normalizedTransactions(data);

  const breakpoints = {
    small: '(max-width: 767px)',
    big: '(min-width: 768px)',
  };

  return (
    <section>
      <p>HomeTab</p>
      <Media queries={breakpoints}>
        {matches => {
          return (
            <>
              {matches.small && (
                <HomeTabMobileTable transactions={transactions} />
              )}
              {matches.big && <HomeTabTable transactions={transactions} />}
            </>
          );
        }}
      </Media>
    </section>
  );
}
