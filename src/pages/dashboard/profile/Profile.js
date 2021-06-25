import React, { useState, useEffect } from "react";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import Account from "./Account";
import Password from "./Password";

import { connect } from "react-redux";
import { fetchUserdetails } from "../../../redux/actions/userActions";

const Profile = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const { onLoad, userDetails, isLoading } = props;

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  let account = "LOADING...";

  if (!isLoading && userDetails) {
    account = <Account profileDetails={userDetails} />;
  }

  return (
    <div className={"profile-card "}>
      <div className={"mt-5"}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Account
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Password
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Col sm="12">{account}</Col>
          </TabPane>
          <TabPane tabId="2">
            <Col sm={"12"}>
              <Password />
            </Col>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.details.userDetails,
  isLoading: state.details.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => dispatch(fetchUserdetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
