import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import YammaLogo from '../../images/YammaLogo.png';
import TokenService from '../../services/token-service';

class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div>
        <span className='user_name'>Hi, {this.context.user.name}</span>
        <nav>
          <Link onClick={this.handleLogoutClick} to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav className='login-links'>
        <Link to='/login'>
          <button className='user-button'>Login</button>
        </Link>{' '}
        <br></br>
        <Link to='/register'>
          <button className='user-button'>Sign up</button>
        </Link>
      </nav>
    );
  }

  renderHomeLink() {
    return (
      <nav>
        <ul className='home-links'>
          <li>
            <Link to='/aboutus'>About Us</Link>
          </li>
          <li>
            <Link to='/important'>Important Notice</Link>
          </li>
          <li>
            <Link to='/contactus'>Contact Us</Link>
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    return (
      <header className='header'>
        <img className='logo' src={YammaLogo} alt='Yamma-Logo' />
        <h1>
          <Link to='/' className='title'>
            <h1>Yamma</h1>
          </Link>
        </h1>

        <div>{this.renderHomeLink()}</div>

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
