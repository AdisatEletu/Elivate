import React from "react";


export const FormButton = ({type, title, onClick, className, disabled}) =>{
  return(
    <>
      <button type={type} className={`${className} title2 text-align-center primary-button`} disabled={disabled} onClick={onClick? onClick : null}>{title}</button>
    </>
  )
};