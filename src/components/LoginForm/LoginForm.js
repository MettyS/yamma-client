import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Link, withRouter } from 'react-router-dom';
//import TokenService from '../../services/token-service'
//import UserContext from '../../context/UserContext';
import Modal from '../Modal/Modal';
import './LoginForm.css';
import AllContext from '../../context/AllContext';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = {
    username: '',
    password: '',
    error: null,
    open: false,
  };

  static contextType = AllContext;

  closeMenu = (e) => {
    e.preventDefault();
    if (!Object.values(e.target.classList).includes('overlay')) return;
    this.props.onClose();

  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = event.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = '';
        password.value = '';
        console.log('processing login now : )');
        console.log('context: ', this.context);
        this.context.userContext.processLogin(res.authToken);
        /*TokenService.saveAuthToken(res.authToken)
      TokenService.saveUserId(res.userId)*/
      })
      .then((res) => {
        window.location = '/';
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    const { open } = this.props;
    return (
      <Modal open={open} onClose={this.closeMenu}>
        <div>
          <form className='log-in-form' onSubmit={this.handleSubmit}>
            <div className='alert-info' role='alert'>
              {error && <p>{error}</p>}
            </div>

            <div className='username'>
              <label htmlFor='login-username' className='form-text'>
                Username
              </label>
              <input
                required
                id='login-username'
                type='text'
                placeholder='Username is required'
                name='username'
                onChange={this.handleChange}
              />
            </div>

            <div className='password'>
              <label htmlFor='reg-password' className='form-text'>
                Password
              </label>
              <input
                required
                id='reg-password'
                type='password'
                placeholder='Password is required'
                name='password'
                onChange={this.handleChange}
              />
            </div>

            <div>
              <button className='submit-button' type='submit'>
                Login
              </button>
            </div>
            <Link to='/register' className='need-an-acct'>
              Don't have an account yet?
            </Link>
          </form>
        </div>
      </Modal>
    );
  }
}

export default withRouter(LoginForm);
