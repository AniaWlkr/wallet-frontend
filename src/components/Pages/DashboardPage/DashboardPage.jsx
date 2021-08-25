import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import routes from '../../../routes/routes';

// import { getTransactions, getBalance } from '';
// import Table from '../../Table';
import HomeTab from '../../HomeTab';
import DiagramTab from '../../DiagramTab';

import { getTransactionsOperation } from '../../../redux/transactions/transOperations';

// import Modal from '../../Modal';
// import ButtonAddTransactions from '../../ButtonAddTransactions';
// import { useState } from 'react';
// import authSelectors from '../../../redux/auth/authSelectors';
// import transSelectors from '../../../redux/transactions/transSelectors';
// import ModallAddTransaction from '../../ModalAddTransaction';

export default function DashboardPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const balance = '21 000';

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
    <div>
      <div>
        <p>DashboardPage</p>
        <NavLink to={routes.dashBoard}>Home</NavLink>
        <NavLink to={routes.login}>Login</NavLink>
        <NavLink to={routes.register}>Register</NavLink>
        <NavLink to={routes.dashBoard}>Exit</NavLink>
        {/* <ButtonAddTransactions
          onClick={() => setShowModal(true)}
        ></ButtonAddTransactions>
        <Modal showModal={showModal} /> */}
        {/* {isModalOpenSelector ? (
          <ModallAddTransaction></ModallAddTransaction>
        ) : null} */}
      </div>

      {location.pathname === routes.dashBoard && <HomeTab />}
      {location.pathname === routes.statistics && <DiagramTab />}
      <p>
        <span>Баланс---</span>
        {balance}
      </p>
    </div>
  );

  // <div>
  //   <div>
  //     <p>DashboardPage</p>
  //     <NavLink to={routes.dashBoard}>Home</NavLink>
  //     <NavLink to={routes.login}>Login</NavLink>
  //     <NavLink to={routes.register}>Register</NavLink>
  //     <NavLink onClick={logOut} to={routes.dashBoard}>
  //       Exit
  //     </NavLink>
  //   </div>
  // </div>
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
