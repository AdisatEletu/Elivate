import React from 'react';
import { Route } from 'react-router-dom';
import propTypes from 'prop-types';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from './Header';
import {Footer} from "./Footer";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <ErrorBoundary>
            <Header />
            {/* <SideNav /> */}
            <main className="container-fluid align-self-stretch container-padding margin-bottom-300 margin-top-100" id="public-route-layout">
              <Component {...props} />
            </main>
            <Footer/>
          </ErrorBoundary>
        );
      }}
    />
  );
};

PublicRoute.propTypes = {
  component: propTypes.object.isRequired,
};

export default PublicRoute;
