import React, { useState } from 'react';
// import coatOfArms from '../images/kaamelott@3x.png';
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
      <div
        className='coat-of-arms'
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
        <input className='submit' type='submit' value='Send' />
      </form>
    </div>
  );
};

export default LoginPage;
