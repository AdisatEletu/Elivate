import React from "react";


export const FormInput = ({label, className, value, name, type, onChange}) =>{
  return(
    <>
      <label className={'label small-paragraph grey-color mb-2'}>{label}</label>
      <input className={`primary-input ${className}`} type={type} value={value} name={name} onChange={(e)=>onChange(e.target.value)}/>
    </>
  )
};