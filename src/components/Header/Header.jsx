import './Header.scss';
import authSelectors from '../../redux/auth/authSelectors';
import { useSelector, useDispatch } from 'react-redux';
import useSizeScreen from '../../utils/useSizeScreen';
import { setExitModalOpen } from '../../redux/transactions/transOperations';
import Container from '../Container';

export default function Header() {
  const dispatch = useDispatch();
  const sizeScreen = useSizeScreen();
  const name = useSelector(authSelectors.getUserName);

  const openModal = () => {
    dispatch(setExitModalOpen());
  };

  return (
    <header className="header">
      <Container>
        <div className="headerContainer">
          <div className="headerLogo">
            <h1 className="headerTitle">Wallet</h1>
          </div>
          <div className="userLogout">
            <span className="userName">{name}</span>
            <button className="buttonExit" type="button" onClick={openModal}>
              {Number(sizeScreen) >= 768 && <span className="exit">Exit</span>}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
