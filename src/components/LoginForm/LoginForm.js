import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Link, withRouter } from 'react-router-dom';
import Modal from '../Modal/Modal';
import './LoginForm.css';
import UserContext from '../../context/UserContext';

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

  static contextType = UserContext;

  closeMenu = (e) => {
    e.preventDefault();
    const targetClasses = Object.values(e.target.classList);
    if (
      !targetClasses.includes('overlay') &&
      !targetClasses.includes('close-button')
    )
      return;
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
        this.context.processLogin(res.authToken);
        this.props.onClose();
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
        <div className='modal-content'>
          <button className='close-button' onClick={this.closeMenu}>
            Close
          </button>

          <form className='log-in-form' onSubmit={this.handleSubmit}>
            <div className={`alert-info ${error ? '' : 'hidden'}`} role='alert'>
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
            <div className='bottom-panel'>
              <p>Sample Account:</p>
              <p>Username | BobbyJoe</p>
              <p>Password | My123!@#</p>
            </div>
            <div className='need-an-acct fake-a-tag' onClick={() => {
              this.props.onClose();
              this.props.displayRegistration();
            }}>
              Don't have an account yet?
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default withRouter(LoginForm);
