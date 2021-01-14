import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext';
import './RegisterForm.css'
import '../../images/emergency-response-symbols.jpg'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = {
    email: ' ',
    username: ' ',
    password: ' ',
    error: null
  }

  static contextType = UserContext

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const {email, username, password} = event.target

    AuthApiService.postUser({
      email: email.value,
      username: username.value,
      password: password.value
    }).then(res => {
      email.value = ' '
      username.value = ' '
      password.value = ' '
      this.context.onRegistrationSuccess()
    }).catch(res => {
      this.setState({ error: res.error })
    })
  }

  render() {
    const { error } = this.state
    return(
      <div class='emergency-symbols'>
        <form className='registration-form' onSubmit={this.handleSubmit}>

          <div role='alert'>
            {error && <p>{error}</p>}
          </div>

          <div>
            <label htmlFor="reg-email"  className='form-text'>Email</label>
            <input required type="text" placeholder="Enter your email here" name="Email" onChange={this.handleChange}/>
          </div>

          <div>
            <label htmlFor="reg-username" className='form-text'>Username</label>
            <input required type="text" placeholder="Enter username here" name="Username" onChange={this.handleChange}/>
          </div>

          <div>
            <label htmlFor="reg-password"  className='form-text'>Password</label>
            <input required type="password" placeholder="Enter password here" name="Password" onChange={this.handleChange}/>
          </div>

          <div >
            <button type="submit" className="sign-up-button">Sign Up</button>
          </div>

          <Link to='/login' className='already-have-acct'>Already have an account?</Link>
          
        </form>
      </div>
    )
  }

  
}

export default RegistrationForm;
