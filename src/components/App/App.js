import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DashboardRoute from '../../routes/DashboardRoute';
import EventPageRoute from '../../routes/EventPageRoute';
//import FilterRoute from '../../routes/FilterRoute';
import LoginRoute from '../../routes/LoginRoute';
import RegisterRoute from '../../routes/RegisterRoute';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import UserContext from '../../context/UserContext';
import DummyData from '../../dummy-variables';


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


          <Route exact path={'/'} component={DashboardRoute} />
          <Route path={'/event/:event'} component={EventPageRoute} />
          <Route path={'/register'} component={RegisterRoute} />
          <Route path={'/login'} component={LoginRoute} />


          <Footer />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;

