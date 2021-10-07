import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { FaBell } from "react-icons/fa";
import img from "../assets/default-profile.jpeg";
import { logoutUser } from "../redux/actions/authActions";
import { Drawer, Badge, Divider } from "antd";
const Header = ({ user, isAuthenticated, count, logoutUser }) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const drawerHeader = (
    <ul className="d-flex drawer-header-style justify-content-between align-items-center list-style-none show-mobile">
      <li>
        <NavLink activeClassName={"active-nav"} to="/tickets">
          <img src={require("../assets/icons/ticket.svg")} />
          &nbsp;
          {user?.tickets}
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
            style={{ borderRadius: "50%", width: '50px', height: '50px' }}
            height={40}
            // srcset=""
            // className={classes.Image}
          />
          {/* <BiDownArrow /> */}
        </NavLink>
      </li>
    </ul>
  );
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
          <li className={"border-none"}>
            <NavLink activeClassName={"active-nav"} to="/watchlist">
              Watchlist
            </NavLink>
          </li>
          <li className={"menu"}>
            <NavLink activeClassName={"active-nav"} to="/tickets">
              <img src={require("../assets/icons/ticket.svg")} />
              &nbsp;
              {user?.tickets} Tokens
            </NavLink>
          </li>
          <li  className={"menu"}>
            <NavLink activeClassName={"active-nav"} to="/notifications">
              <Badge count={count}>
                <FaBell />
              </Badge>
            </NavLink>
          </li>
          <li className={"menu"}>
            <NavLink activeClassName={"active-nav"} to="/profile">
            <img
            src={user?.image_thumbnail_url || img}
            alt="img"
            style={{ borderRadius: "50%",width: '50px', height: '50px', objectFit: 'cover' }}
            height={40}
            // srcset=""
            // className={classes.Image}
          />
          {/* <BiDownArrow /> */}
            </NavLink>
          </li>


          <div
            className={
              " m-flex flex-column justify-content-between display-none showMobile"
            }
          >
            <Divider />
            <ul className="navigation-items">
              <NavLink
                to={"/dashboard"}
                activeClassName={"active-nav"}
                className={
                  "d-flex sidebar-link justify-content-between align-items-center"
                }
              >
                <div className={"col-md-10"}> Dashboard</div>
              </NavLink>
              <NavLink
                to={"/notifications"}
                activeClassName={"active-nav"}
                className={
                  "d-flex sidebar-link justify-content-between  align-items-center"
                }
              >
                <div className={"col-md-10"}> Notification</div>
              </NavLink>
              <NavLink
                to={"/tickets"}
                activeClassName={"active-nav"}
                className={
                  "d-flex sidebar-link justify-content-between  align-items-center"
                }
              >
                <div className={"col-md-10"}>Buy Token</div>
              </NavLink>
              <NavLink
                to={"/history"}
                activeClassName={"active-nav"}
                className={
                  "d-flex sidebar-link justify-content-between align-items-center"
                }
              >
                <div className={"col-md-10"}> History</div>
              </NavLink>
              <NavLink
                to={"/transactions"}
                activeClassName={"active-nav"}
                className={
                  "d-flex sidebar-link justify-content-between align-items-center"
                }
              >
                <div className={"col-md-10"}> Transactions</div>
              </NavLink>
              <NavLink
                to={"/referral"}
                activeClassName={"active-nav"}
                className={
                  "d-flex sidebar-link justify-content-between align-items-center"
                }
              >
                <div className={"col-md-10"}> Referrals</div>
              </NavLink>
              <NavLink
                to={"/profile"}
                activeClassName={"active-nav"}
                className={
                  "d-flex sidebar-link justify-content-between align-items-center"
                }
              >
                <div className={"col-md-10"}> Profile</div>
              </NavLink>
            </ul>
            <Divider />
            <div
              className={
                "log-out d-flex justify-content-between align-items-center"
              }
              onClick={logoutUser}
            >
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
              <NavLink activeClassName={"active-nav white-color"} style={{color: "#ffffff"}} to="/signup">
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
        <div id="branding">
          <Link to="/">
            <img
              alt={"logo"}
              src={require("../assets/footer-logo.png")}
              height={"80px"}
              style={{marginLeft: "20px"}}
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
        title={drawerHeader}
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
