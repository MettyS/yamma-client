import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardRoute from "../routes/DashboardRoute";
import EventPageRoute from "../routes/EventPageRoute";
import FilterRoute from "../routes/FilterRoute";
import LoginRoute from "../routes/LoginRoute";
import RegisterRoute from "../routes/RegisterRoute";
import Footer from "../components/Footer/Footer";

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    return (
      <div className='App'>
        <main>
          {hasError && (
            <p>There was an error! Oh no!</p>
          )}

          <Switch>
            <Route
              exact
              path={'/'}
              component={DashboardRoute}
            />
            <Route 
              path={'/event/:event_id'}
              component={EventPageRoute}
            />
            <Route 
              path={'/register'}
              component={RegisterRoute}
            />
            <Route
              path={'/login'}
              component={LoginRoute}
            />

          </Switch>

          {/*for footer tester-->*/}
          <br></br>
          <br></br> 
          <br></br> 
          <br></br> 
          <br></br> 
          <br></br>
          <br></br> 
          <br></br> 
          <br></br> 
          <br></br> 
          <br></br>
          <br></br> 
          <br></br> 
          <br></br> 
          <br></br> 
          <br></br>
          <br></br> 
          <br></br> 
          <br></br> 
          <br></br> 
          <br></br> 
          <br></br> 
          <br></br>
          <br></br> 
          <br></br> 
          <br></br>

        </main>
        <Footer />
      </div>
    )
}

}

export default App;
