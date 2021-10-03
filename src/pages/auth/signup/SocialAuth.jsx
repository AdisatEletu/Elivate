import React, { useEffect, useState } from "react";
import { PageLoader } from "../../../components/Loaders";
import { getRequest } from "../../../helpers/requests";
import { useHistory } from 'react-router-dom';

import { Modal } from 'antd';
import PhoneNumberUpdate from './PhoneNumberUpdate';
const SocialAuth = (props) => {
  console.log(props);

  //state

  const [isLoading, setIsLoading] = useState();
  const [show, setShow] = useState(false);

  const history = useHistory();
  const q = props.location.search;

  const getStatus = async () => {
      setIsLoading(true)
    try {
      const { data, success, message } = await getRequest(`/customer/google-login-callback${q}`);
   
     if(success && data?.verify_phone_number){
         localStorage.setItem('social_email', data?.email)
         localStorage.setItem('social_id', data?.id_2)
        setShow(true)
      }
      setIsLoading(false)
    } catch (error) {
        setIsLoading(false)
      console.log(error.data);
    }
  };
  useEffect(() => {
    getStatus();
  }, []);

  if(isLoading) return <PageLoader />
  return (
    <div className="height-100vh align-items-center justify-content-center">
    
      <Modal visible={show} footer={null} onCancel={() => setShow(false)}>
            <PhoneNumberUpdate />
          </Modal>
    </div>
  );
};

export default SocialAuth;
