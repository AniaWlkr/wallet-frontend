import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import HomeTab from '../../HomeTab';
import DiagramTab from '../../DiagramTab';
import Header from '../../Header';

import { getTransactionsOperation } from '../../../redux/transactions/transOperations';

import routes from '../../../routes/routes';
import SideBar from '../../SideBar/SideBar';
// import Modal from '../../Modal';
// import ButtonAddTransactions from '../../ButtonAddTransactions';
// import { useState } from 'react';
// import authSelectors from '../../../redux/auth/authSelectors';
// import transSelectors from '../../../redux/transactions/transSelectors';
// import ModallAddTransaction from '../../ModalAddTransaction';

export default function DashboardPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const getTransactions = () => dispatch(getTransactionsOperation());

  // const getCurrentBalance = async token => await getBalance(token);

  useEffect(() => {
    getTransactions();
    // setBalance(getCurrentBalance(token));
  }, []);

  // const [showModal, setShowModal] = useState(false);
  // const isModalOpenSelector = useSelector(transSelectors.isModalOpen);
  // console.log(isModalOpenSelector);
  // const isAuthed = useSelector(authSelectors.isAuthed);
  // console.dir(isAuthed);

  return (
    <section>
      <Header />
      <div>
        <p>DashboardPage</p>
        <SideBar />
        {location.pathname === routes.dashBoard && <HomeTab />}
        {location.pathname === routes.statistics && <DiagramTab />}
      </div>

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
