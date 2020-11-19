import React, { useState } from 'react';
import coatOfArms from './coat-of-arms.png';
import './styles/LoginPage.scss';

const LoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
    props.history.push('/home');
  };

  return (
    <div className='login-page'>
      <img
        className='coat-of-arms'
        src={coatOfArms}
        alt='a drawing of a coat of arms'
      />
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <br />
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />{' '}
        </label>
        <label>
          Password <br />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{' '}
        </label>
        <input className='submit' type='submit' value='Envoyer' />
      </form>
    </div>
  );
};

export default LoginPage;
