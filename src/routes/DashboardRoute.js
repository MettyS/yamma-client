import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ArticlePanel from '../components/ArticlePanel/ArticlePanel';
//import { UserProvider } from '../context/UserContext'
//import EventContext from '../context/EventContext'
import CategoryList from '../components/CategoryList/CategoryList';
import CategoryPage from '../components/CategoryPage/CategoryPage';

class DashBoard extends Component {
  renderArticlePanel() {
    console.log('dashboard re-render!');
    return (
      
        <div>
          {['/', '/event/article/:eventId/:title'].map(path => (

              <Route key={path} path={path} render={() => (
                <ArticlePanel />
                // <EventContext.Consumer>
                //   { val => <ArticlePanel /> }
                // </EventContext.Consumer>
              )}/> 
            ) )
          }
                  
            
          

        </div>
    )
  }

  renderCategoryList() {
    return(
      <div>
        {['/', '/event/article/:title'].map((path) => (
          <Route
            key={path}
            path={path}
            render={() => (
              <ArticlePanel />
              // <EventContext.Consumer>
              //   { val => <ArticlePanel /> }
              // </EventContext.Consumer>
            )}
          />
        ))}
      </div>
    );
  }

  renderCategoryList() {
    return (
      <div>
        {['/', '/event/category/:name'].map((path) => (
          <Route key={path} path={path} component={CategoryList} />
        ))}
      </div>
    );
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
