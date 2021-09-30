import React from "react";
import axios from "axios";


export const GoogleButton = ({type, title, onSubmit, className}) =>{
  const getSocialAuth =async()=>{
    try {
      const res = await axios.get('/customer/google-login')
      console.log({res})
    } catch (error) {
      
    }
   
  }
  return(
    <>
      <button type={type} className={`${className}  paragraph-bold text-align-center primary-border-button`} onClick={getSocialAuth}><img alt={'google-favicon'} width={20} height={20} src={require('../../assets/Google-favicon-2015.png')} className={'margin-right-10'}/><span className={''}>{title}</span></button>
    </>
  )
};