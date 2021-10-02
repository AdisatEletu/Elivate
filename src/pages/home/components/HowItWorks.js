import './howitworks.css'

import React from "react";
import { Col, Row } from "react-bootstrap";
import {SubHeader} from "./Subheader";

export const HowItWorks = () => {
  return (
    <div className={'text-align-center mt-6 m-container  t-mt-6'}>
     <SubHeader subheader={"How it works"} text={"Winning on Elivate9ja happens in Three easy steps."}/>
     <Row>
     <div className={'paragraph col-md-12 m-flex  t-mt-6 h-align-items-center'}>
        <Col md={12} lg={4} sm={12} className={'d-flex flex-column align-items-center h-justify-content-center h-sign-up'}>
          <div className={'cursive biggestText circle-background '}>1</div>
          <div className={'title2 mt-3'}>Sign Up on Elivate9ja</div>
          <div className={'paragraph mt-2  p-4'}>Join our Community and start winning</div>
        </Col>
        <div className='h-sign-up-tutorial h-mt-4 col-md-8'>
        <Col md={12} lg={6} sm={6} className={'d-flex flex-column align-items-center justify-content-center h-token-tutorial'}>
          <div className={'cursive biggestText circle-background2'}>2</div>
          <div className={'title2 mt-3'}>Buy tokens</div>
          <div className={'paragraph mt-2  p-4'}>Token is our currency, get your tokens to enter the raffle. You are just one step away from winning.</div>

        </Col>
        <Col md={12} lg={6} sm={6} className={'d-flex flex-column align-items-center h-raffle-tutorial'}>
          <div className={'cursive biggestText circle-background3'}>3</div>
          <div className={'title2 mt-3'}>Play raffle</div>
          <div className={'paragraph mt-2 p-4'}>Enter raffle for a chance to win amazing prices.</div>
        </Col>
        </div>
        
      </div>
     </Row>
     
    </div>
  )
};