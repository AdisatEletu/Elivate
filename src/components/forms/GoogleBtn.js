import React, {useState} from "react";
import axios from "axios";
import Modal from "antd/lib/modal/Modal";
import PhoneNumberUpdate from "../../pages/auth/signup/PhoneNumberUpdate";
import { getRequest } from "../../helpers/requests";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/actions/authActions";
import { useHistory } from 'react-router-dom';
export const GoogleButton = ({type, title,className}) =>{

  const dispatch = useDispatch();
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const loginUserWithId =async(id)=>{
    setLoading(true)
    try {
      const {data, success} = await getRequest(`/customer/google-login?google_id=${id}`)
      
      if(success && data?.data?.verify_phone_number){
        setShow(true)
      }if(success){
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.token}`;

        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token",data.token);
        localStorage.setItem('google_id', data?.google_id)
        dispatch(setCurrentUser(data));
      }else{
        localStorage.removeItem('google_id');
        getSocialAuth()
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  const getSocialAuth =async()=>{
    const google_id = localStorage.getItem('google_id');
    try {
      if(google_id){
        return loginUserWithId(google_id)
      }
      const {data, success} = await getRequest('/customer/google-login')
      if(success){
        window.open(data?.authorize_url, "_blank")
      }
    } catch (error) {
      console.log({error})
    }
   
  }


  return(
    <>
      <button disabled={loading} type={type} className={`${className}  paragraph-bold text-align-center primary-border-button`} onClick={getSocialAuth}><img alt={'google-favicon'} width={20} height={20} src={require('../../assets/Google-favicon-2015.png')} className={'margin-right-10'}/><span className={''}>{loading ? "Loading.." : title}</span></button>
   <Modal visible={show} footer={null} onCancel={()=>setShow(false)}>
      <PhoneNumberUpdate/>
   </Modal>
    </>
  )
}