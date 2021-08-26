import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import HomeTab from '../../HomeTab';
import DiagramTab from '../../DiagramTab';
import Header from '../../Header';
import Container from '../../Container';

import { getTransactionsOperation } from '../../../redux/transactions/transOperations';
import { getCurrentBalance } from '../../../redux/finance/financeOperations';

import routes from '../../../routes/routes';
import SideBar from '../../SideBar/SideBar';

import styles from './DashboardPage.module.scss';
// import Modal from '../../Modal';
// import ButtonAddTransactions from '../../ButtonAddTransactions';
// import ModallAddTransaction from '../../ModalAddTransaction';

// import { useState } from 'react';
// import authSelectors from '../../../redux/auth/authSelectors';
// import transSelectors from '../../../redux/transactions/transSelectors';

export default function DashboardPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const getTransactions = () => dispatch(getTransactionsOperation());
  const getBalance = () => dispatch(getCurrentBalance());

  useEffect(() => {
    getTransactions();
    getBalance();
  }, []);

  // const [showModal, setShowModal] = useState(false);
  // const isModalOpenSelector = useSelector(transSelectors.isModalOpen);
  // console.log(isModalOpenSelector);
  // const isAuthed = useSelector(authSelectors.isAuthed);
  // console.dir(isAuthed);
  // const isOpenSelector = useSelector(transSelectors.isModalOpen);

  return (
    <section className={styles.section}>
      <Header />
      <Container styleClass={styles.container}>
        {/* <Header /> */}
        <p>DashboardPage</p>
        <SideBar />
        {location.pathname === routes.dashBoard && <HomeTab />}
        {location.pathname === routes.statistics && <DiagramTab />}
      </Container>

      {/* <ButtonAddTransactions
          onClick={() => setShowModal(true)}
        ></ButtonAddTransactions>
        <Modal showModal={showModal} /> */}
      {/* {isModalOpenSelector ? (
          <ModallAddTransaction></ModallAddTransaction>
        ) : null} */}
    </section>
  );
}

// не удаляйте комментарий плз

/*  
return (
    <div>
      {isAuthed ? (
        <div>
          <p>
            HOMEPAGE <br />
            you isAuthed
          </p>
          <NavLink to={routes.homepage}>Home</NavLink>
          <NavLink to={routes.homepage}>Exit</NavLink>
        </div>
      ) : (
        <div>
          <p>
            HOMEPAGE
            <br /> you is Not Authed
          </p>
          <NavLink to={routes.homepage}>Home</NavLink>
          <NavLink to={routes.login}>Login</NavLink>
          <NavLink to={routes.register}>Register</NavLink>
        </div>
      )}
    </div>
  );

  */

// не удаляйте комментарий плз
