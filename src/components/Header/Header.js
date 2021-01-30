import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import yammalogored from '../../images/yammalogored.PNG';
import TokenService from '../../services/token-service';
import UserContext from '../../context/UserContext';

class Header extends Component {
  static contextType = UserContext;

  state = {
    open: false,
    user: null,
  };

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        <span className='user_name'>Hi, {this.context.user.username}</span>
        <nav>
          <button
            onClick={this.handleLogoutClick}
            className='user-button'
            to='/login'>
            Logout
          </button>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav className='login-links'>
        <button className='user-button' onClick={this.props.displayLogin}>
          Login
        </button>{' '}
        <br />
        <button className='user-button' onClick={this.props.displayRegistration}>
          Sign-Up
        </button>{' '}
      </nav>
    );
  }

  render() {
    return (
      <header className='header'>
        <div className='left-panel'>
          <Link to='/' className='title'>
            <img className='logo' src={yammalogored} alt='Yamma-Logo' />
            <h1>Yamma</h1>
          </Link>
          <div
            onClick={this.props.displayLanding}
            className='li-links fake-link'
            to='/about'>
            About
          </div>
        </div>
        <div>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </header>
    );
  }
}

export default Header;
