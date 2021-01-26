import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import yammalogored from '../../images/yammalogored.PNG';
import TokenService from '../../services/token-service';
import RegistrationForm from '../RegistrationForm/RegisterForm';
import UserContext from '../../context/UserContext';

class Header extends Component {
  static contextType = UserContext;
  state = {
    open: false,
    user: null
  }


  closeMenu = () => {
    this.setState({ open: false}, () => {
      document.removeEventListener('click', this.closeMenu)
      window.location = '/'
    })
  }

  renderSignUp() {
    return(
      <RegistrationForm />
    )
  }

  handleLogoutClick = () => {
    this.context.processLogout();
    //TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div>
        <span className='user_name'>Hi, {this.context.user.username}</span>
        <nav>
          <Link onClick={this.handleLogoutClick} className='user-button' to='/login'>
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
          <button className='user-button'>Sign-Up</button>
        </Link>{' '}
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
