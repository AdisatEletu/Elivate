import React, { useState } from "react";
import { FormButton } from "../../../components/forms/Button";
import { FormInput } from "../../../components/forms/Input";
import { putRequest } from "../../../helpers/requests";
import { doAlert } from "../../../components/alert/AlertComponent";
import handleError from "../../../helpers/handleError";
import Onchange from "../../../helpers/Onchange";

const Setup = () => {
  const [values, setValues] = useState({});
  const [is_creating, setCreating] = useState(false);
  const setUpUser = async () => {
    setCreating(true);
    const id = localStorage.getItem("id");
    const param = {
      first_name: values.first_name,
      password: localStorage.getItem("spfa"),
      last_name: values.last_name,
      username: values.username,
    };
    try {
      const { success, message } = await putRequest(
        `/customer/complete-profile/${id}`,
        param
      );
      if (success) {
        doAlert(message, "success");
        localStorage.removeItem("id");
        window.location.href = "/login";
      } else {
        doAlert(message, "error");
      }
      localStorage.removeItem("spfa");
      setCreating(false);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <div
      className={"auth-bg"}
      style={{
        backgroundImage: `url(${require("../../../assets/Elivate9ja/auth-bg.jpeg")})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={""}>
        <img
          alt={"elivate logo"}
          src={require("../../../assets/Elivate9ja/Elivat9ja_Logo_Asset_PNG.png")}
          width={"114.1px"}
          height={"80px"}
        />
      </div>
      <div className={"d-flex align-items-center flex-column fullwidth"}>
        <div
          className={
            "d-flex align-items-center justify-content-center flex-column  col-md-4"
          }
        >
          <div className={"d-flex align-items-center flex-column"}>
            <div className={"bigTitle text-align-center"}>
              Setup your account
            </div>
            <div className={"paragraph text-align-center grey-color"}>
              Kindly enter your correct details to continue
            </div>
          </div>
          <div className={"form-holder fullwidth mt-4"}>
            <div className={"title2 text-align-center"}>Enter your Details</div>

            <div className={"mt-4"}>
              <FormInput
                label={"First Name"}
                value={values.first_name}
                name={"first_name"}
                onChange={(e) => Onchange(e, values, setValues)}
                className={"mb-3"}
              />
              <FormInput
                label={"Last name"}
                className={"mb-3"}
                onChange={(e) => Onchange(e, values, setValues)}
                name={"last_name"}
                value={values.last_name}
              />
              <FormInput
                label={"User name"}
                className={"mb-3"}
                onChange={(e) => Onchange(e, values, setValues)}
                name={"username"}
                value={values.username}
              />
              {/* <FormInput label={'Re-Enter Password'} className={'mb-3'} type={'password'}  onChange={(e)=> Onchange(e,values,setValues)} name={'password'} value={values.password}/> */}
              <FormButton
                title={"Continue"}
                loading={is_creating}
                className={"mt-3"}
                type={"submit"}
                onClick={setUpUser}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
