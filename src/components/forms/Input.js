import React from "react";


export const FormInput = ({label, required,className, value,placeholder, name,disabled, type, onChange}) =>{
  return(
    <>
      <label className={'label small-paragraph grey-color mb-2'}>{label}</label>
      <input className={`primary-input ${className}`} required={required} type={type} value={value} placeholder={placeholder} disabled={disabled} name={name} onChange={(e)=>onChange(e)}/>
    </>
  )
};