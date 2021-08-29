import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import './Navigation.scss';
import useSizeScreen from '../../utils/useSizeScreen';
import { Home } from '../../IconButton/Home';
import { Statistics } from '../../IconButton/Statistics';
import { Currency } from '../../IconButton/Currency';

export default function Navigation() {
  const sizeScreen = useSizeScreen();
  return (
    <nav className="itemLink">
      <NavLink
        exact
        to={routes.dashBoard}
        className="NavLink"
        activeClassName="active"
      >
        <button className="buttonNav">
          {sizeScreen <= 767 ? (
            <Home svg="svgNav" />
          ) : (
            <div className="boxNav">
              <Home svg="svgNav" />
              <span className="textNav">Главная</span>
            </div>
          )}
        </button>
      </NavLink>

      <NavLink
        to={routes.statistics}
        className="Navlink"
        activeClassName="Navlink active"
      >
        <button className="buttonNav">
          {sizeScreen <= 767 ? (
            <Statistics svg="svgNav" />
          ) : (
            <div className="boxNav">
              <Statistics svg="svgNav" />
              <span className="textNav">Статистика</span>
            </div>
          )}
        </button>
      </NavLink>

      {sizeScreen <= 767 && (
        <NavLink activeClassName="active" to={routes.currency}>
          <button className="buttonNav">
            <Currency svg="svgNav" />
          </button>
        </NavLink>
      )}
    </nav>
  );
}
