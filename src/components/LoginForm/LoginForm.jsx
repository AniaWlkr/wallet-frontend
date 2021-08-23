import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import { validate } from 'indicative/validator';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import LockSharpIcon from '@material-ui/icons/LockSharp';
import styles from './LoginForm.module.scss';
import { alert, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
defaults.delay = '2000';
defaults.width = '200px';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  // const [errorEmail, setErrorEmail] = useState('');
  // const [errorPassword, setErrorPassword] = useState('');

  const rules = {
    email: 'required|email',
    password: 'required|min:8|max:12',
  };

  const messages = {
    required: 'Make sure to enter the field value)',
    email: 'Enter valid email address, please',
    min: 'Too small',
    max: 'Too big',
  };

  const dispatch = useDispatch();

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const userToLogin = e => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    validate(user, rules, messages)
      .then(() => {
        setValidEmail(true);
        setValidPassword(true);
      })
      .catch(error => {
        console.log(error);
        if (error[0].field === 'email') {
          setValidEmail(false);
          // setErrorEmail(error[0].message);

          alert({
            text: `${error[0].message}`,
          });
          console.log(error[0].message);
        }
        if (error[0].field === 'password') {
          setValidPassword(false);
          // setErrorPassword(error[0].message);
          alert({
            text: `${error[0].message}`,
          });
          console.log(error[0].message);
        }
      });

    dispatch(authOperations.loginUser(user));

    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.mainDiv}>
      <div>
        <p className={styles.wallet}>Wallet</p>
      </div>
      <form className={styles.form} onSubmit={userToLogin}>
        <div className={styles.labelsDiv}>
          <label className={styles.label}>
            <span className={`${styles.span} ${styles.mailSpan}`}>
              <MailOutlineSharpIcon></MailOutlineSharpIcon>
            </span>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={handleEmail}
              className={
                validEmail
                  ? `${styles.input} `
                  : `${styles.input} ${styles.inputError}`
              }
            ></input>
          </label>
          <label className={styles.label}>
            <span className={styles.span}>
              <LockSharpIcon></LockSharpIcon>
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
              className={
                validPassword
                  ? `${styles.input} `
                  : `${styles.input} ${styles.inputError}`
              }
            ></input>
          </label>
        </div>

        <button className={`${styles.button} ${styles.enter}`} type="submit">
          Login
        </button>

        <NavLink
          className={`${styles.button} ${styles.register}`}
          to={routes.register}
        >
          Register
        </NavLink>
      </form>
    </div>
  );
}
