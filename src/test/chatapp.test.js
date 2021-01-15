import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ChatApp from '../components/ChatApp/ChatApp';

describe('Chat App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('root');
    ReactDOM.render(
      <BrowserRouter>
        <ChatApp />
      </BrowserRouter>,
      div
    );
  });
});
