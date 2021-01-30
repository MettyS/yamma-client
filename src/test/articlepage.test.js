import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ArticlePage from '../components/ArticlePage/ArticlePage';
import { UserProvider } from './context/testusercontext';
import paramsFixture from './fixtures/params.fixture';

// unable to provide props or context to the test
// alternative defeats the purpose of the test


describe('Article Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('root');
    ReactDOM.render(
      <BrowserRouter>
        <UserProvider>
          <ArticlePage {...paramsFixture}/>
        </UserProvider>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
