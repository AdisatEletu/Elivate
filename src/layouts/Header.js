import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./Header.module.css";
import { FaBell } from "react-icons/fa";
import img from "../assets/default-profile.jpeg";
import { logoutUser } from "../redux/actions/authActions";
import { Drawer, Badge } from "antd";
const Header = ({ user, isAuthenticated, count, logoutUser }) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const links = (
    <ul className="navigation-items">
      <li>
        <NavLink activeClassName={"active-nav"} exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={"active-nav"} to="/raffles">
          Raffles
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={"active-nav"} to="/about">
          About us
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={"active-nav"} to="/help">
          Help & FAQs
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={"active-nav"} to="/charity">
          Charity
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={"active-nav"} to="/winners">
          Winners
        </NavLink>
      </li>

      {isAuthenticated ? (
        <>
          <li className={classes.Watchlist}>
            <NavLink activeClassName={"active-nav"} to="/watchlist">
              Watchlist
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={"active-nav"} to="/tickets">
              <img src={require("../assets/icons/ticket.svg")} />
              &nbsp;
              {user?.tickets} Tokens
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={"active-nav"} to="/notifications">
              <Badge count={count}>
                <FaBell />
              </Badge>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={"active-nav"} to="/profile">
              <img
                src={user?.image_thumbnail_url || img}
                alt="img"
                style={{ borderRadius: "50%" }}
                height={40}
                // srcset=""
                // className={classes.Image}
              />
              {/* <BiDownArrow /> */}
            </NavLink>
          </li>

          <div
            className={
              "box-shadow sidenav-holder m-flex flex-column justify-content-between p-3 branding display-none showMobile"
            }
          >
            <ul>
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
                  src={require("../assets/icons/Frame.svg")}
                />
                <div className={"col-md-10"}> Dashboard</div>
              </NavLink>
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
                  src={require("../assets/icons/notification.svg")}
                />
                <div className={"col-md-10"}> Notification</div>
              </NavLink>
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
                  src={require("../assets/icons/grey-ticket.svg")}
                />
                <div className={"col-md-10"}> Token</div>
              </NavLink>
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
                  src={require("../assets/icons/history.svg")}
                />
                <div className={"col-md-10"}> History</div>
              </NavLink>
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
                  src={require("../assets/icons/notification.svg")}
                />
                <div className={"col-md-10"}> Transactions</div>
              </NavLink>
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
                  src={require("../assets/icons/referrals.svg")}
                />
                <div className={"col-md-10"}> Referrals</div>
              </NavLink>
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
                  src={require("../assets/icons/profile.svg")}
                />
                <div className={"col-md-10"}> Profile</div>
              </NavLink>
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
                src={require("../assets/icons/logout.svg")}
              />
              <div className={"col-md-10"}> Logout</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <li>
            <NavLink activeClassName={"active-nav"} to="/login">
              Login
            </NavLink>
          </li>
          <li className={""}>
            <button
              className={`paragraph-bold text-align-center header-button`}
            >
              <NavLink activeClassName={"active-nav"} to="/sign-up">
              Sign up
            </NavLink>
             
            </button>
          </li>
        </>
      )}
    </ul>
  );

  return (
    <header>
      <div className="navigation-div">
        <div id="branding" onClick={showDrawer}>
          <Link to="/">
            <img
              alt={"logo"}
              src={require("../assets/Elivate9ja/Elivat9ja_Logo_Asset_PNG.png")}
              height={"80px"}
            />
          </Link>
        </div>
        <img
          className={"burger-icon"}
          onClick={showDrawer}
          alt={"burger icon"}
          src={require("../assets/icons/Menu.svg")}
        />
        <nav className="menu">{links}</nav>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        {links}
      </Drawer>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  count: state.headerReducer.notification_count,
});

export default connect(mapStateToProps, { logoutUser })(Header);
