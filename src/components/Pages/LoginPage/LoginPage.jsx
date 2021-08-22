import { NavLink } from 'react-router-dom';
import routes from '../../../routes/routes';
import LoginForm from '../../LoginForm';

export default function LoginPage() {
  return (
    <div>
      <p>LoginPage</p>
      <div>
        <NavLink to={routes.homepage}>Home</NavLink>
      </div>
      <LoginForm />
    </div>
  );
}
