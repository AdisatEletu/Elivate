import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FormButton } from "../components/forms/Button";

const Header = () => {
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
            <li>
              <NavLink activeClassName={"active-nav"} to="/profile">
                Profile
              </NavLink>
            </li>
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
