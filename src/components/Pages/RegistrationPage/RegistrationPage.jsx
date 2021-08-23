import { NavLink } from 'react-router-dom';
import routes from '../../../routes/routes';
import RegistrationForm from '../../RegistrationForm';

export default function RegistrationPage() {
  return (
    <div>
      <div>
        <p>RegistrationPage</p>
        <div>
          <NavLink to={routes.dashBoard}>Home</NavLink>
          <NavLink to={routes.login}>Login</NavLink>
          <NavLink to={routes.dashBoard}>Exit</NavLink> {/* удалить */}
        </div>
      </div>
      <RegistrationForm />
    </div>
  );
}
