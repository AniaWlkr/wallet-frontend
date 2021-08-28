import LoginForm from '../../LoginForm';
import styles from './LoginPage.module.scss';
import Container from '../../Container';

export default function LoginPage() {
  return (
    <Container>
      <div className={styles.desctop}>
        <div className={styles.svg}>
          <div className={styles.background}></div>
          <p className={styles.financeApp}>Finance App</p>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </Container>
  );
}
