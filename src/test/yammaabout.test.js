import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import YammaAbout from '../components/YammaAbout/YammaAbout';
import RegisterForm from '../components/YammaAbout/YammaAbout';

describe('Yamma about page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('root');
    ReactDOM.render(
      <BrowserRouter>
        <YammaAbout />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
