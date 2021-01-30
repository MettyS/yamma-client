import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ArticlePage from '../components/ArticlePage/ArticlePage';
import CategoryPage from '../components/CategoryPage/CategoryPage';

class EventPage extends Component {
  renderArticlePage() {
    return (
      <Route
        exact
        path='/event/article/:eventId/:title'
        component={ArticlePage}
      />
    );
  }

  renderCategoryPage() {
    return (
      <Route exact path='/event/category/:category' component={CategoryPage} />
    );
  }

  render() {
    return (
      <div className='eventpage-container app-body'>
        {this.renderArticlePage()}
        {this.renderCategoryPage()}
      </div>
    );
  }
}

export default EventPage;
