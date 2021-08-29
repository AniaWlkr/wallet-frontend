import './Header.scss';
import authSelectors from '../../redux/auth/authSelectors';
// import authOperations from '../../redux/auth/authOperations';
// import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSizeScreen from '../../utils/useSizeScreen';

// import Modal from '../Modal';
// import transSelectors from '../../redux/transactions/transSelectors';
// import ModalLogout from '../ModalLogout';
import { setExitModalOpen } from '../../redux/transactions/transOperations';

import Container from '../Container';

export default function Header() {
  const dispatch = useDispatch();
  const sizeScreen = useSizeScreen();
  const name = useSelector(authSelectors.getUserName);

  // const onLogout = useCallback(
  //   () => dispatch(authOperations.logoutUser()),
  //   [dispatch],
  // );

  const openModal = () => {
    dispatch(setExitModalOpen());
  };

  // const isModalOpenSelector = useSelector(transSelectors.isExitModalOpen);

  return (
    <header className="header">
      <Container>
        <div className="headerContainer">
          <div className="headerLogo">
            <h1 className="headerTitle">Wallet</h1>
          </div>
          <div className="userLogout">
            <span className="userName">{name}</span>
            {/* <button className="buttonExit" type="button" onClick={onLogout}> */}
            <button className="buttonExit" type="button" onClick={openModal}>
              {Number(sizeScreen) >= 768 && <span className="exit">Exit</span>}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
