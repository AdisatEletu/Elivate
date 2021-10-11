import React from "react";
import ExpandableFAQ from "./components/expandableFAQ";


const AccountFAQ = () => {
  return (
    <div className={'container'}>
      <div className={'text-align-center mb-5'}>
        <div className={'bigTitle'}>Raffles</div>
        <div className={'grey-color paragraph'}>Learn more about your acccount setup and activation.
        </div>
      </div>
      <ExpandableFAQ
        question={'How to be a member on the Elivate9ja raffles'}
        description={'Visit www.elivate9jacom, click on the sign-up button (this takes less than a minute) you will receive a confirmation email'}/>
    
      <ExpandableFAQ
        question={'WHAT IF I HAVE LOST MY SIGN IN DETAILS?'}
        description={'No need to worry! If you have lost or forgotten your password, just go to the ‘sign in’ page and then click ‘reset password’. If you’ve forgotten the email associated with your account, then please do get in touch with us by sending a mail to support@elivate9jaonline or send a Direct Message to @elivate9ja_raffles on Instagram, Facebook and Twitter.        '}/>
      <ExpandableFAQ
        question={'HOW DO I DEACTIVATE THE SERVICE OR CLOSE MY ACCOUNT? '}
        description={'You can close your account at any time by accessing the ‘close account’ button at the bottom of the page or send an email to support@elivate9jaonline with your registered email address and phone number with specific instructions. You can also deactivate your subscription by sending a direct message to our social media pages @elivate9ja_raffles on Instagram, Facebook and Twitter.        '}/>
      <ExpandableFAQ
        question={'I HAVE A BASIC HANDSET CAN I ACCESS THE LOTTERY?'}
        description={'Only smart mobile phones can be used to access our website or mobile app.'}/>
      <ExpandableFAQ
        question={'HOW DO I GET HELP?'}
        description={'You can send a mail to support@elivate9jaonline or send a Direct Message to @elivate9ja_raffles on Instagram, Facebook and Twitter.        '}/>
      
      <ExpandableFAQ
        question={'WHEN SHOULD I SUBSCRIBE?'}
        description={'Daily or Weekly info@elivate9ja.com '}/>
    
    </div>
  )
};

export default AccountFAQ;