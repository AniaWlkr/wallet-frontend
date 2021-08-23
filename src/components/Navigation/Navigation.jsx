import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className="itemLink">
      <NavLink
        exact
        to={routes.dashBoard}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Home
      </NavLink>
      <nav className="itemLink">
        <NavLink
          to={routes.statistics}
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          Statistics
        </NavLink>
      </nav>
    </nav>
  );
}
