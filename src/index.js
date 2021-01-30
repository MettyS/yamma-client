import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from '../src/components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { EventProvider } from './context/EventContext';
// import { AllContextProvider } from './context/AllContext';

ReactDOM.render(
  <BrowserRouter>
    <EventProvider>
      <UserProvider>
        {/* <AllContextProvider> */}
        <App />
        {/* </AllContextProvider> */}
      </UserProvider>
    </EventProvider>
  </BrowserRouter>,

  document.getElementById('root')
);
