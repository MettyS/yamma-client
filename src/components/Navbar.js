import React, { Component } from 'react';
import TokenService from '../services/token-service.js';

class Navbar extends Component {
  logOutClick = () => {
    TokenService.clearAuthToken();
    TokenService.getUserId = (id) => {};
    window.location = '/';
  };

  render() {
    return (
      <div className='navbar-container'>
        <nav>put links here</nav>
      </div>
    );
  }
}

export default Navbar;
