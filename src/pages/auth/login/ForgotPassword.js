import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FormInput } from "../../../components/forms/Input";
import { FormButton } from "../../../components/forms/Button";
import { putRequest } from "../../../helpers/requests";
import { doAlert } from "../../../components/alert/AlertComponent";
import handleError from "../../../helpers/handleError";

const ForgotPassword = ({ setFormState }) => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async () => {
    setSubmitting(true)
    try {
      const { success, error, data } = await putRequest("/forgot-password", {
        email,
      });
      if (success) {
        doAlert("Kindly check your mail for link");
      }
      setSubmitting(false)
    } catch (error) {
      setSubmitting(false)
      handleError(error)
    }
  };

  console.log({submitting})
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
      {/*<div className={'overlay'}/>*/}
      <div className={"d-flex align-items-center flex-column fullheight"}>
        <div
          className={
            "d-flex align-items-center flex-column fullheight  col-md-4"
          }
        >
          <div className={"d-flex align-items-center flex-column"}>
            <div>
              <img
                alt={"elivate logo"}
                src={require("../../../assets/Elivate9ja/Elivate9ja-01.svg")}
                width={"114.1px"}
                height={"80px"}
              />
            </div>
            <div className={"bigTitle text-align-center"}>
              Ooops! You forgot your password
            </div>
            <div className={"paragraph text-align-center grey-color"}>
              {" "}
              Kindly provide your registered email or phone number to reset your
              password
            </div>
          </div>
          <div className={"form-holder fullwidth mt-4 "}>
            <div className={"title2 text-align-center"}>
              Enter your email address
            </div>

            <form className={"mt-4"} onSubmit={(e)=>{e.preventDefault(); onSubmit()}}>
              <FormInput
                className={"mb-3"}
                type={"email"}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                label={"Email Address"}
              />
              <FormButton
                title={"Send Instructions"}
                className={"mt-3"}
                onSubmit={onSubmit}
                type={"submit"}
                disabled={submitting}
                loading={submitting}
              />
            </form>
          </div>

          <div className={"d-flex flex-column align-items-center mt-3"}>
            <div>
              <span className={"small-paragraph grey-color"}>
                Remember Password? &nbsp;
              </span>
              <span
                onClick={() => setFormState("login")}
                className={"forgot-password small-paragraph-bold"}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
