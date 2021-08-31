import LoginForm from '../../LoginForm';
import styles from './LoginPage.module.scss';
import ContainerForLoginAndRegistration from '../../ContainerForLoginAndRegistration';

export default function LoginPage() {
  return (
    <ContainerForLoginAndRegistration>
      <div className={styles.sideBar}>
        <p className={styles.financeApp}>Finance App</p>
      </div>
      <div className={styles.formWraper}>
        <LoginForm />
      </div>
    </ContainerForLoginAndRegistration>
  );
}
