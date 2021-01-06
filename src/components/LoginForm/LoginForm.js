import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
//import TokenService from '../../services/token-service'
import UserContext from '../../context/UserContext';


class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = {
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

    const {username, password} = event.target

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    }).then(res => {
      username.value = ' '
      password.value = ' '
      this.context.processLogin(res.authToken)
      /*TokenService.saveAuthToken(res.authToken)
      TokenService.saveUserId(res.userId)
      window.location =*/
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

          <div className="username">
            <label htmlFor="login-username">Username</label>
            <input required type="text" placeholder="Username is required" name="Username" onChange={this.handleChange} />
          </div>

          <div className="password">
            <label>Password</label>
            <input required type="password" placeholder="Password is required" name="Password" onChange={this.handleChange}/>
          </div>

          <div className="login-button">
            <button type="submit">Login</button>
          </div>

        </form>
      </div>
    )
  }
}

export default LoginForm;
