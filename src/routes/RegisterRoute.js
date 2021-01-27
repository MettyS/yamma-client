import React, { Component } from 'react';
import RegistrationForm from '../../src/components/RegistrationForm/RegisterForm';

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
    open: false,
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push('/login');
  };

  render() {
    return (

        <RegistrationForm
          open={this.props.open}
          onClose={this.props.onClose}
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
    );
  }
}

export default RegistrationRoute;
