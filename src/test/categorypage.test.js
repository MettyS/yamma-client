import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CategoryPage from '../components/CategoryPage/CategoryPage';

describe('Category Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('root');
    ReactDOM.render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>,
      div
    );
  });
});
