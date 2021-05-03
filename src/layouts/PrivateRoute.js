import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from './Header';
import SideNav from "./sidenav/SideNav";
import {Footer} from "./Footer";

const PrivateRoute = ({component: Component, auth, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated) {
          return (
            <ErrorBoundary>
              <Header/>
              <div className={'d-flex flex-column'}>
                <div id="wrapper" className="full-page-app padding-5 margin-top-150 profile-grid margin-bottom-300">
                  <SideNav/>
                  <main className="contaer" id="private-route-layout">
                    {/*<div className={'padding-5'}>*/}
                    <Component {...props} />
                    {/*</div>*/}
                  </main>
                </div>
              
              </div>
              <Footer/>
            </ErrorBoundary>
          );
        } else {
          //enable this line below to make route protected
          return <Redirect to="/login"/>;
        }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  auth: propTypes.shape({
    isAuthenticated: propTypes.bool.isRequired,
  }),
  component: propTypes.func.isRequired,
};

const mapStateToProps = ({}) => ({
  auth: {
    isAuthenticated: true
  }
});

export default connect(mapStateToProps)(PrivateRoute);
