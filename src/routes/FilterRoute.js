import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UserContext from '../context/UserContext';

function FilterRoute({ component, ...props }) {
  return (
    <Route
      {...props}
      render={(componentProps) => (
        <UserContext.Consumer>
          <Component {...componentProps} />
        </UserContext.Consumer>
      )}
    />
  );
}

export default FilterRoute;
