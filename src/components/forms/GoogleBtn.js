import React from "react";


export const GoogleButton = ({type, title, onSubmit, className}) =>{
  return(
    <>
      <button type={type} className={`${className} paragraph-bold text-align-center primary-border-button`} onSubmit={onSubmit? onSubmit : null}><img alt={'google-favicon'} width={20} height={20} src={require('../../assets/Google-favicon-2015.png')} className={'margin-right-10'}/><span className={''}>{title}</span></button>
    </>
  )
};