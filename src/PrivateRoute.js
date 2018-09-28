import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebaseIntegration from './firebase'; 

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        firebaseIntegration.auth().isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

  export default PrivateRoute; 