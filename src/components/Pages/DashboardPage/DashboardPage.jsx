import { NavLink } from 'react-router-dom';
import routes from '../../../routes/routes';
import Table from '../../Table';
// import Modal from '../../Modal';
// import ButtonAddTransactions from '../../ButtonAddTransactions';
// import { useState } from 'react';
// import authSelectors from '../../../redux/auth/authSelectors';
// import transSelectors from '../../../redux/transactions/transSelectors';
// import { useSelector } from 'react-redux';
import { financeData, totalFinanceData } from './data/financeData';
// import ModallAddTransaction from '../../ModalAddTransaction';

import {
  monthOptions,
  yearOptions,
  YEAR_INITIAL_STATE,
  MONTH_INITIAL_STATE,
} from './data/selectorsData';

export default function DashboardPage() {
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
      <Table
        financeData={financeData}
        totalFinanceData={totalFinanceData}
        monthOptions={monthOptions}
        yearOptions={yearOptions}
        yearState={YEAR_INITIAL_STATE}
        monthState={MONTH_INITIAL_STATE}
      />
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
