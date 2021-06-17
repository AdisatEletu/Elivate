import React from "react";

const Referrals = () => {
  return (
    <div className={'profile-card d-flex align-items-center justify-content-center'}>
      <div className={' referral-card col-md-4 text-align-center'}>
        <img src={require('../../../assets/icons/referralbonus.svg')} alt={'referral-icon'} />
        <div className={'header3'}>Refer your friends and win</div>
        <div className={'small-paragraph mt-2'}>Copy or share your referral code with your <br/> friends to win some cash.</div>
        <div className={'small-paragraph mt-4'}>Your referral code:</div>
        <div className={'title1 mt-2'}>3022</div>
      </div>
    </div>
  )
};

export default Referrals