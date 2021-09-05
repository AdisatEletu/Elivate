import React from "react";
import ExpandableFAQ from "./components/expandableFAQ";


const AccountFAQ = () => {
  return (
    <div className={'container'}>
      <div className={'text-align-center mb-5'}>
        <div className={'bigTitle'}>Tokens</div>
        <div className={'grey-color paragraph'}>Everything you need to know about getting tokens.
        </div>
      </div>
      <ExpandableFAQ
        question={'Where Can I View My Tokens?'}
        description={'You Can View The Number Of Tokens You Have In Your Account In The Top Right Corner Of The Screen Labelled "Token" You Will Also Be Able To See Your Spent Tokens When You Click On The Token Button.'}/>

   
    </div>
  )
};

export default AccountFAQ;