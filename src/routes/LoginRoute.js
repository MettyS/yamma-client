import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

import Header from '../components/Header/Header';

class Login extends Component {
    render() {
        return (
            <div className='login-container'>
              <Header />
            </div>
        )
    }

}

export default Login;