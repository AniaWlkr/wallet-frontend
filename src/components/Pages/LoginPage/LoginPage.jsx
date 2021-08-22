import { NavLink } from 'react-router-dom';
import routes from '../../../routes/routes';
import LoginForm from '../../LoginForm';

export default function LoginPage() {
  console.log(routes);
  return (
    <div>
      <p>LoginPage</p>
      <div>
        <NavLink to={routes.dashBoard}>Home</NavLink>
      </div>
      <LoginForm />
    </div>
  );
}
