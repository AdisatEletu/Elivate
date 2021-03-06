import React, {useState} from "react";
import {FormButton} from "../../../components/forms/Button";
import {NavLink} from "react-router-dom";
import {OtpInput} from "../../../components/forms/otp/OtpInput";
import {putRequest} from "../../../helpers/requests";
import {doAlert} from "../../../components/alert/AlertComponent";
import handleError from "../../../helpers/handleError";

const VerificationForm = () => {
  const [is_creating, setCreating] = useState(false);
  const [code, setCode] = useState('');
  
  const verifyCode = async()=>{
    setCreating(true);
    const id = localStorage.getItem('id');
    try {
      const {success,message} = await putRequest(`customer/verify-phone/${id}`, {code});
      if (success) {
        doAlert(message, 'success');
        window.location.href = ('/setup')
      }else{
        doAlert(message, 'error')
      }
      setCreating(false)
    } catch (e) {
      handleError(e)
    }
  };
  return (
    <div className={"auth-bg"}
         style={{
           backgroundImage: `url(${require('../../../assets/Elivate9ja/auth-bg.jpeg')})`,
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
         }}
    >
      <div className={""}>
        <img alt={'elivate logo'} src={require('../../../assets/Elivate9ja/Elivate9ja-01.svg')} width={'114.1px'}
             height={'80px'}/>
      
      </div>
      <div className={'d-flex mt-4 align-items-center flex-column fullwidth'}>
        <div className={'d-flex align-items-center justify-content-center flex-column mt-5 col-md-4'}>
          <div className={'d-flex align-items-center flex-column'}>
            <div className={'bigTitle text-align-center'}>
              Enter the verification code
            </div>
            <div className={'paragraph text-align-center grey-color'}>Enter the 4-digit code we sent to your email/phone number
            </div>
          </div>
          <div className={'form-holder fullwidth mt-4'}>
            <div className={'title2 text-align-center'}>
              Enter 4-digit code
            </div>
    
            <div className={'mt-4 text-align-center'}>
             <OtpInput length={4}
                       onComplete={code => {
                         setCode(code);
                       }}/>
              <FormButton title={'Continue'} className={'mt-3'} type={'submit'} onClick={()=> verifyCode() }/>
            </div>
          </div>
  
  
          <div className={'d-flex flex-column align-items-center mt-4'}>
            <div className={'mt-3'}>
              <span className={"small-paragraph grey-color"}>
                Didn't receive a link? &nbsp;
              </span>
              <NavLink to={'/signup'}>
              <span className={'forgot-password small-paragraph'}>
               Resend it
            </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default VerificationForm;