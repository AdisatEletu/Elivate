import React, {useState} from "react";
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import {AboutRaffle} from "../../raffles/detailsTab/About";
import {Sponsors} from "../../raffles/detailsTab/Sponsors";
import {RaffleHowItWorks} from "../../raffles/detailsTab/HowItWorks";
import {Entry} from "../../raffles/detailsTab/Entry";

const History = () => {
  const [activeTab, setActiveTab] = useState('1');
  
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  };
  
  return (
    <div className={'profile-card'}>
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
            <Row>
              <Col sm="12">
                <AboutRaffle/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm={"12"}>
                <Sponsors/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm={"12"}>
                <RaffleHowItWorks/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm={"12"}>
                <Entry/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
    </div>
    </div>
    
  )
};

export default History;