import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ChatApp from '../components/ChatApp/ChatApp';
import { UserProvider } from './context/testusercontext'
import chatappFixture from './fixtures/chatapp.fixture'
// unable to provide props or context to the test
// alternative defeats the purpose of the test


describe('Chat App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('root');
    ReactDOM.render(
      <BrowserRouter>
        <UserProvider>
          <ChatApp {...chatappFixture}/>
        </UserProvider>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
