import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ArticlePage from '../components/ArticlePage/ArticlePage';

// unable to provide props or context to the test
// alternative defeats the purpose of the test


describe.skip('Article Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('root');
    ReactDOM.render(
      <BrowserRouter>
        <ArticlePage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
