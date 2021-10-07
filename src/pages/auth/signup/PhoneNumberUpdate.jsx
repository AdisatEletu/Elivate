import React, { useState, useEffect } from "react";
import { FormButton } from "../../../components/forms/Button";
import { FormInput } from "../../../components/forms/Input";
import { getRequest, postRequest } from "../../../helper/request";
import { useHistory } from "react-router-dom";
import handleError from '../../../helpers/handleError';

const PhoneNumberUpdate = () => {

    //state
  const [phone, setphone] = useState("");
  const [is_creating, setIsCreating] = useState(false);

  //hooks
  const history = useHistory();
  const onSubmit = async () => {
    setIsCreating(true);
    try {
      const email = localStorage.getItem('social_email')
      const { success } = await postRequest(`/customer/collect-phone-number`, {phone_number: phone, email});
 
      if (success) {
        localStorage.setItem('phone_number', phone)
          history.push('/verification')
      }else{
      
      }
      setIsCreating(false);
    } catch (error) {
      handleError(error)
      setIsCreating(false);
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center height-100vh align-items-center">
      <FormInput
        className={"mb-3"}
        type={"text"}
        label={"Enter Phone Number"}
        value={phone}
        name={"phone"}
        onChange={(e) => setphone(e.target.value)}
      />

      <FormButton
        title={"Submit"}
        disabled={is_creating}
        loading={is_creating}
        onClick={onSubmit}
        className={"mt-3 "}
      />
    </div>
  );
};

export default PhoneNumberUpdate;
