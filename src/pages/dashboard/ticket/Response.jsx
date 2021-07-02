import React, {useEffect} from "react";
import {getRequest} from '../../../helpers/requests.js'

const Response = (props) => {
const ref = props.match.params

console.log({props},props.location.search)

    const getReference = async()=>{
       try {
        const res = await getRequest(`/customer/payment/callback?trxref=${ref.trxref}&reference=${ref.trxref}`);
        if(res){
            console.log("finished")
            console.log(res)
        }
       } catch (error) {
          console.log({error}) 
       }
    }
    useEffect(() => {
      getReference()
    }, [])


    return(
        <div>
            Payment Successful
        </div>
    )
};

export default Response;