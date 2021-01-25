import React, { Component, createRef } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Link, withRouter } from 'react-router-dom';
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

  constructor(props) {
    super(props);
    this.submitRef = createRef();
  }

  //handleCloseModal = this.handleCloseModal.bind(this);

  // handleCloseModal = () => {
  //   console.log('Close pop-up')
  //   this.setState({open: false})
  //   window.location = "/"
  // }


  closeMenu = (e) => {
    e.preventDefault();

    this.setState({ open: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
    this.props.history.push('/');
  };

  handleChange = (event) => {
    
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
          console.log('shouldnt reach this line');
      }
    } catch (er) {
      if (er instanceof ValidationError) return er.message;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    const { email, username, password, passwordRepeat } = event.target;

    AuthApiService.postUser({
      email: email.value,
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        email.value = '';
        username.value = '';
        password.value = '';
        passwordRepeat.value = '';


        console.log(res);
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        console.log('it is sad!!')
        const erMessage = res.error ? res.error : res.message

        this.setState({ errors: {...this.state.errors, warning: erMessage } });
      });
  };

  createErrors = () => {
    const errorEntries = Object.entries(this.state.errors);
    const firstTwoErrors =
      errorEntries.length > 1
        ? errorEntries.slice(0, 2)
        : errorEntries.slice(0);

    return firstTwoErrors.map((message, i) => {
      return <p className='form-error' key={i}>{message[1]}</p>;
    });
  };


  render() {
    const errors = this.createErrors();

    return (
      <Modal open={this.state.open} onClose={this.closeMenu}>
        <form className='registration-form' onSubmit={this.handleSubmit}>
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

          <button type='submit' className='submit-button'>
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
