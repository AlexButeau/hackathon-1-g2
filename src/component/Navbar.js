import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Navbar extends Component {
 
  render() {
    return (
      <div className='menu'>
        <ul>
          <img src="./images/user.png" />
          <img src="./images/agenda.png" />
          <img src="./images/quest.png" />
          <img src="./images/mail.png" />
        </ul>
      </div>
    );
  }
}

export default Navbar;