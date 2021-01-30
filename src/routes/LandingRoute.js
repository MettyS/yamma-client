import React, { Component } from 'react';
import YammaAbout from '../../src/components/YammaAbout/YammaAbout';

class LandingRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    console.log('IS THIS EVER CALLED')
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  };

  render() {
    return (
      <YammaAbout
        open={this.props.open}
        onClose={this.props.onClose}
      />
    );
  }
}

export default LandingRoute;
