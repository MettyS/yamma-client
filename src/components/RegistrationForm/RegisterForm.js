import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Link, withRouter } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import validate, {
  ValidationError,
} from '../../services/validate-form-service';
import '../LoginForm/LoginForm.css';
import '../../images/emergency-response-symbols.jpg';
import Modal from '../Modal/Modal';

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = {
    email: '',
    username: '',
    password: '',
    passwordRepeat: '',
    errors: {},
    open: true,
  };

  static contextType = UserContext;

  //handleCloseModal = this.handleCloseModal.bind(this);

  // handleCloseModal = () => {
  //   console.log('Close pop-up')
  //   this.setState({open: false})
  //   window.location = "/"
  // }

  closeMenu = (e) => {
    e.preventDefault();
    if (e.target.className !== 'overlay') {
      return;
    }
    this.setState({ open: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
    this.props.history.push('/');
  };

  handleChange = (event) => {
    console.log('handle change');
    const { name, value } = event.target;
    let newErrors = Object.assign({}, this.state.errors);

    const formError = this.checkIfValid(name, value);
    if (formError && !newErrors[name]) {
      newErrors[name] = formError;
    } else if (!formError && newErrors[name]) {
      delete newErrors[name];
    }

    this.setState({
      [name]: value,
      errors: { ...newErrors },
    });
  };

  checkIfValid = (field, value) => {
    try {
      switch (field) {
        case 'username':
          validate.username(value);
          break;
        case 'email':
          validate.email(value);
          break;
        case 'password':
          validate.password(value);
          break;
        case 'passwordRepeat':
          validate.passwordMatch(this.state.password, value);
          break;
        default:
          console.log('sshouldnt reach this line');
      }
    } catch (er) {
      if (er instanceof ValidationError) return er.message;
    }
  };

  handleSubmit = (event) => {
    console.log('handle submit');
    event.preventDefault();
    const { email, username, password } = event.target;

    console.log(email, username, password);
    return;

    AuthApiService.postUser({
      email: email.value,
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        email.value = ' ';
        username.value = ' ';
        password.value = ' ';
        this.context.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  createErrors = () => {
    const errorEntries = Object.entries(this.state.errors);
    const firstTwoErrors =
      errorEntries.length > 1
        ? errorEntries.slice(0, 2)
        : errorEntries.slice(0);

    return firstTwoErrors.map((message, i) => {
      return <p className='form-error' key={i}>{message}</p>;
    });
  };

  sayHello = () => {
    console.log('hello!');
  }

  render() {
    const errors = this.createErrors();

    return (
      <Modal open={this.state.open} onClose={this.closeMenu}>
        <form className='registration-form' onSubmit={this.sayHello}>
          <div className='form-errors' role='alert'>
            {errors}
          </div>

          <div className='email'>
            <label htmlFor='reg-email' className='form-text'>
              Email
            </label>
            <input
              required
              type='text'
              id='reg-email'
              placeholder='Enter your email here'
              name='email'
              onChange={this.handleChange}
            />
          </div>

          <div className='username'>
            <label htmlFor='reg-username' className='form-text'>
              Username
            </label>
            <input
              required
              type='text'
              id='reg-username'
              placeholder='Enter username here'
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
              type='password'
              id='reg-password'
              placeholder='Enter password here'
              name='password'
              onChange={this.handleChange}
            />
          </div>

          <div className='password'>
            <label htmlFor='reg-password-repeat' className='form-text'>
              Repeat Password
            </label>
            <input
              required
              type='password'
              id='reg-password-repeat'
              placeholder='Repeat password'
              name='passwordRepeat'
              onChange={this.handleChange}
            />
          </div>

          <button type='submit' className='login-button'>
            Sign Up
          </button>

          <Link to='/login' className='need-an-acct'>
            Already have an account?
          </Link>
        </form>
      </Modal>
    );
  }
}

export default withRouter(RegistrationForm);
