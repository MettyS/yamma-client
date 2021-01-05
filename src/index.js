import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from '../src/components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,

  document.getElementById('root')
);
