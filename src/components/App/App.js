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
import YammaAbout from '../YammaAbout/YammaAbout';
// import EventContext from '../../context/EventContext';

//import './App.css'

class App extends Component {
  state = {
    articles: DummyData.articles,
    categories: DummyData.categories,
    hasError: false,
    logIn: false,
    isSigningUp: false,
  };

  toggleLogIn = () => {
    this.setState({ logIn: !this.state.logIn });
  };
  toggleSignUp = () => {
    this.setState({ isSigningUp: !this.state.isSigningUp });
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;

    return (
      <div className='App'>
        {hasError && <p>There was an error! Oh no!</p>}
        <Header logIn={this.toggleLogIn} signUp={this.toggleSignUp} />
        <main>
          <LoginRoute open={this.state.logIn} onClose={this.toggleLogIn} />
          <RegisterRoute
            open={this.state.isSigningUp}
            onClose={this.toggleSignUp}
          />

          {/* <Route exact path={'/'} >
            <EventContext.Consumer>
              { val => <DashboardRoute /> }
            </EventContext.Consumer>
            </Route> */}

          <Route exact path={'/'} component={DashboardRoute} />
          <Route path={'/event/:event'} component={EventPageRoute} />
          <Route path={'/about'} component={YammaAbout} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
