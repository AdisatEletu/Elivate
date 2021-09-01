import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./Header.module.css";
import { FaBell } from "react-icons/fa";
import img from "../assets/default-profile.jpeg";
import {Badge} from "antd"
const Header = ({ user, isAuthenticated,count }) => {
  return (
    <header>
      <div className="navigation-div">
        <div id="branding">
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
          alt={"burger icon"}
          src={require("../assets/icons/Menu.svg")}
        />
        <nav className="menu">
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
                    Sign up
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  count: state.headerReducer.notification_count
});

export default connect(mapStateToProps)(Header);
