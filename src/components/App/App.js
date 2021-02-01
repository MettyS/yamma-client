import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DashboardRoute from '../../routes/DashboardRoute';
import EventPageRoute from '../../routes/EventPageRoute';
import LoginRoute from '../../routes/LoginRoute';
import RegisterRoute from '../../routes/RegisterRoute';
import LandingRoute from '../../routes/LandingRoute';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import DummyData from '../../dummy-variables';

// import UserContext from '../../context/UserContext';
import YammaAbout from '../YammaAbout/YammaAbout';
// import EventContext from '../../context/EventContext';

//import './App.css'

class App extends Component {
  state = {
    articles: DummyData.articles,
    categories: DummyData.categories,
    hasError: false,
    displayLogin: false,
    displayRegistration: false,
    displayLanding: true,
  };

  toggleLanding = () => {
    this.setState({ displayLanding: !this.state.displayLanding });
  };

  toggleLogin = () => {
    this.setState({ displayLogin: !this.state.displayLogin });
  };
  toggleRegistration = () => {
    this.setState({ displayRegistration: !this.state.displayRegistration });
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
        <Header
          displayLanding={this.toggleLanding}
          displayLogin={this.toggleLogin}
          displayRegistration={this.toggleRegistration}
        />
        <main>
          <LandingRoute
            open={this.state.displayLanding}
            onClose={this.toggleLanding}
          />
          <LoginRoute
            open={this.state.displayLogin}
            onClose={this.toggleLogin}
            toggleRegistration={this.toggleRegistration}
          />
          <RegisterRoute
            open={this.state.displayRegistration}
            onClose={this.toggleRegistration}
            toggleLogin={this.toggleLogin}
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
        <Footer displayLanding={this.toggleLanding} />
      </div>
    );
  }
}

export default App;
