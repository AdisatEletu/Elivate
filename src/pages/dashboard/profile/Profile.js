import React, {useState} from "react";
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import Account from "./Account";
import Password from "./Password";

const Profile = () => {
  const [activeTab, setActiveTab] = useState('1');
  
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className={"profile-card "}>
      <div className={'mt-5'}>
        <Nav tabs>
          <NavItem>
            <NavLink
          
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Account
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Password
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
        
            <Col sm="12">
            <Account/>
            </Col>
          </TabPane>
          <TabPane tabId="2">
            <Col sm={"12"}>
              <Password/>
            </Col>
          </TabPane>
        </TabContent>
      </div>
    </div>
  )
};

export default Profile;