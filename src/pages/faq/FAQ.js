import React from "react";
import {NavLink} from "react-router-dom";

const FAQ = () => {
  return (
    <div className={'container'}>
      <div className={'text-align-center'}>
        <div className={'bigTitle'}>FAQ</div>
        <div className={'grey-color paragraph'}>Before you contact us, please refer to these commonly asked questions
          first.
        </div>
      </div>
      <div className={'mt-6 faq-grid align-items-center justify-content-center'}>
        <NavLink to={'/help/raffle'} className={'faq-box   d-flex align-items-center justify-content-center flex-column margin-bottom-30'}>
          <img alt={'ticket'} src={require('../../assets/icons/ticket.svg')} width={36} height={36}/>
          <div>
            <div className={'paragraph-bold mb-1 text-align-center'}>Raffles</div>
            <div className={'grey-color text-align-center'}>Everything you need to know about raffles and winning them
            </div>
          </div>
        </NavLink>
        <div className={'faq-box   d-flex align-items-center justify-content-center flex-column margin-bottom-30'}>
          <img alt={'ticket'} src={require('../../assets/icons/profile.svg')} width={36} height={36}/>
          <div>
            <div className={'paragraph-bold mb-1 text-align-center'}>Account</div>
            <div className={'grey-color text-align-center'}>Learn more about your account setup and activation
            </div>
          </div>
        </div>
        <div className={'faq-box   d-flex align-items-center justify-content-center flex-column margin-bottom-30'}>
          <img alt={'ticket'} src={require('../../assets/icons/black-cinema.svg')} width={36} height={36}/>
          <div>
            <div className={'paragraph-bold mb-1 text-align-center'}>Tokens</div>
            <div className={'grey-color text-align-center'}>Everything you need to know about getting tokens
            </div>
          </div>
        </div>
      </div>
      
      <div className={'m-flex justify-content-center gap-30 mt-4 '}>
        <div className={' col-md-4  faq-box d-flex align-items-center justify-content-center flex-column margin-bottom-30'}>
          <img alt={'ticket'} src={require('../../assets/icons/charity.svg')} width={36} height={36}/>
          <div>
            <div className={'paragraph-bold mb-1 text-align-center'}>Charity</div>
            <div className={'grey-color text-align-center'}>Everything you need to know about raffles and winning them
            </div>
          </div>
        </div>
        <div className={' col-md-4 faq-box d-flex align-items-center justify-content-center flex-column margin-bottom-30'}>
          <img alt={'ticket'} src={require('../../assets/icons/winning.svg')} width={36} height={36}/>
          <div>
            <div className={'paragraph-bold mb-1 text-align-center'}>Winning</div>
            <div className={'grey-color text-align-center'}>Everything you need to know about raffles and winning them
            </div>
          </div>
        </div>
      </div>
      
      <div className={'mt-6'}>
        <div className={'biggestText text-align-center'}>
          Contact Us
        </div>
        <div className={'faq-grid '}>
          <div className={'text-align-center mt-5'}>
            <img alt={'message'} src={require('../../assets/icons/contactus.svg')}/>
            <div className={'grey-color mt-2'}>
              Contact us on
            </div>
            <div className={'title2'}>
              +(234) 813 879 0378
            </div>
          </div>
          <div className={'text-align-center mt-5'}>
            <img alt={'message'} src={require('../../assets/icons/message.svg')}/>
            <div className={'grey-color mt-2'}>
             Send us an email on
            </div>
            <div className={'title2'}>
              support@elivate9ja.comUs
            </div>
          </div>
          <div className={'text-align-center mt-5'}>
            <img alt={'message'} src={require('../../assets/icons/place.svg')}/>
            <div className={'grey-color mt-2'}>
              Visit us
            </div>
            <div className={'title2'}>
              123 Lekki express way.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FAQ;