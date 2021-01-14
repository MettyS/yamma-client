import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RegisterForm from '../components/RegistrationForm/RegisterForm';

describe('Registration Form', () => {
  it('renders without crashing', () => {
    const div = document.createElement('root');
    ReactDOM.render(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>,
      div
    );
  });
});
