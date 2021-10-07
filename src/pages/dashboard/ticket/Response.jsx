import React, { useEffect, useState } from "react";
import { Card } from "reactstrap";
import { FormButton } from "../../../components/forms/Button.js";
import { PageLoader } from "../../../components/Loaders.js";
import { getRequest } from "../../../helpers/requests.js";
import {getUser} from "../../../redux/actions/authActions";
import { useDispatch } from "react-redux";

const Response = (props) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const getReference = async () => {
    const qString = props.location.search.split("=");
    const ref = qString[1];

    try {
      const res = await getRequest(
        `/customer/payment/callback?trxref=${ref}&reference=${ref}`
      );
      if (res.success) {
        dispatch(getUser());
        setSuccess(true);
      }
      setLoading(false);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    getReference();
  }, []);

  if(loading){
      return <PageLoader/>
  }
  return (
    <div>
      {success && !loading? (
        <div>
          <Card className='d-flex align-items-center justify-content-center p-5'>
            <img
              src={require("../../../assets/check2.png")}
              alt="icon"
              width={200}
            />
            <div className={"bigTitle green-color"}>
              Token successfully purchased!
            </div>
            <div className={"paragraph grey-color mt-4"}>
              Payment was Successful, check your email for receipt
            </div>
            <div className="col-md-3 mt-5">
              <FormButton
                title="Return to tokens"
                onClick={() => (window.location.href = "/tickets")}
                className="primary-button"
              />
            </div>
          </Card>
        </div>
      ) : (
        <div> <Card className='d-flex align-items-center justify-content-center p-5'>
        <img
          src={require("../../../assets/failed.png")}
          alt="icon"
          width={200}
        />
        <div className={"bigTitle red-color"}>
          Token purchase Failed!
        </div>
        <div className={"paragraph grey-color mt-4"}>
          This payment was not successful.
        </div>
        <div className="col-md-3 mt-5">
          <FormButton
            title="Return to tickets"
            onClick={() => (window.location.href = "/tickets")}
            className="primary-button"
          />
        </div>
      </Card>
      </div>
      )}
    </div>
  );
};

export default Response;
