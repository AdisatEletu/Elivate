import React, { useState, useEffect } from "react";
import "./sidenav.css";
import { NavLink, withRouter } from "react-router-dom";
import { logoutUser } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import {useHistory} from "react-router-dom"

const SideNav = ({ location, logoutUser  }) => {

const [activeLink, setActiveLink] = useState("/dashboard");

const history = useHistory();

const pathname = history?.location?.pathname
console.log({pathname})
  const getNavLinkClass = (path) => {
    const regex = new RegExp(path, "gi");
  
    return pathname.match(regex) ? "nav-item nav-item__active" : "nav-item";
  };
  
  useEffect(() => {
    setActiveLink(pathname);

  console.log(activeLink)
  }, [activeLink, pathname]);
  
  console.log(activeLink)

  return (
    <div className={"side-nav"}>
      <div
        className={
          "box-shadow sidenav-holder d-flex flex-column justify-content-between p-3"
        }
      >
        <ul>
          <li className={getNavLinkClass("/dashboard")}>
            <NavLink
              to={"/dashboard"}
              activeClassName={"active-class"}
              className={
                "d-flex sidebar-link justify-content-between align-items-center"
              }
            >
              <img
                className={"col-md-1"}
                alt={"not"}
                src={activeLink === "/dashboard" ?  require("../../assets/icons/active-dashboard.svg") : require("../../assets/icons/Frame.svg")}
              />
              <div className={"col-md-10"}> Dashboard</div>
            </NavLink>
          </li>

          <li className={getNavLinkClass("/notifications")}>
            <NavLink
              to={"/notifications"}
              activeClassName={"active-class"}
              className={
                "d-flex sidebar-link justify-content-between  align-items-center"
              }
            >
              <img
                className={"col-md-1"}
                alt={"not"}
                src={activeLink === "/notifications" ?  require("../../assets/icons/active-notification.svg") : require("../../assets/icons/notification.svg")}
              />
              <div className={"col-md-10"}> Notification</div>
            </NavLink>
          </li>

          <li className={getNavLinkClass("/tickets")}>
            <NavLink
              to={"/tickets"}
              activeClassName={"active-class"}
              className={
                "d-flex sidebar-link justify-content-between  align-items-center"
              }
            >
              <img
                className={"col-md-1"}
                alt={"not"}
                src={activeLink === "/tickets" ?  require("../../assets/icons/active-ticket.svg") :require("../../assets/icons/grey-ticket.svg")}
              />
              <div className={"col-md-10"}> Token</div>
            </NavLink>
          </li>

          <li className={getNavLinkClass("/history")}>
            <NavLink
              to={"/history"}
              activeClassName={"active-class"}
              className={
                "d-flex sidebar-link justify-content-between align-items-center"
              }
            >
              <img
                className={"col-md-1"}
                alt={"not"}
                src={activeLink === "/history" ?  require("../../assets/icons/active-history.svg") : require("../../assets/icons/history.svg")}
              />
              <div className={"col-md-10"}> History</div>
            </NavLink>
          </li>

          <li className={getNavLinkClass("/transactions")}>
            <NavLink
              to={"/transactions"}
              activeClassName={"active-class"}
              className={
                "d-flex sidebar-link justify-content-between align-items-center"
              }
            >
              <img
                className={"col-md-1"}
                alt={"not"}
                src={activeLink === "/transactions" ?  require("../../assets/icons/active-payment.svg") : require("../../assets/icons/payment.svg")}
              />
              <div className={"col-md-10"}> Transactions</div>
            </NavLink>
          </li>

          <li className={getNavLinkClass("/referral")}>
            <NavLink
              to={"/referral"}
              activeClassName={"active-class"}
              className={
                "d-flex sidebar-link justify-content-between align-items-center"
              }
            >
              <img
                className={"col-md-1"}
                alt={"not"}
                src={activeLink === "/referral" ?  require("../../assets/icons/active-referral.svg") : require("../../assets/icons/referrals.svg")}
              />
              <div className={"col-md-10"}> Referrals</div>
            </NavLink>
          </li>

          <li className={getNavLinkClass("/profile")}>
            <NavLink
              to={"/profile"}
              activeClassName={"active-class"}
              className={
                "d-flex sidebar-link justify-content-between align-items-center"
              }
            >
              <img
                className={"col-md-1"}
                alt={"not"}
                src={activeLink === "/profile" ?  require("../../assets/icons/active-profile.svg") : require("../../assets/icons/profile.svg")}
              />
              <div className={"col-md-10"}> Profile</div>
            </NavLink>
          </li>
        </ul>
        <div
          className={
            "log-out d-flex justify-content-between align-items-center pl-2"
          }
          onClick={logoutUser}
        >
          <img
            className={"col-md-1"}
            alt={"not"}
            src={require("../../assets/icons/logout.svg")}
          />
          <div className={"col-md-10"}> Logout</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    uiReducer: state.uiReducer,
  };
};
export default connect(mapStateToProps, { logoutUser })(withRouter(SideNav));
