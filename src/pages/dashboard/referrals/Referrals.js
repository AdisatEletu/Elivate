import React, {useRef, useState} from "react";
import {connect} from "react-redux"
import {setCurrentUser} from "../../../redux/actions/authActions";
import {CopyOutlined, FacebookOutlined} from "@ant-design/icons"
import {message} from "antd";
import ShareLink from 'react-facebook-share-link'

const Referrals = (auth) => {
  
  const [success, setCopySuccess] = useState();
  
  const textAreaRef = useRef();
  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    
    message.success("Copied!");
    setCopySuccess('Copied!');
  };
  return (
    <div className={'profile-card d-flex align-items-center flex-column justify-content-center'}>
      <div className={' referral-card col-md-4 text-align-center'}>
        <img src={require('../../../assets/icons/referralbonus.svg')} alt={'referral-icon'}/>
        <div className={'header3'}>Refer your friends and win</div>
        <div className={'small-paragraph mt-2'}>Copy or share your referral code with your <br/> friends to win some
          cash.
        </div>
        <div className={'small-paragraph mt-4'}>Your referral code:</div>
        <input className={'title1 mt-2 border-none outline-none referral-code'} value={auth.user?.referral_code}
               ref={textAreaRef} readOnly/>
      </div>
      <div className="d-flex mt-3 col-md-1 justify-content-around">
        <a href={"#"}><CopyOutlined onClick={copyToClipboard}
                                    className={'pointer'}/></a>
        <ShareLink link='https://www.elivate.com'>
          {link => (
            <a href={link} target='_blank'><FacebookOutlined className={'pointer'}/></a>
          )}
        </ShareLink>
      
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return state?.auth;
};

export default connect(mapStateToProps, {setCurrentUser})(Referrals);
