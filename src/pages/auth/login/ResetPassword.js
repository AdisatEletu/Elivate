import React from 'react';
import {NavLink} from "react-router-dom";
import {FormInput} from "../../../components/forms/Input";
import {FormButton} from "../../../components/forms/Button";


const ResetPassword = ({setFormState}) => {
  return (
    <div className={"auth-bg"}
         style={{
           backgroundImage: `url(${require('../../../assets/Elivate9ja/auth-bg.jpeg')})`,
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
         }}
    >
      {/*<div className={'overlay'}/>*/}
      <div className={'d-flex align-items-center flex-column fullheight'}>
        <div className={'d-flex align-items-center flex-column fullheight  col-md-4'}>
          <div className={'d-flex align-items-center flex-column'}>
            <div>
              <img alt={'elivate logo'} src={require('../../../assets/Elivate9ja/Elivate9ja-01.svg')} width={'114.1px'}
                   height={'80px'}/>
            </div>
            <div className={'bigTitle text-align-center'}>
              Reset your password below
            </div>
            <div className={'paragraph text-align-center grey-color'}> Enter and confirm your new password
            </div>
          </div>
          <div className={'form-holder fullwidth mt-4 '}>
            <div className={'title2 text-align-center'}>
              Enter new password
            </div>
            
            <form className={'mt-4'}>
              <FormInput className={"mb-3"} type={'password'} label={"Current Password"}/>
              <FormInput className={"mb-3"} type={'password'} label={"New Password"}/>
              <FormButton title={'Reset Password'} className={'mt-3'} type={'submit'}/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
