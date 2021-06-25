import React from "react";

export const FormButton = ({type, title, onClick, className, disabled, loading}) =>{
  return(
    <>
      <button type={type} disabled={loading} className={`${className} title2 text-align-center primary-button`} disabled={disabled} onClick={onClick? onClick : null}>{loading ? "Loading...": title}</button>
    </>
  )
};