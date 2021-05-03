import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {PageLoader} from '../components/Loaders';
import PrivateRoute from '../layouts/PrivateRoute';
import AuthRoute from '../layouts/AuthRoute';
import PublicRoute from '../layouts/PublicRoute';
import Error404 from '../components/Error404';
import {AlertWrapper} from '../components/alert/AlertComponent';

// create Loadable pages
const Home = lazy(() => import('../pages/home/Home'));
const Login = lazy(() => import('../pages/auth/login/Login'));
const About = lazy(() => import('../pages/about/About'));
const Signup = lazy(() => import('../pages/auth/signup/Signup'));
const Verification = lazy(() => import('../pages/auth/signup/Verification'));
const Setup = lazy(() => import('../pages/auth/signup/Setup'));
const Raffles = lazy(() => import('../pages/raffles/Raffles'));
const RaffleDetails = lazy(() => import('../pages/raffles/RaffleDetails'));
const Watchlist= lazy(() => import('../pages/Watchlist'));
const Dashboard= lazy(() => import('../pages/dashboard/Dashboard'));
const Notification= lazy(() => import('../pages/dashboard/notification/Notification'));
const Ticket= lazy(() => import('../pages/dashboard/ticket/Ticket'));
const History= lazy(() => import('../pages/dashboard/history/History'));

const Routes = () => (
  // eslint-disable-next-line no-undef
  <Router basename={process.env.PUBLIC_URL}>
    <Suspense fallback={<PageLoader/>}>
      <AlertWrapper ref={alertRef => (window.alertRef = alertRef)}/>
      <Switch>
        {/* can't access them when you are logged in */}
        {/*<AuthRoute exact path='/' component={Home}/>*/}
        <AuthRoute exact path='/login' component={Login}/>
        <AuthRoute exact path='/signup' component={Signup}/>
        <AuthRoute exact path='/setup' component={Setup}/>
        <AuthRoute path='/verification' component={Verification}/>
        
        {/* can only access them when you are logged in */}
        {/* public route: accessible to both !!authenticated users */}
        <PublicRoute exact path='/about' component={About}/>
  
        <PublicRoute exact path='/' component={Home}/>
        <PublicRoute exact path='/raffles' component={Raffles}/>
        <PublicRoute path='/raffles/:id/details' component={RaffleDetails}/>
        <PublicRoute path='/raffles/:id/watchlist' component={Watchlist}/>
        
        <PrivateRoute exact path={'/dashboard'} component={Dashboard}/>
        <PrivateRoute exact path={'/notifications'} component={Notification}/>
        <PrivateRoute exact path={'/tickets'} component={Ticket}/>
        <PrivateRoute exact path={'/history'} component={History}/>
  
  
        {/* catch all invalid urls */}
        <Route component={Error404}/>
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
