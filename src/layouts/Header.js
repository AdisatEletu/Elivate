import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./Header.module.css";
import { FaBell } from "react-icons/fa";
import img from "../assets/12-small.png";

const Header = ({ user, isAuthenticated }) => {
  return (
    <header>
      <div className="navigation-div">
        <div id="branding">
          <Link to="/">
            <img
              alt={"logo"}
              src={require("../assets/Elivate9ja/Elivate9ja-01.svg")}
              width={"80%"}
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
                    {user?.tickets} Tickets
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName={"active-nav"} to="/notifications">
                    <FaBell />
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName={"active-nav"} to="/profile">
                    <img
                      src={img}
                      alt="img"
                      srcset=""
                      className={classes.Image}
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
});

export default connect(mapStateToProps)(Header);
