//TODO UPDATE THIS

import React, { Component } from 'react';
// import AuthApiService from '../services/auth-api-service';
// import TokenService from '../services/token-service';
// import IdleService from '../services/idle-service';

const UserContext = React.createContext({
  user: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
});

UserContext.displayName = 'UserContext';

export default UserContext;

export class UserProvider extends Component {
  constructor(props) {
    super(props);
    const state = { user: {id: 2, username: "BobbyJoe"}, error: null };

    this.state = state;
  }

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setUser = (user) => {
    this.setState({ user });
  };

  processLogin = (authToken) => {
    console.log('process login');
    // TokenService.saveAuthToken(authToken);
    // const jwtPayload = TokenService.parseAuthToken();
    // this.setUser({
    //   id: jwtPayload.user_id,
    //   username: jwtPayload.sub,
    // });

    // //IdleService.registerIdleTimerResets();
    // TokenService.queueCallbackBeforeExpiry(() => {
    //   this.fetchRefreshToken();
    // });
  };

  processLogout = () => {
    console.log('process logout');
    // TokenService.clearAuthToken();
    // TokenService.clearCallbackBeforeExpiry();
    // IdleService.unRegisterIdleResets();
    // this.setUser(null);
  };

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
    };
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
