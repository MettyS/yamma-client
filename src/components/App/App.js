import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DashboardRoute from '../../routes/DashboardRoute';
import EventPageRoute from '../../routes/EventPageRoute';
import LoginRoute from '../../routes/LoginRoute';
import RegisterRoute from '../../routes/RegisterRoute';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import DummyData from '../../dummy-variables';

import UserContext from '../../context/UserContext';
// import EventContext from '../../context/EventContext';

//import './App.css'


class App extends Component {
  state = {
    articles: DummyData.articles,
    categories: DummyData.categories,
    hasError: false
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const value = {
      articles: this.state.articles,
      categories: this.state.categories,
    }
    return (
      <UserContext.Provider value={value}>
        <div className='App'>
          {hasError && <p>There was an error! Oh no!</p>}
          <Header />

          
          {/* <Route exact path={'/'} >
            <EventContext.Consumer>
              { val => <DashboardRoute /> }
            </EventContext.Consumer>
            </Route> */}

          <Route exact path={'/'} component={DashboardRoute} />
          <Route path={'/event/:event'} component={EventPageRoute} />
          <Route path={'/register'}>
            <DashboardRoute />
            <RegisterRoute /> 
          </Route> 
          <Route path={'/login'}>
            <DashboardRoute />
            <LoginRoute />
          </Route>


          <Footer />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;

