import React, { useState } from "react";
import { doAlert } from "../../../components/alert/AlertComponent";
import { FormInput } from "../../../components/forms/Input";
import { putRequest } from "../../../helpers/requests";
import handleError from "../../../helpers/handleError";

const Password = () => {
  const [activeBtn, setActiveBtn] = useState(false);
  const [saving, setSaving] = useState(false);
  const [input, setInput] = useState({
    oldPassword: "",
    currentPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setActiveBtn(true);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setSaving(true);
    try {
      e.preventDefault();
      let q = {
        old_password: input.oldPassword,
        new_password: input.currentPassword,
      };

      if (input.currentPassword !== input.confirmPassword) {
        return doAlert("Ensure your password matches.");
      }

      const res = await putRequest(
        "/customer/password/change",
        q
      );

      const { data, success, message } = res
      if (success) {
        doAlert("succefully updated password", "success");
      } else {
        doAlert(res.error.response.data.message);
      }
      setSaving(false);
    } catch (error) {
      console.log(error);
      setSaving(true);
      handleError(error);
    }
  };
  return (
    <div className={"Password-card  padding-5"}>
      <div className={"mt-5 d-flex flex-column"}>
        <div className={"profile-card-grid mt-5"}>
          <div>
            <FormInput
              label={"Enter current password"}
              name="oldPassword"
              type={"password"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={"profile-card-grid mt-4"}>
          <div>
            <FormInput
              label={"New password"}
              name="currentPassword"
              type="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <FormInput
              label={"Confirm password"}
              name="confirmPassword"
              type="password"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className={" mt-5 col-md-3 float-right"}>
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
  );
};

export default Password;
