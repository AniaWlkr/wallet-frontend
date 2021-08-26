import Media from 'react-media-next';
import { useSelector } from 'react-redux';
// import useSizeScreen from '../../utils/useSizeScreen';

import HomeTabMobileTable from './HomeTabMobileTable';
import HomeTabTable from './HomeTabTable';

import selectors from '../../redux/transactions/transSelectors';
import { normalizedTransactions } from '../../utils/normalizedTransactions';

export default function HomeTab() {
  const data = useSelector(selectors.getAllTransactions);

  const transactions = normalizedTransactions(data);
  // const size = useSizeScreen();

  const breakpoints = {
    small: '(max-width: 767px)',
    big: '(min-width: 768px)',
  };

  return (
    <section>
      <p>HomeTab</p>
      {/* {Number(size) >= 768 ? (
        <HomeTabTable transactions={transactions} />
      ) : (
        <HomeTabMobileTable transactions={transactions} />
      )} */}

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
