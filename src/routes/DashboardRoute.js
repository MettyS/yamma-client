import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ArticlePanel from '../components/ArticlePanel/ArticlePanel'
import dummy from '../dummy-variables'

class DashBoard extends Component {
  state = {
    articles: [],
    categories: []
  };

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummy), 600);
  }

  renderArticlePanel(){
    const articles = this.state;
    return(
      <div>
        {['/', '/article/:id'].map(path => (
          <Route exact 
            key={path} 
            path={path} 
            render={routeProps => {
              <ArticlePanel articles={articles} {...routeProps} />
            }} />
          ))}
      </div>
    )
  }

  render() {
    return (
      <div className='dashboard-container'>
        {this.renderArticlePanel()}
        <p>LOREM IPSUM</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
}

export default DashBoard;
