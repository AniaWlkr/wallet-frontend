import './Header.scss';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSizeScreen from '../../utils/useSizeScreen';

import Container from '../Container';

export default function Header() {
  const dispatch = useDispatch();
  const sizeScreen = useSizeScreen();
  const name = useSelector(authSelectors.getUserName);
  const onLogout = useCallback(
    () => dispatch(authOperations.logoutUser()),
    [dispatch],
  );
  return (
    <header className="header">
      <Container>
        <div className="headerContainer">
          <div className="headerLogo">
            <h1 className="headerTitle">Wallet</h1>
          </div>
          <div className="userLogout">
            <span className="userName">{name}</span>
            <button className="buttonExit" type="button" onClick={onLogout}>
              {Number(sizeScreen) >= 768 && <span className="exit">Exit</span>}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
