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
      <section className='dashboard-container'>
        {this.renderArticlePanel()}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
      </section>
    );
  }
}

export default DashBoard;
