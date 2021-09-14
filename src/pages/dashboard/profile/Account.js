import React, { useState } from "react";
import { doAlert } from "../../../components/alert/AlertComponent";
import { FormInput } from "../../../components/forms/Input";
import handleError from "../../../helpers/handleError";
import { putRequest } from "../../../helpers/requests";
import { logoutUser, setCurrentUser } from "../../../redux/actions/authActions";
import { connect } from "react-redux";
import { UploadImage } from "../../../components/PhotoUploader";

import img from "../../../assets/default-profile.jpeg";
import { message, Popconfirm } from "antd";
import Axios from "axios";
const Account = ({ profileDetails, setCurrentUser, logoutUser }) => {
  const [activeBtn, setActiveBtn] = useState(false);
  const [saving, setSaving] = useState(false);
  const [input, setInput] = useState({
    fname: profileDetails.first_name || "",
    lname: profileDetails.last_name || "",
    uname: profileDetails.username || "",
    email: profileDetails.email || "",
    phone: profileDetails.phone_number || "",
  });
  const [, setImage] = useState(profileDetails.image_thumbnail_url);
  const handleChange = (e) => {
    setActiveBtn(true);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSuccess = () => {
    doAlert("successfully deleted account");
    logoutUser();
  };

  const deleteUser = async () => {
    try {
      const { data } = await Axios.delete("/customer/remove");
      if (data.success) {
        return handleSuccess();
      }
      message.error("can't delete this account, you have an active raffle");
    } catch (error) {
      message.error("can't delete this account, you have an active raffle");
    }
  };

  const handleSubmit = async (e) => {
    setSaving(true);
    try {
      e.preventDefault();
      let q = {
        first_name: input.fname,
        last_name: input.lname,
      };

      const { data, success } = await putRequest("/customer/profile", q);
      if (success) {
        // await getUser();
        localStorage.setItem("user", JSON.stringify(data));
        doAlert("succefully updated", "success");
        setCurrentUser(data);
      }
      setSaving(false);
    } catch (error) {
      setSaving(true);
      handleError(error);
    }
  };

  return (
    <div className={"profile-card "}>
      <div className={"mt-5 d-flex flex-column align-items-center"}>
        <UploadImage
          url={"/customer/profile/avatar"}
          photo={profileDetails.image_thumbnail_url || img}
          text={"Change Photo"}
          updatingText={"Changing Photo"}
          setImage={setImage}
        />

        <div className={"card-grid col-md-10 mt-5"}>
          <div>
            <FormInput
              label={"First name"}
              value={input.fname}
              name="fname"
              onChange={handleChange}
            />
          </div>
          <div>
            <FormInput
              label={"Last name"}
              value={input.lname}
              name="lname"
              onChange={handleChange}
            />
          </div>
          <div>
            <FormInput
              label={"Username"}
              value={input.uname}
              name="uname"
              disabled
              onChange={handleChange}
            />
          </div>
          <div>
            <FormInput
              label={"Email Address"}
              value={input.email}
              name="email"
              disabled
              onChange={handleChange}
            />
          </div>
          <div>
            <FormInput
              label={"Phone number"}
              value={input.phone}
              disabled
              name="phone"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className={"d-flex justify-content-center mt-5"}>
        <div className={"grid-70-30 col-md-10"}>
          <div className={"small-paragraph grey-color"}>
            You cannot edit your username, email address and phone number
          </div>
          <div
            className={
              activeBtn
                ? "primary-button pointer d-flex align-items-center justify-content-center"
                : "disabled-btn"
            }
            onClick={handleSubmit}
          >
            {saving ? "Saving..." : "Save changes"}
          </div>
        </div>
      </div>
      <hr />
      <div
        className={"d-flex justify-content-center mt-5 mb-5 align-items-center"}
      >
        <div className={"grid-70-30 col-md-10"}>
          <div className={""}>
            <div className={"danger-color title1"}>Danger Zone</div>
            <div className={"grey-color paragraph"}>
              Please note that if any of your workspaces or bases are shared
              with other people, deleting your account will NOT delete those
              workspaces and bases.
            </div>
          </div>
          <Popconfirm
            onConfirm={deleteUser}
            okText={"Delete"}
            cancelText={"Cancel"}
          >
            <div className={"danger-bg-color danger-btn white-color"}>
              Delete account
            </div>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { setCurrentUser, logoutUser })(
  Account
);
