import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {AboutRaffle} from "./detailsTab/About";
import {Sponsors} from "./detailsTab/Sponsors";
import {RaffleHowItWorks} from "./detailsTab/HowItWorks";
import {Entry} from "./detailsTab/Entry";

const Details = (props) => {
  const [activeTab, setActiveTab] = useState('1');
  
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  };
  
  return (
    <div className={'mt-6'}>
      <Nav tabs>
        <NavItem>
          <NavLink
            
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Sponsors
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            How it works
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Entry methods
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
  );
};

export default Details;