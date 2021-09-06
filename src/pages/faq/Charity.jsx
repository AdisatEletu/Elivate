import React from "react";
import ExpandableFAQ from "./components/expandableFAQ";


const AccountFAQ = () => {
  return (
    <div className={'container'}>
      <div className={'text-align-center mb-5'}>
        <div className={'bigTitle'}>Charity</div>
        <div className={'grey-color paragraph'}>Charity is right at the heart of our mission, when you sign up to Elivate9ja Raffles a percentage of every ticket you purchase will be donated to selected charity or to support good causes.
        </div>
      </div>
    
      <ExpandableFAQ
        question={'CAN MY BUSINESS OR CHARITY BECOME AN ELIVATE9JA RAFFLES PARTNER?'}
        description={'Yes, we are always open to talking about partnerships with new organizations and would love to hear from you! Please do send an email to support@elivate9ja.com and a member of our partnerships team will follow up with you directly.        '}/>

    </div>
  )
};

export default AccountFAQ;