import React, {useState} from "react";
import axios from "axios";
import Modal from "antd/lib/modal/Modal";
import PhoneNumberUpdate from "../../pages/auth/signup/PhoneNumberUpdate";
import { getRequest } from "../../helpers/requests";


export const GoogleButton = ({type, title, onSubmit, className}) =>{

  const [show, setShow] = useState(false)
  const loginUserWithId =async(id)=>{
    try {
      const {data} = await axios.get(`/customer/google-login?google_id=${id}`)
      if(data?.data?.verify_phone_number){
        setShow(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getSocialAuth =async()=>{
    const google_id = localStorage.getItem('social_id');
    try {
      // if(google_id){
      //   return loginUserWithId(google_id)
      // }
      const {data, success} = await getRequest('/customer/google-login')
      console.log({data})
      if(success){
        console.log("in here")
        window.open(data?.authorize_url, "_blank")
      }
    } catch (error) {
      console.log({error})
    }
   
  }


  return(
    <>
      <button type={type} className={`${className}  paragraph-bold text-align-center primary-border-button`} onClick={getSocialAuth}><img alt={'google-favicon'} width={20} height={20} src={require('../../assets/Google-favicon-2015.png')} className={'margin-right-10'}/><span className={''}>{title}</span></button>
   <Modal visible={show} footer={null} onCancel={()=>setShow(false)}>
      <PhoneNumberUpdate/>
   </Modal>
    </>
  )
};