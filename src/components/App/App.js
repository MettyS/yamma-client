import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardRoute from '../../routes/DashboardRoute';
import EventPageRoute from '../../routes/EventPageRoute';
//import FilterRoute from '../../routes/FilterRoute';
import LoginRoute from '../../routes/LoginRoute';
import RegisterRoute from '../../routes/RegisterRoute';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <div className='App'>
        <Header />
        <main>
          {hasError && <p>There was an error! Oh no!</p>}

          <Switch>
            <Route exact path={'/'} component={DashboardRoute} />
            <Route path={'/event/:event_id'} component={EventPageRoute} />
            <Route path={'/register'} component={RegisterRoute} />
            <Route path={'/login'} component={LoginRoute} />
          </Switch>

          {/*for footer tester-->*/}
          
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
