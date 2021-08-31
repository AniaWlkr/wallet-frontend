import Media from 'react-media-next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import HomeTab from '../../HomeTab';
import DiagramTab from '../../DiagramTab';
import Header from '../../Header';
import Container from '../../Container';
import Navigation from '../../Navigation';
import Currency from '../../Currency';
import Balance from '../../Balance';
import Loader from '../../Loader';

import { getTransactionsOperation } from '../../../redux/transactions/transOperations';
import { getCategoriesOperation } from '../../../redux/categories/categoriesOperations';
import { getCurrentBalance } from '../../../redux/finance/financeOperations';
import { getCurrentUser } from '../../../redux/auth/authOperations';

import routes from '../../../routes/routes';
import styles from './DashboardPage.module.scss';
import Modal from '../../Modal';
import ButtonAddTransactions from '../../ButtonAddTransactions';
import ModallAddTransaction from '../../ModalAddTransaction';
import ModalLogout from '../../ModalLogout';
import transSelectors from '../../../redux/transactions/transSelectors';

const breakpoints = {
  mobileScreenSize: '(max-width: 767px)',
  otherScreenSize: '(min-width: 768px)',
};

export default function DashboardPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const goToHomePage = () => history.push(routes.dashBoard);

  const getTransactions = () => dispatch(getTransactionsOperation());
  const getBalance = () => dispatch(getCurrentBalance());
  const getCategories = () => dispatch(getCategoriesOperation());
  const getUser = () => dispatch(getCurrentUser());

  useEffect(async () => {
    setLoading(true);
    await getTransactions();
    await getBalance();
    await getCategories();
    await getUser();
    setLoading(false);
  }, [dispatch]);

  const isTransactionModalOpenSelector = useSelector(
    transSelectors.isTransactionModalOpen,
  );
  const isExitModalOpenSelector = useSelector(transSelectors.isExitModalOpen);

  return (
    <>
      <Header />
      {loading && <Loader />}
      {!loading && (
        <section className={styles.section}>
          <div className={styles.section_wrapper}>
            <Container styleClass={styles.container}>
              <Media queries={breakpoints}>
                {matches => {
                  if (
                    matches.otherScreenSize === true &&
                    location.pathname === routes.currency
                  ) {
                    goToHomePage();
                  }
                  return (
                    <>
                      {matches.mobileScreenSize && (
                        <>
                          <Navigation />
                          {location.pathname === routes.dashBoard && (
                            <Balance />
                          )}
                          {location.pathname === routes.currency && (
                            <Currency />
                          )}
                          {location.pathname === routes.dashBoard && (
                            <HomeTab style={'mobile'} />
                          )}
                          {location.pathname === routes.statistics && (
                            <DiagramTab />
                          )}
                        </>
                      )}

                      {matches.otherScreenSize && (
                        <div className={styles.wrapper}>
                          <div className={styles.sidebar}>
                            <div>
                              <Navigation />
                              <Balance />
                            </div>
                            <div>
                              <Currency />
                            </div>
                          </div>
                          <div className={styles.tab_wrapper}>
                            {location.pathname === routes.dashBoard && (
                              <HomeTab />
                            )}
                            {location.pathname === routes.statistics && (
                              <DiagramTab />
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  );
                }}
              </Media>
            </Container>

            <div>
              <ButtonAddTransactions></ButtonAddTransactions>

              {isTransactionModalOpenSelector ? (
                <Modal component={ModallAddTransaction} />
              ) : null}

              {isExitModalOpenSelector ? (
                <Modal component={ModalLogout} />
              ) : null}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
