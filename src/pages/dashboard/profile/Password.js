import React from "react";
import {FormInput} from "../../../components/forms/Input";

const Password = () => {
  return (
    <div className={"Password-card  padding-5"}>
      <div className={'mt-5 d-flex flex-column'}>
        <div className={'card-grid mt-5'}>
          <div>
            <FormInput label={'Enter current password'} type={'password'}/>
          </div>
        </div>
        <div className={'card-grid mt-5'}>
          <div>
            <FormInput label={'New password'}/>
          </div>
          <div>
            <FormInput label={'Confirm password'}/>
          </div>
        
        </div>
      </div>
      <div className={' mt-5 col-md-3 float-right'}>
        <div className={'disabled-btn '}> Save changes</div>
      </div>
    </div>
  )
};

export default Password;