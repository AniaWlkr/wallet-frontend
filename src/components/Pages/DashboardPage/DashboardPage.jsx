import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import HomeTab from '../../HomeTab';
import DiagramTab from '../../DiagramTab';
import Header from '../../Header';

import { getTransactionsOperation } from '../../../redux/transactions/transOperations';

import routes from '../../../routes/routes';
import SideBar from '../../SideBar/SideBar';
import Modal from '../../Modal';
import ButtonAddTransactions from '../../ButtonAddTransactions';
import ModallAddTransaction from '../../ModalAddTransaction';

// import authSelectors from '../../../redux/auth/authSelectors';
import transSelectors from '../../../redux/transactions/transSelectors';

export default function DashboardPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const getTransactions = () => dispatch(getTransactionsOperation());

  // const getCurrentBalance = async token => await getBalance(token);

  useEffect(() => {
    getTransactions();
    // setBalance(getCurrentBalance(token));
  }, []);

  const isModalOpenSelector = useSelector(transSelectors.isModalOpen);
  // console.log(isModalOpenSelector);
  // const isAuthed = useSelector(authSelectors.isAuthed);
  // console.dir(isAuthed);

  return (
    <section>
      <Header />
      <div>
        {/* <Header /> */}
        <p>DashboardPage</p>
        <SideBar />
        {location.pathname === routes.dashBoard && <HomeTab />}
        {location.pathname === routes.statistics && <DiagramTab />}
      </div>

      <div>
        <ButtonAddTransactions></ButtonAddTransactions>
        <Modal component={ModallAddTransaction} />

        {isModalOpenSelector ? <ModallAddTransaction /> : null}
      </div>
    </section>
  );
}
