import React, { Component } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

class Navbar extends Component {
 
  render() {
    return (
      <div className='menu'>
        <ul>        
          <Link to='/home'><div className="homeIcon" /></Link>          
          <Link to='/agenda'><div className="agendaIcon" /></Link>          
          <Link to='/questlist'><div className="questIcon" /></Link>          
          <Link to='/contact'><div className="contactIcon" /></Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;