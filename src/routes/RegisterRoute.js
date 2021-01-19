import React, { Component } from 'react';
import RegistrationForm from '../../src/components/RegistrationForm/RegisterForm';

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push('/login');
  };

  render() {
    return (

        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
    );
  }
}

export default RegistrationRoute;
