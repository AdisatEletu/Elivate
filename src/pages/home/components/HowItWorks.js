import React from "react";
import {SubHeader} from "./Subheader";

export const HowItWorks = () => {
  return (
    <div className={'text-align-center mt-6 container'}>
     <SubHeader subheader={"How it works"} text={"Bidding on Elivate9ja happens in THREE easy steps"}/>
      <div className={'paragraph col-md-12 m-flex mt-6'}>
        <div className={'d-flex flex-column align-items-center justify-content-center col-md-4'}>
          <div className={'cursive biggestText circle-background '}>1</div>
          <div className={'title2 mt-3'}>Sign Up on Eliate9ja</div>
          <div className={'paragraph mt-2  p-4'}>Join the community and stay up to date on the latest deals and auctions.</div>
        </div>
        <div className={'d-flex flex-column align-items-center justify-content-center col-md-4'}>
          <div className={'cursive biggestText circle-background2'}>2</div>
          <div className={'title2 mt-3'}>Buy tickets</div>
          <div className={'paragraph mt-2  p-4'}>Join the community and stay up to date on the latest deals and auctions.</div>

        </div>
        <div className={'d-flex flex-column align-items-center justify-content-center col-md-4'}>
          <div className={'cursive biggestText circle-background3'}>3</div>
          <div className={'title2 mt-3'}>Play raffle</div>
          <div className={'paragraph mt-2 p-4'}>Join the community and stay up to date on the latest deals and auctions.</div>
        </div>
      </div>
    </div>
  )
};