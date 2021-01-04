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
      <section className='RegistrationRoute'>
        <div className='text'>
          <h2>Sign up</h2>
        </div>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute;
