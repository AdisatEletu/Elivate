import React from "react";
import ExpandableFAQ from "./components/expandableFAQ";

const WinningFAQ = () => {
  return (
    <div className={"container"}>
      <div className={"text-align-center mb-5"}>
        <div className={"bigTitle"}>Winnings</div>
        <div className={"grey-color paragraph"}>
          Learn more about how you can win and redeem it
        </div>
      </div>
      <ExpandableFAQ
        question={"HOW CAN I CLAIM MY PRIZE IF I WIN?"}
        description={
          "Winners will receive an email and also a text message from elivate9ja raffles on their registered phone number after the raffle draw has been completed."
        }
      />
      <ExpandableFAQ
        question={"HOW GOOD ARE MY ODDS OF WINNING A RAFFLE?"}
        description={
          'You Can View The Number Of Tokens You Have In Your Account In The Top Right Corner Of The Screen Labelled "Token" You Will Also Be Able To See Your Spent Tokens When You Click On The Token Button.'
        }
      />

      <ExpandableFAQ
        question={"WHICH CURRENCY WILL I RECEIVE MY WINNING??"}
        description={"All winnings are paid in Naira."}
      />
      <ExpandableFAQ
        question={"HOW DO I KNOW IF I HAVE WON A RAFFLE?"}
        description={
          "You will receive an e-mail or a call congratulating you! You will also be able to see your name printed on the website as a winner, and if you managed to miss all the announcements, you’ll also likely be put up on social media as a winner.    It is super important that you keep your email and telephone details up to date - if we are unable to contact a winner within 21 days of a raffle ending, we reserve the right to re-run the draw and pick a new winner. "
        }
      />
      <ExpandableFAQ
        question={"WHAT HAPPENS IF THE PRIZE ISN'T CLAIMED?"}
        description={
          "If we are unable to contact a winner within 21 days of a raffle ending and the prize is not claimed within this time, then we reserve the right to re-run the draw and pick a new winner.          "
        }
      />
      <ExpandableFAQ
        question={"DO I NEED TO PARTICIPATE IN ANY PUBLICITY REQUEST AS A WINNER?"}
        description={
          "We are a good-natured company and will never ask anyone to participate in any unreasonable publicity requests. You are absolutely entitled not to participate in anything that you are not comfortable with - the only things we always need are a winner photo, and permission to place this photo on our website and social media pages.          "
        }
      />
      <ExpandableFAQ
        question={"Why Isn't My Payment Going Through?"}
        description={" "}
      />
      <ExpandableFAQ
        question={"How Can I Pay?"}
        description={
          "You can pay by debit /atm card on our website, using our payment provider’s secure checkout system. "
        }
      />
      <ExpandableFAQ
        question={"How Long Do Raffles Last?"}
        description={
          "Our raffles run for a fixed number of days, and the duration of each raffle is specified on our website."
        }
      />
      <ExpandableFAQ
        question={"WHY ISNT MY PAYMENT GOING THROUGH?"}
        description={
          "If you receive a message indicating that we were unable to accept your payment, please do double check your details and try again. If you’re still having trouble paying, please get in contact with us at support@elivate9ja.com."
        }
      />
      <ExpandableFAQ
        question={"Can I Withdraw From A Raffle?"}
        description={
          "All entries are final and you will not be able to withdraw from a raffle after you have entered."
        }
      />
      <ExpandableFAQ
        question={"When Does The Draw For A Raffle Happen?"}
        description={
          "All raffles have a stipulated duration, time and date on a specific raffle. On the due date and time regardless of how many tickets sold even if we sell just one ticket, we will still give the prize away. We think this is the only fair way to go! Unless stated differently on a raffle description; The draw for each raffle will take place within an hour of the time at which the raffle ends OR after all tickets sell out!"
        }
      />
      <ExpandableFAQ
        question={"Where Can I View My Tokens?"}
        description={
          'You Can View The Number Of Tokens You Have In Your Account In The Top Right Corner Of The Screen Labelled "Token" You Will Also Be Able To See Your Spent Tokens When You Click On The Token Button.'
        }
      />
    </div>
  );
};

export default WinningFAQ;
