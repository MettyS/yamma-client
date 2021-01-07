import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticlePanel from '../components/ArticlePanel/ArticlePanel'
import UserContext from '../context/UserContext'
import CategoryList from  '../components/CategoryList/CategoryList'


class DashBoard extends Component {
  static contextType = UserContext

  renderArticlePanel() {
    return (
      <div>
        {['/', '/event/article/:title'].map(path => (
          <Route
            key={path}
            path={path}
            component={ArticlePanel} />
        ))}
      </div>
    )
  }

  renderCategoryList() {
    return(
      <div>
        {['/', '/event/category/:name'].map(path => (
          <Route
            key={path}
            path={path}
            component={CategoryList} />
        ))}
      </div>
    )
  }

  render() {

    return (
      
        <div className='dashboard-container'>
          <h1 className='hero-title'>US News</h1>
          {this.renderArticlePanel()}
          {this.renderCategoryList()}
        </div>

    );
  }
}

export default DashBoard;
