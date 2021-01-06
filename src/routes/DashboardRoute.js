import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticlePanel from '../components/ArticlePanel/ArticlePanel'
import DummyData from '../dummy-variables'
import UserContext from '../context/UserContext'
//import CategoryPanel from  '../components/CategoryPanel/CategoryPanel'

class DashBoard extends Component {
  state = {
    articles: DummyData.articles,
    categories: DummyData.categories
  }

  renderArticlePanel() {
    console.log(this.state)
    return (
      <div>
        {['/', '/article/:id'].map(path => (
          <Route
            key={path}
            path={path}
            component={ArticlePanel} />
        ))}
      </div>
    )
  }

  /*renderCategoryPanel() {
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
  }*/

  render() {
    const value = {
      articles: this.state.articles,
      //categories: this.state.categories
    }
    console.log("value: ", value)

    return (
      <UserContext.Provider value={value}>
        <div className='dashboard-container'>
          {this.renderArticlePanel()}
          {/*this.renderCategoryPanel()*/}
          <p>LOREM IPSUM</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </UserContext.Provider>
    );
  }
}

export default DashBoard;
