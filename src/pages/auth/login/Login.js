import React, { useState } from "react";
import { connect } from "react-redux";
import "../../../index.css";
import { FormInput } from "../../../components/forms/Input";
import { FormButton } from "../../../components/forms/Button";
import { GoogleButton } from "../../../components/forms/GoogleBtn";
import { NavLink } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import axios from "axios";

import { loginUser } from "../../../redux/actions/authActions";

const Login = (props) => {
  const [formState, setFormState] = useState();
  const [input, setInput] = useState({
    email: "".trim(),
    password: "",
  });

  console.log(input.email)
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAuth(input.email, input.password);
  };

  return (
    <>
      {formState === "forgotPassword" ? (
        <ForgotPassword setFormState={setFormState} />
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
          {/*<div className={'overlay'}/>*/}
          <div className={"d-flex align-items-center flex-column min-height-100vh"}>
            <div
              className={
                "d-flex align-items-center flex-column fullheight  col-md-4"
              }
            >
              <div className={"d-flex align-items-center flex-column"}>
                <div>
                  <img
                    alt={"elivate logo"}
                    src={require("../../../assets/Elivate9ja/Elivat9ja_Logo_Asset_PNG.png")}
                    width={"114.1px"}
                    height={"80px"}
                  />
                </div>
                <div className={"bigTitle text-align-center"}>
                  Hey, Welcome Back.
                </div>
                <div className={"paragraph text-align-center grey-color"}>
                  It’s good to have you back, enter the email address you used
                  for registration with the right password.
                </div>
              </div>
              <div className={"form-holder fullwidth mt-4"}>
                <div className={"title2 text-align-center"}>
                  Log In to your account
                </div>

                <form className={"mt-4"} onSubmit={handleSubmit}>
                  <FormInput
                    className={"mb-3"}
                    type={"email"}
                    label={"Email Address"}
                    value={input.email}
                    name="email"
                    onChange={handleChange}
                  />
                  <FormInput
                    className={"mb-3"}
                    type={"password"}
                    label={"Password"}
                    value={input.password}
                    name="password"
                    onChange={handleChange}
                  />
                  <FormButton
                    title={"Log In"}
                    className={"mt-3"}
              
                    type={"submit"}
                    disabled={props.isLoggingIn}
                    loading={props.isLoggingIn}
                  />
                  <div className={"col-md-12 hr-holder mt-4 "}>
                    <div className={"col-md-4 hr"} />
                    <div
                      className={
                        "small-paragraph col-md-4 text-align-center grey-color"
                      }
                    >
                      or sign in with
                    </div>
                    <div className={"col-md-4 hr"} />
                  </div>
                  <GoogleButton title={"Google"} />
                </form>
              </div>

              <div className={"d-flex flex-column align-items-center mt-3"}>
                <div
                  className={"forgot-password small-paragraph-bold"}
                  onClick={() => setFormState("forgotPassword")}
                >
                  Forgot Password?
                </div>
                <div>
                  <span className={"small-paragraph grey-color"}>
                    Have an account yet? &nbsp;
                  </span>
                  <NavLink to={"/signup"}>
                    <span className={"forgot-password small-paragraph-bold"}>
                      Sign Up
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(loginUser(email, password)),
  };
};

const matchStateToProps =(state)=>{
  return{
    isLoggingIn: state.auth.isLoggingIn
  }
}

export default connect(matchStateToProps, mapDispatchToProps)(Login, axios);
