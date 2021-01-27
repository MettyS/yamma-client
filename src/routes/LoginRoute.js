import React, { Component } from 'react';
import LoginForm from '../../src/components/LoginForm/LoginForm';

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  };

  render() {
    return (

        <LoginForm onLoginSuccess={this.handleLoginSuccess} open={this.props.open} onClose={this.props.onClose} />

    );
  }
}

export default LoginRoute;
