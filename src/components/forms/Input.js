import React from "react";


export const FormInput = ({label, className, value, name,disabled, type, onChange}) =>{
  return(
    <>
      <label className={'label small-paragraph grey-color mb-2'}>{label}</label>
      <input className={`primary-input ${className}`} type={type} value={value} disabled={disabled} name={name} onChange={(e)=>onChange(e)}/>
    </>
  )
};