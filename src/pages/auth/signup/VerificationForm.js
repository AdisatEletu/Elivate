import React, { useEffect, useState } from "react";
import { FormButton } from "../../../components/forms/Button";
import { OtpInput } from "../../../components/forms/otp/OtpInput";
import { putRequest, postRequest } from "../../../helpers/requests";
import { doAlert } from "../../../components/alert/AlertComponent";
import handleError from "../../../helpers/handleError";
import { setCurrentUser } from "../../../redux/actions/authActions";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
const VerificationForm = () => {
//hooks
const dispatch = useDispatch()
const history = useHistory()
  //states
  const [is_creating, setCreating] = useState(false);
  const [code, setCode] = useState("");
  const [resendVisible, setResendVisible] = useState(false);

  const resendCode = async() =>{

    const phone_number = localStorage.getItem('phone_number')
    try {
      const { success} = postRequest(`/customer/resend-code`, {phone_number});
      if(success){
        doAlert('Code resent!')
        setResendVisible(false)
      }else{
        doAlert("Couldn't resend a code at this time.")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const setResendTimeout = () => {
    setTimeout(() => {
      setResendVisible(true);
    }, 2000);
  };

  useEffect(() => {
    setResendTimeout();
  }, [resendVisible]);
  const verifyCode = async () => {
    setCreating(true);
    const id = localStorage.getItem("id");
    const social_id = localStorage.getItem('social_id')

    let url;

    if(social_id){
      url = `${social_id}?sign_in=google`
    }else{
      url= `${id}`
    }
    try {
      const {
        success,
        message,
        data,
        error,
      } = await putRequest(`customer/verify-phone/${url}`, { code });
      if (success) {
        doAlert(message, "success");
        if(social_id){
          localStorage.getItem('user', data)
          dispatch(setCurrentUser(data))
          history.push('/')
        }else{
          window.location.href = "/setup";
        }
       
      } else {
        doAlert(error.response.data.message, "error");
      }
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
      <div className={"d-flex mt-4 align-items-center flex-column fullwidth"}>
        <div
          className={
            "d-flex align-items-center justify-content-center flex-column mt-5 col-md-4"
          }
        >
          <div className={"d-flex align-items-center flex-column"}>
            <div className={"bigTitle text-align-center"}>
              Enter the verification code
            </div>
            <div className={"paragraph text-align-center grey-color"}>
              Enter the 4-digit code we sent to your email/phone number
            </div>
          </div>
          <div className={"form-holder fullwidth mt-4"}>
            <div className={"title2 text-align-center"}>Enter 4-digit code</div>

            <div className={"mt-4 text-align-center"}>
              <OtpInput
                length={6}
                onComplete={(code) => {
                  setCode(code);
                }}
              />
              <FormButton
                title={"Continue"}
                loading={is_creating}
                disabled={is_creating}
                className={"mt-3"}
                type={"submit"}
                onClick={() => verifyCode()}
              />
            </div>
          </div>

          <div className={"d-flex flex-column align-items-center mt-4"}>
            <div className={"mt-3"}>
              <span className={"small-paragraph grey-color"}>
                Didn't receive a link? &nbsp;
              </span>

              <div
                className="text-align-center"
                onClick={resendVisible ? resendCode : ""}
              >
                <span
                  className={`${
                    resendVisible ? "disabled" : "forgot-password"
                  } small-paragraph "text-align-center"`}
                >
                  Resend it
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;
