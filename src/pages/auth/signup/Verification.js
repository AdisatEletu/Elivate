import React, {useEffect, useState } from "react";
import { FormButton } from "../../../components/forms/Button";
import VerificationForm from "./VerificationForm";
import { Modal } from 'antd';
import PhoneNumberUpdate from './PhoneNumberUpdate';
import { postRequest } from "../../../helper/request";
import { doAlert } from "../../../components/alert/AlertComponent";
const Verification = () => {
  const [form, setForm] = useState(false);
  const [show, setShow] = useState(false);
  const [resendVisible, setResendVisible] = useState(false)

  const resendCode = async() =>{

    const phone_number = localStorage.getItem('phone_number')
    try {
      const { success} = postRequest(`/customer/resend-code`, {phone_number});
      if(success){
        setShow(false);
        doAlert('Code resent!')
        setResendVisible(false)
      }else{
        doAlert("Couldn't resend a code at this time.")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const setResendTimeout =()=>{
    setTimeout(()=>{
      setResendVisible(true)
    }, 2000)
  }

  useEffect(()=>{
    setResendTimeout()
  },[resendVisible])
  return (
    <>
      {form ? (
        <VerificationForm />
      ) : (
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
                "d-flex align-items-center justify-content-center flex-column mt-5 col-md-4"
              }
            >
              <div className={"d-flex align-items-center flex-column"}>
                <div>
                  <img
                    alt={"elivate logo"}
                    src={require("../../../assets/messageIcon.png")}
                  />
                </div>
                <div className={"bigTitle text-align-center"}>
                  We've sent a code
                </div>
                <div className={"paragraph text-align-center grey-color"}>
                  Please check your phone and enter the received code to
                  complete your account set up.
                </div>
              </div>
              <div className={" col-md-6 mt-4"}>
                <FormButton
                  title={"Done"}
                  className={"mt-3"}
                  onClick={() => setForm(true)}
                  type={"submit"}
                />
              </div>

              <div className={"d-flex flex-column align-items-center mt-4"}>
                <div className={"mt-3"}>
                  <span className={"small-paragraph grey-color"}>
                    Didn't receive a code? &nbsp;
                  </span>
                  <div className="text-align-center" onClick={resendVisible ? resendCode : ''}>
                    <span className={`${resendVisible ? 'disabled' : 'forgot-password'} small-paragraph "text-align-center"`}>
                      Resend it
                    </span>
                  </div>
                </div>
                <div className={"mt-3"}>
                  <span className={"small-paragraph grey-color"}>
                    Wrong Phone Number? &nbsp;
                  </span>
                  <div className="text-align-center" onClick={()=> setShow(true)}>
                    <span className={"forgot-password small-paragraph"}>
                      Change it
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal visible={show} footer={null} onCancel={() => setShow(false)}>
            <PhoneNumberUpdate />
          </Modal>
        </div>
      )}
    </>
  );
};

export default Verification;
