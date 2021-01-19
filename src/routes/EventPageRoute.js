import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ArticlePage from '../components/ArticlePage/ArticlePage';
import UserContext from '../context/UserContext';
import CategoryPage from '../components/CategoryPage/CategoryPage'
//import ChatPanel from '../components/ArticlePage/ChatPanel';
//import RelatedArticleList from '../components/RelatedArticleList';

class EventPage extends Component {
  //static contextType = UserContext

  renderArticlePage() {
    return (
          <Route exact path='/event/article/:eventId/:title' component={ArticlePage} />
    )
  }

  renderCategoryPage() {
    return (
        <Route exact path='/event/category/:name' component={CategoryPage} />
    )
  }


  render() {
    return (
      <div className='eventpage-container'>
        {this.renderArticlePage()}
        {this.renderCategoryPage()}
      </div>
    );
  }
}

export default EventPage;
