import './Header.scss';
import authSelectors from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    isLoggedIn && (
      <header>
        <div className="headerContainer">
          <h1 className="header">Wallet</h1>
        </div>
      </header>
    )
  );
}
