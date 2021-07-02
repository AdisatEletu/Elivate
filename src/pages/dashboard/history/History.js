import React, {useState} from "react";
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import {Sponsors} from "../../raffles/detailsTab/Sponsors";
import {RaffleHowItWorks} from "../../raffles/detailsTab/HowItWorks";
import Referrals from "./Referrals";
import Raffles from "./Raffles";
import Win from "./Wins";
import Payment from "./Payment";

const History = () => {
  const [activeTab, setActiveTab] = useState('1');
  
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  };
  
  return (
    <div className={'profile-card3'}>
      <div className={'header3  '}>List of your previous referrals</div>
      <div className={'mt-5'}>
        <Nav tabs>
          <NavItem>
            <NavLink
          
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Raffles
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
             Wins
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              Payment
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => { toggle('4'); }}
            >
              Referrals
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
   
              <Col sm="12">
                {/* <Raffles/> */}
              </Col>
          </TabPane>
          <TabPane tabId="2">
              <Col sm={"12"}>
               <Win/>
              </Col>
          </TabPane>
          <TabPane tabId="3">
              <Col sm={"12"}>
              <Payment/>
              </Col>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm={"12"}>
               <Referrals/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
    </div>
    </div>
    
  )
};

export default History;