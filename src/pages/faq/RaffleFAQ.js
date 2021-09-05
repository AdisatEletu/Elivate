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
        question={'Can Anyone Play?'}
        description={'To comply with our online raffle rules, you must be over 18 to play at Elivate9ja Raffles.'}/>
      <ExpandableFAQ
        question={'Do I Have To Be A Member To Play?'}
        description={'Yes, you must sign up to play our raffles. The sign-up process takes less than a minute, and you receive an email confirming your registration.'}/>
      <ExpandableFAQ
        question={'How Do I Enter A Raffle?'}
        description={'You can enter online through our website. Please see our Terms & Conditions for more information.'}/>
      <ExpandableFAQ
        question={'What Is The Cost Per Entry?'}
        description={'Each ticket on our website costs between N100-N500, and each ‘entry’ gets you a set number of tickets. The entry price on our website varies, and will be clearly specified alongside each raffle underneath the prize description. We want to keep the prices low, because this way everyone gets the chance to play and bring their dreams to reality.'}/>
      <ExpandableFAQ
        question={"Why Isn't My Payment Going Through?"}
        description={'If you receive a message indicating that we were unable to accept your payment, please do double check your details and try again. If you’re still having trouble paying, please get in contact with us at support@elivate9ja.com.        '}/>
      <ExpandableFAQ
        question={'How Can I Pay?'}
        description={'You can pay by debit /atm card on our website, using our payment provider’s secure checkout system. '}/>
      <ExpandableFAQ
        question={'How Long Do Raffles Last?'}
        description={'Our raffles run for a fixed number of days, and the duration of each raffle is specified on our website.'}/>
           <ExpandableFAQ
        question={'Can I Withdraw From A Raffle?'}
        description={'All entries are final and you will not be able to withdraw from a raffle after you have entered.'}/>
      <ExpandableFAQ
        question={'When Does The Draw For A Raffle Happen?'}
        description={'All raffles have a stipulated duration, time and date on a specific raffle. On the due date and time regardless of how many tickets sold even if we sell just one ticket, we will still give the prize away. We think this is the only fair way to go! Unless stated differently on a raffle description; The draw for each raffle will take place within an hour of the time at which the raffle ends OR after all tickets sell out!'}/>
 
<ExpandableFAQ
        question={' WHAT COUNTRY CAN I PLAY FROM?'}
        description={'You can play elivate9ja raffles from any country as long as you have a Naira account.'}/>
   
    <ExpandableFAQ
        question={'WILL I BE BILLED IF I ATTEMPT TO SUBSCRIBE TO A RAFFLE I HAVE SUBSCRIBED TO ALREADY?'}
        description={'This increases your number of entries for a particular raffle. It is possible to be debited for more tickets in the same category.'}/>
    

     
    <ExpandableFAQ
        question={'HOW CAN I PARTICIPATE IN THE FREE RAFFLES COMPETITIONS?'}
        description={'Sign up as a member on the Elivate9ja platform, our free raffles come up from time to time on the elivate9ja platform.'      }/>
    
    <ExpandableFAQ
        question={'HOW MUCH DOES IT COST TO PARTICIPATE IN THE FREE RAFFLES COMPETITIONS? '}
        description={'Our free raffles competitions are absolutely free for all members.'}/>
    
   </div>
  )
};

export default RaffleFAQ;