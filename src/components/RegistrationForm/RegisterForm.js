import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext';


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
      <div>
        <form onSubmit={this.handleSubmit}>

          <div role='alert'>
            {error && <p>{error}</p>}
          </div>

          <div>
            <label htmlFor="reg-email">Email</label>
            <input required type="text" placeholder="Enter your email here" name="Email" onChange={this.handleChange}/>
          </div>

          <div>
            <label htmlFor="reg-username">Username</label>
            <input required type="text" placeholder="Enter username here" name="Username" onChange={this.handleChange}/>
          </div>

          <div>
            <label htmlFor="reg-password">Password</label>
            <input required type="password" placeholder="Enter password here" name="Password" onChange={this.handleChange}/>
          </div>

          <div className="signup-button">
            <button type="submit">Sign Up</button>
            <button type="submit">Cancel</button>
          </div>

          <Link to='/login'>Already have an account?</Link>

        </form>
      </div>
    )
  }

  
}

export default RegistrationForm;
