import React, {useState} from "react";
import {FormButton} from "../../../components/forms/Button";
import {NavLink} from "react-router-dom";
import VerificationForm from "./VerificationForm";

const Verification = () => {
  const [form, setForm] = useState(false);
  return (
    <>
      {form ? <VerificationForm/> :
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
          <div className={'d-flex align-items-center flex-column fullwidth'}>
            <div className={'d-flex align-items-center justify-content-center flex-column mt-5 col-md-4'}>
              <div className={'d-flex align-items-center flex-column'}>
                <div>
                  <img alt={'elivate logo'} src={require('../../../assets/messageIcon.png')}
                  />
                </div>
                <div className={'bigTitle text-align-center'}>
                  We've sent a code
                </div>
                <div className={'paragraph text-align-center grey-color'}>Please check your inbox and click the received
                  link to complete your account set up.
                </div>
              </div>
              <div className={' col-md-6 mt-4'}>
                <FormButton title={'Done'} className={'mt-3'} onClick={() => setForm(true)} type={'submit'}/>
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
                <div className={'mt-3'}>
              <span className={"small-paragraph grey-color"}>
                Wrong Email address? &nbsp;
              </span>
                  <NavLink to={'/signup'}>
              <span className={'forgot-password small-paragraph'}>
               Change it
            </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      </>
  )
};

export default Verification;