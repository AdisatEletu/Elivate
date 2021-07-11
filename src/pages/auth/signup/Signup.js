import React, {useState} from 'react';
import {FormInput} from "../../../components/forms/Input";
import {FormButton} from "../../../components/forms/Button";
import {GoogleButton} from "../../../components/forms/GoogleBtn";
import {NavLink} from "react-router-dom";
import Onchange from "../../../helpers/Onchange";
import {postRequest} from "../../../helpers/requests";
import {doAlert} from "../../../components/alert/AlertComponent";
import handleError from "../../../helpers/handleError";


const Signup = () => {
  
  const fields = {
    email: ''.trim(),
    password: '',
    phone_number: ''
  }
  const [values, setValues] = useState({
    fields
  });
  const [is_creating, setCreating] = useState(false);
  
  
  const createUser = async () => {
    
    setCreating(true);
    
    try {
      const {success, data,error} = await postRequest('customer', values);
      if (success) {
        localStorage.setItem('id', data.id_2);
        window.location.href = ('/verification')
      }else{
        console.log({error})
        doAlert(error.response.data.data[0])
      }
      setCreating(false)
    } catch (e) {
      handleError(e)
    }
  };

  return (
    <div className={"signup-bg"}
    >
      <div className={'d-flex flex-row align-items-center fullheight col-md-12'}>
        <div className={'d-flex flex-column align-items-center col-md-7 col-xs-12'}>
          <div className={'text-align-center'}>
            <img alt={'elivate'} src={require('../../../assets/Elivate9ja/Elivate9ja-01.svg')} width={'114.1px'}
                 height={'80px'}/>
          </div>
          <div className={'bigTitle text-align-center'}>
            Host your own&nbsp;<span>Raffle </span>
          </div>
          <div className={'paragraph text-align-center grey-color'}>
            Promote and sell tickets to win personal products,<br/> experiences or associated brands
          </div>
          <div><i className='fa fa-ellipsis-h'/></div>
          
          <div className={'mt-5'}>
            <img alt={'elivate logo'} className={"imag2"} src={require('../../../assets/Elivate9ja/ladies.png')}
            />
          </div>
        </div>
        <div className={'col-md-4 d-flex flex-column'}>
          <div className={'form-holder fullwidth mt-4'}>
            <div className={'title2 text-align-center'}>
              Create an account
            </div>
            
            <div className={'mt-4'}>
              <FormInput className={"mb-3"} type={'email'} label={"Email Address"} value={values.email} name={'email'}
                         onChange={(e) => Onchange(e, values, setValues)}/>
              <FormInput className={"mb-3"} type={'number'} label={"Phone number"} value={values.phone_number}
                         name={'phone_number'} onChange={(e) => Onchange(e, values, setValues)}/>
              <FormInput className={"mb-3"} type={'password'} label={"Password"} value={values.password}
                         name={'password'} onChange={(e) => Onchange(e, values, setValues)}/>
              <FormButton title={'Create account'} disabled={is_creating} loading={is_creating}  onClick={() => createUser()}
                          className={'mt-3 '}
              />
              <div className={'col-md-12 hr-holder mt-4 '}>
                <div className={'col-md-4 hr'}/>
                <div className={'small-paragraph col-md-4 text-align-center grey-color'}> or sign up with</div>
                <div className={'col-md-4 hr'}/>
              </div>
              <GoogleButton title={'Google'} className={'mt-4'}/>
            </div>
            <div className={'mt-3 small-paragraph text-align-center grey-color'}>
              By creating an account, you agree to Elevate9ja’s website
              <span className={'forgot-password small-paragraph'}> Terms of Service </span>and
              <span className={'forgot-password small-paragraph'}> Privacy Policy.</span>
            </div>
          </div>
          
          <div className={'text-align-center mt-4'}>
              <span className={"small-paragraph grey-color text-align-center"}>
               Already have an account? &nbsp;
              </span>
            <NavLink to={'/login'}>
              <span className={'forgot-password small-paragraph-bold'}>
              Log in
            </span>
            </NavLink>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Signup;
