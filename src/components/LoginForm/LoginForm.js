import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Link } from 'react-router-dom';
//import TokenService from '../../services/token-service'
import UserContext from '../../context/UserContext';
import Modal from '../Modal/Modal';
import './LoginForm.css';


class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = {
    username: ' ',
    password: ' ',
    error: null,
    open: true
  }

  static contextType = UserContext

  // handleCloseModal = () => {
  //   console.log('Close pop-up')
  //   this.setState({open: false})
  //   window.location = "/"
  // }

  closeMenu = () => {
    this.setState({ open: false}, () => {
      document.removeEventListener('click', this.closeMenu)
    })
  }

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
      <Modal open={this.state.open} onClose={this.closeMenu}>
      <div>
        <form className='log-in-form' onSubmit={this.handleSubmit}>

          <div role='alert'>
            {error && <p>{error}</p>}
          </div>

          <div className="username">
            <label htmlFor="login-username" className='form-text'>Username</label>
            <input required type="text" placeholder="Username is required" name="Username" onChange={this.handleChange} />
          </div>

          <div className="password">
          <label htmlFor="reg-password"  className='form-text'>Password</label>
          <input required type="password" placeholder="Password is required" name="Password" onChange={this.handleChange}/>
          </div>

          <div >
            <button className="login-button" type="submit">Login</button>
          </div>
          <Link to='/register' className='need-an-acct'>Don't have an account yet?</Link>
        </form>
      </div>
      </Modal>
    )
  }
}

export default LoginForm;
