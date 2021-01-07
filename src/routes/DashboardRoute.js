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
        {['/', '/event/article/:id'].map(path => (
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
        {['/', '/event/:category/:id'].map(path => (
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
          {this.renderArticlePanel()}
          {this.renderCategoryList()}
        </div>

    );
  }
}

export default DashBoard;
