import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageLoader } from "../components/Loaders";
import PrivateRoute from "../layouts/PrivateRoute";
import AuthRoute from "../layouts/AuthRoute";
import PublicRoute from "../layouts/PublicRoute";
import Error404 from "../components/Error404";
import { AlertWrapper } from "../components/alert/AlertComponent";

// create Loadable pages
const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import("../pages/auth/login/Login"));
const About = lazy(() => import("../pages/about/About"));
const Signup = lazy(() => import("../pages/auth/signup/Signup"));
const Verification = lazy(() => import("../pages/auth/signup/Verification"));
const Setup = lazy(() => import("../pages/auth/signup/Setup"));
const Raffles = lazy(() => import("../pages/raffles/Raffles"));
const RaffleDetails = lazy(() => import("../pages/raffles/RaffleDetails"));
const Watchlist = lazy(() => import("../pages/watchlist/Watchlist"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Notification = lazy(() =>
  import("../pages/dashboard/notification/Notification")
);
const Ticket = lazy(() => import("../pages/dashboard/ticket/Ticket"));
const Response = lazy(() => import("../pages/dashboard/ticket/Response"));
const History = lazy(() => import("../pages/dashboard/history/History"));
const Referrals = lazy(() => import("../pages/dashboard/referrals/Referrals"));
const Profile = lazy(() => import("../pages/dashboard/profile/Profile"));
const FAQ = lazy(() => import("../pages/faq/FAQ"));
const RaffleFAQ = lazy(() => import("../pages/faq/RaffleFAQ"));
const Charity = lazy(() => import("../pages/charity/Charity"));
const Transaction = lazy(() =>
  import("../pages/dashboard/transactions/Transactions")
);
const Winners = lazy(() => import("../pages/winners/Winners"));
const Privacy = lazy(() => import("../pages/home/Privacy"));
const Terms = lazy(() => import("../pages/home/Terms"));
const WinningFAQ = lazy(() => import("../pages/faq/Winning"));
const AccountFAQ = lazy(() => import("../pages/faq/Account"));
const CharityFAQ = lazy(() => import("../pages/faq/Charity"));
const TokenFAQ = lazy(() => import("../pages/faq/Tokens"));
const PhoneNumberUpdate = lazy(() =>
  import("../pages/auth/signup/PhoneNumberUpdate")
);
const SocialAuth = lazy(() => import("../pages/auth/signup/SocialAuth"));

const Routes = () => (
  // eslint-disable-next-line no-undef
  <Router basename={process.env.PUBLIC_URL}>
    <Suspense fallback={<PageLoader />}>
      <AlertWrapper ref={(alertRef) => (window.alertRef = alertRef)} />
      <Switch>
        {/* can't access them when you are logged in */}
        {/*<AuthRoute exact path='/' component={Home}/>*/}
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/signup" component={Signup} />
        <AuthRoute exact path="/setup" component={Setup} />
        <AuthRoute path="/verification" component={Verification} />
        <AuthRoute path="/social-auth" component={SocialAuth} />
        {/* can only access them when you are logged in */}
        {/* public route: accessible to both !!authenticated users */}
        <PublicRoute exact path="/about" component={About} />

        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/raffles" component={Raffles} />
        <PublicRoute path="/raffles/:id/details" component={RaffleDetails} />
        <PublicRoute path="/watchlist" component={Watchlist} />
        <PublicRoute exact path={"/help"} component={FAQ} />
        <PublicRoute path={"/help/raffle"} component={RaffleFAQ} />

        <PublicRoute path={"/help/charity"} component={CharityFAQ} />
        <PublicRoute path={"/help/token"} component={TokenFAQ} />
        <PublicRoute path={"/help/account"} component={AccountFAQ} />
        <PublicRoute path={"/help/winnings"} component={WinningFAQ} />
        <PublicRoute path={"/charity"} component={Charity} />
        <PublicRoute path={"/winners"} component={Winners} />
        <PublicRoute path={"/privacy"} component={Privacy} />
        <PublicRoute path={"/terms"} component={Terms} />

        <PrivateRoute exact path={"/dashboard"} component={Dashboard} />
        <PrivateRoute exact path={"/notifications"} component={Notification} />
        <PrivateRoute exact path={"/tickets"} component={Ticket} />
        <PrivateRoute exact path={"/history"} component={History} />
        <PrivateRoute exact path={"/referral"} component={Referrals} />
        <PrivateRoute exact path={"/profile"} component={Profile} />
        <PrivateRoute exact path={"/payment/response"} component={Response} />
        <PrivateRoute exact path={"/transactions"} component={Transaction} />
        <AuthRoute exact path={"/phone_update"} component={PhoneNumberUpdate} />

        {/* catch all invalid urls */}
        <Route component={Error404} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
