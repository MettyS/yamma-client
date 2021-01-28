import React, { Component } from 'react';
import RegistrationForm from '../../src/components/RegistrationForm/RegisterForm';

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
    open: false,
  };

  render() {
    return (

        <RegistrationForm
          open={this.props.open}
          onClose={this.props.onClose}
        />
    );
  }
}

export default RegistrationRoute;
