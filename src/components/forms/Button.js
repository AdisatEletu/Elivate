import React from "react";

export const FormButton = ({ type, title, onClick, className }) => {
  return (
    <>
      <button
        type={type}
        className={`${className} title2 text-align-center primary-button`}
        style={{ fontSize: "small" }}
        onClick={onClick ? onClick : null}
      >
        {title}
      </button>
    </>
  );
};
