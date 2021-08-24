// import { NavLink } from 'react-router-dom';
// import routes from '../../../routes/routes';
import RegistrationForm from '../../RegistrationForm';
import styles from './RegistrationPage.module.scss';

export default function RegistrationPage() {
  return (
    <div>
      <div className={styles.background}></div>
      <p className={styles.financeApp}>Finance App</p>
      <RegistrationForm />
    </div>
  );
}
