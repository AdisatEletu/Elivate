import React from "react";
import ExpandableFAQ from "./components/expandableFAQ";


const RaffleFAQ = () => {
  return (
    <div className={'container'}>
      <div className={'text-align-center mb-5'}>
        <div className={'bigTitle'}>Raffles</div>
        <div className={'grey-color paragraph'}>Everything you need to know about raffles and winning them
          first.
        </div>
      </div>
      <ExpandableFAQ
        question={'How to be a member on the Elivate9ja raffles'}
        description={' '}/>
      <ExpandableFAQ
        question={'Can Anyone Play?'}
        description={' '}/>
      <ExpandableFAQ
        question={'Do I Have To Be A Member To Play?'}
        description={' '}/>
      <ExpandableFAQ
        question={'How Do I Enter A Raffle?'}
        description={' '}/>
      <ExpandableFAQ
        question={'What Is The Cost Per Entry?'}
        description={' '}/>
      <ExpandableFAQ
        question={"Why Isn't My Payment Going Through?"}
        description={' '}/>
      <ExpandableFAQ
        question={'How Can I Pay?'}
        description={' '}/>
      <ExpandableFAQ
        question={'How Long Do Raffles Last?'}
        description={' '}/>
      <ExpandableFAQ
        question={'Can I Withdraw From A Raffle?'}
        description={' '}/>
      <ExpandableFAQ
        question={'When Does The Draw For A Raffle Happen?'}
        description={' '}/>
      <ExpandableFAQ
        question={'Where Can I View My Tokens?'}
        description={'You Can View The Number Of Tokens You Have In Your Account In The Top Right Corner Of The Screen Labelled "Token" You Will Also Be Able To See Your Spent Tokens When You Click On The Token Button.'}/>
    
    </div>
  )
};

export default RaffleFAQ;