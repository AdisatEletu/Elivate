import React from "react";
import {FormButton} from "../../../components/forms/Button";
import {FormInput} from "../../../components/forms/Input";

const Setup = () => {
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
      <div className={'d-flex align-items-center flex-column fullwidth'}>
        <div className={'d-flex align-items-center justify-content-center flex-column  col-md-4'}>
          <div className={'d-flex align-items-center flex-column'}>
            <div className={'bigTitle text-align-center'}>
              Setup your account
            </div>
            <div className={'paragraph text-align-center grey-color'}>Kindly enter your correct details to continue
            </div>
          </div>
          <div className={'form-holder fullwidth mt-4'}>
            <div className={'title2 text-align-center'}>
              Enter your Details
            </div>
            
            <div className={'mt-4'}>
              <FormInput label={'First Name'} className={'mb-3'} />
              <FormInput label={'Last name'} className={'mb-3'}/>
              <FormInput label={'User name'} className={'mb-3'}/>
              <FormButton title={'Continue'} className={'mt-3'} type={'submit'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Setup;