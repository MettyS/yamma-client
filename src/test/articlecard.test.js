import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import articlecardFixture from './fixtures/articlecard.fixture';

describe('Article Card', () => {
  it('renders without crashing', () => {
    const div = document.createElement('root');
    ReactDOM.render(
      <BrowserRouter>
        <ArticleCard {...articlecardFixture} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
