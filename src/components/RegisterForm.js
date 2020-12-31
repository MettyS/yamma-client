import React, { Component } from 'react';



class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      //PUT THINGS HERE
    };
  }

  handleLoginSuccess = user => {
    window.location = '/dashboard'
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password, confirmPassword } = event.target;
    this.setState({ error: null })

    console.log(username, email, password, confirmPassword);
    /*AuthApiService.postUser({
      email: registerUsername.value,
      password: registerPassword.value,
    })

      .then(response => {
        registerUsername.value = ''
        registerPassword.value = ''
        TokenService.saveAuthToken(response.authToken)
        TokenService.saveUserId(response.id)
        window.location = '/homePage'
      })

      .catch(res => {
        this.setState({ error: res.error })
      })*/
  }

  // validateEmail = (email) => {
  //   const restrictions = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   if(!restrictions.test(email))
  //     return 'invalid email';
  //   return 'valid';
  // }

  // validateNickname = (username) => {
  //   const restriction1 = /\W/ 
  //   const restriction2 = /\s/

  //   let problems = username.length < 5 ? 'Username must be at least 5 characters. ' : '';
  //   problems += username.match(restriction1) || username.match(restriction2) ? '\nUsername cannot contain special characters or spaces. ' : '' ;
  //   return problems;
  // };

  // validatePassword = (pass) => {
  //   const patty = /[!@#$%&*()_+=|<>?{}[\]~-]/;
  //   const specialExists = pass.match(patty);

  //   const pat = /[A-Z]/;
  //   const capitalExists = pass.match(pat);

  //   let problems = pass.length < 8 ? 'Password must be at least 8 characters. ' : '';
  //   problems += specialExists && capitalExists ? '': '\nPassword must have at least 1 capital and 1 special character. ';

  //   return problems;
  // }


    render() {
        return (
            <div className='registerform-container'>
              Implement me!
            </div>
        )
    }

}

export default RegisterForm;