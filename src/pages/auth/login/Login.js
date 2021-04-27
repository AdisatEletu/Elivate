import React, {useState} from 'react';
import '../../../index.css'
import {FormInput} from "../../../components/forms/Input";
import {FormButton} from "../../../components/forms/Button";
import {GoogleButton} from "../../../components/forms/GoogleBtn";
import {NavLink} from "react-router-dom";
import ForgotPassword from "./ForgotPassword";


const Login = () => {
  const [formState, setFormState] = useState();
  
  return (
    
    <>
      {formState === 'forgotPassword' ? <ForgotPassword setFormState={setFormState}/> :
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
                  <img alt={'elivate logo'} src={require('../../../assets/Elivate9ja/Elivate9ja-01.svg')}
                       width={'114.1px'}
                       height={'80px'}/>
                </div>
                <div className={'bigTitle text-align-center'}>
                  Hey, Welcome Back.
                </div>
                <div className={'paragraph text-align-center grey-color'}>It’s good to have you back, enter the email
                  address
                  you used
                  for registration with the right password.
                </div>
              </div>
              <div className={'form-holder fullwidth mt-4'}>
                <div className={'title2 text-align-center'}>
                  Log In to your account
                </div>
                
                <form className={'mt-4'}>
                  <FormInput className={"mb-3"} type={'email'} label={"Email Address"}/>
                  <FormInput className={"mb-3"} type={'password'} label={"Password"}/>
                  <FormButton title={'Log In'} className={'mt-3'} type={'submit'}/>
                  <div className={'col-md-12 hr-holder mt-4 '}>
                    <div className={'col-md-4 hr'}/>
                    <div className={'small-paragraph col-md-4 text-align-center grey-color'}> or sign in with</div>
                    <div className={'col-md-4 hr'}/>
                  </div>
                  <GoogleButton title={'Google'}/>
                </form>
              </div>
              
              <div className={'d-flex flex-column align-items-center mt-3'}>
                <div className={'forgot-password small-paragraph-bold'} onClick={()=> setFormState('forgotPassword')}>
                  Forgot Password?
                </div>
                <div>
              <span className={"small-paragraph grey-color"}>
                Have an account yet? &nbsp;
              </span>
                  <NavLink to={'/signup'}>
              <span className={'forgot-password small-paragraph-bold'}>
               Sign Up
            </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Login;
