import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ArticlePanel from '../components/ArticlePanel/ArticlePanel';

describe('Article Panel', () => {
  it('renders without crashing', () => {
    const div = document.createElement('root');
    ReactDOM.render(
      <BrowserRouter>
        <ArticlePanel />
      </BrowserRouter>,
      div
    );
  });
});
