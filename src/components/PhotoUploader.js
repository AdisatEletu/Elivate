import React, { useRef, useState } from "react";
import { postRequest } from "../helpers/requests";
import handleError from "../helpers/handleError";
import { ProgressBar } from "react-bootstrap";
import { fallbackResolver, ternaryResolver } from "../utils/helpers.utils";
import { setCurrentUser } from "../redux/actions/authActions";
import { connect } from "react-redux";
import image from "../assets/image 37.png";
export const progressOptionsResolver = (setPercent) => ({
  onUploadProgress: (progressEvent) => {
    const { loaded, total } = progressEvent;

    let percent = Math.floor((loaded * 100) / total);

    if (percent) {
      setPercent(percent);
    }
  },
});

export const UploadImage = ({
  url,
  photo,
  text,
  setImage,
  setCurrentUser,
}) => {
  const myRef = useRef(null);

  //states

  const [updatingPhoto, setUpdatingPhoto] = useState(false);
  const [profile, setProfile] = useState(photo);
  const [percentage, setPercent] = useState(0);

  const updateProfilePicture = async (picture) => {
    try {
      setUpdatingPhoto(true);
      const fd = new FormData();

      fd.append("avatar", picture, picture.name);

      const options = progressOptionsResolver(setPercent);

      const res = await postRequest(`${url}`, fd, options);
      if (res.success) {
        localStorage.user = JSON.stringify(res.data);
        setCurrentUser(res.data);
        setProfile(res?.data?.image_thumbnail_url);
        setImage(res?.data?.image_thumbnail_url);
        // if (typeof storeLogo === "function") {
        //   await storeLogo(res.data);
        // }
        setUpdatingPhoto(false);
        setTimeout(() => {
          setPercent(0);
        }, 1000);
      }
      setUpdatingPhoto(false);
    } catch (e) {
      handleError(e);
      setUpdatingPhoto(false);
    }
  };

  const onChangeHandler = async (e) => {
    await updateProfilePicture(e.target.files[0]);
  };

  const triggerClick = () => {
    myRef.current.click();
  };

  return (
    <div className="row" data-testid={"upload-test"}>
      <div className="col-md-12">
        <div className="form-group d-flex align-center flex-column justify-content-center">
          <div className={"profile-holder "}>
            <img
              src={fallbackResolver(`${profile}`, image)}
              alt={""}
              width={120}
              height={100}
              className={"br-50"}
            />
          </div>
          <input
            type={"file"}
            className={"o"}
            ref={myRef}
            style={{ display: "none" }}
            accept={"image/*"}
            onChange={onChangeHandler}
          />
          <div className={"d-flex col-md-12 justify-content-center padding-0"}>
            {ternaryResolver(
              percentage > 0,
              <ProgressBar
                now={percentage}
                label={`${percentage}%`}
                className={"col-md-7 padding-0 mt-3"}
              />,
              null
            )}
          </div>
          {updatingPhoto ? (
            ""
          ) : (
            <button
              style={{
                height: "40px",
                backgroundColor: "#356D00",
                color: "#fff",
              }}
              className={"btn  mt-2"}
              onClick={triggerClick}
            >
              {text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { setCurrentUser })(UploadImage);
