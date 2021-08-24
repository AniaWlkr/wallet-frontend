// import { useRef } from 'react';
import LoginForm from '../../LoginForm';
// import Modal from '../../Modal';
import styles from './LoginPage.module.scss';

export default function LoginPage() {
  // const modal = useRef(null);

  return (
    <div className={styles.desctop}>
      <div className={styles.svg}>
        <div className={styles.background}></div>
        <p className={styles.financeApp}>Finance App</p>
      </div>
      {/* <button onClick={() => modal.current.open()}>Open modal</button>
      <Modal ref={modal}>
        <h1>Modal</h1>
      </Modal> */}
      <div>
        <LoginForm />
      </div>
    </div>
  );
}
