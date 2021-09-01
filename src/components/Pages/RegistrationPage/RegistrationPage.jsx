import RegistrationForm from '../../RegistrationForm';
import styles from './RegistrationPage.module.scss';
import ContainerForLoginAndRegistration from '../../ContainerForLoginAndRegistration';

export default function RegistrationPage() {
  return (
    <ContainerForLoginAndRegistration>
      <div className={styles.sideBar}>
        <p className={styles.financeApp}>Finance App</p>
      </div>
      <div className={styles.formWraper}>
        <RegistrationForm />
      </div>
    </ContainerForLoginAndRegistration>
  );
}
