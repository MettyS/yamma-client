import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import yammalogored from '../../images/yammalogored.PNG';
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
            <Link to='/aboutus'>About</Link>
          </li>
          <li className='bars'>|</li>
          <li>
            <Link to='/important'>Important Notice</Link>
          </li>
          <li className='bars'>|</li>
          <li>
            <Link to='/contactus'>Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    return (
      <header className='header'>
        <div>
          <Link to='/' className='title'>
            <img className='logo' src={yammalogored} alt='Yamma-Logo' />
            <h1>Yamma</h1>
          </Link>
        </div>

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
