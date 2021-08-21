import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    dispatch(authOperations.loginUser(user));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <div>
        <p>LoginForm</p>
      </div>
      <form onSubmit={userToLogin}>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          ></input>
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          ></input>
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
