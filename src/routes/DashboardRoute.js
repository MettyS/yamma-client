import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticlePage from '../components/ArticlePage/ArticlePage'
import ArticlePanel from '../components/ArticlePanel/ArticlePanel'
import DummyData from '../dummy-variables'
import UserContext from '../context/UserContext'
import CategoryPanel from  '../components/CategoryPanel/CategoryPanel'

class DashBoard extends Component {
  state = {
    articles: DummyData.articles,
    categories: DummyData.categories
  }

  renderArticlePanel() {
    return (
      <div>
        {['/', '/article/:id'].map(path => (
          <Route
            key={path}
            path={path}
            component={ArticlePanel} />
        ))}

        <Route path='/article/:id' component={ArticlePage} />
      </div>
    )
  }

  renderCategoryPanel() {
    return(
      <div>
        {['/', '/category/:id'].map(path => (
          <Route
            key={path}
            path={path}
            component={CategoryPanel} />
        ))}
      </div>
    )
  }

  render() {
    const value = {
      articles: this.state.articles,
      categories: this.state.categories
    }

    return (
      <UserContext.Provider value={value}>
        <div className='dashboard-container'>
          {this.renderArticlePanel()}
          {this.renderCategoryPanel()}
        </div>
      </UserContext.Provider>
    );
  }
}

export default DashBoard;
