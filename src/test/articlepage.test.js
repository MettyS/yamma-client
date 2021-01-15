import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ArticlePage from '../components/ArticlePage/ArticlePage';

describe('Article Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('root');
    ReactDOM.render(
      <BrowserRouter>
        <ArticlePage />
      </BrowserRouter>,
      div
    );
  });
});
