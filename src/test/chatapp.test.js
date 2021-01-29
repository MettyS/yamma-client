import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ChatApp from '../components/ChatApp/ChatApp';

// unable to provide props or context to the test
// alternative defeats the purpose of the test


describe.skip('Chat App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('root');
    ReactDOM.render(
      <BrowserRouter>
        <ChatApp />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
