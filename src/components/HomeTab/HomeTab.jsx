import Media from 'react-media-next';
import HomeTabMobileTable from './HomeTabMobileTable';
import { financeData } from './financeData';
import HomeTabTable from './HomeTabTable';

export default function HomeTab() {
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
                <HomeTabMobileTable transactions={financeData} />
              )}
              {matches.big && <HomeTabTable transactions={financeData} />}
            </>
          );
        }}
      </Media>
    </section>
  );
}
