import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CategoryPage from '../components/CategoryPage/CategoryPage';
import { EventProvider } from './context/testeventcontext';
import categorypageFixture from './fixtures/categorypage.fixture.js';

// unable to provide props or context to the test
// alternative defeats the purpose of the test

describe('Category Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('root');
    ReactDOM.render(
      <BrowserRouter>
        <EventProvider>
          <CategoryPage {...categorypageFixture} />
        </EventProvider>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
