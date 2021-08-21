import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

export default function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleName = e => {
    setName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const createUserToRegister = e => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    dispatch(authOperations.registerUser(user));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <div>
        <p>RegistrationForm</p>
      </div>
      <form onSubmit={createUserToRegister}>
        <label>
          Name
          <input
            type="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleName}
          ></input>
        </label>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
