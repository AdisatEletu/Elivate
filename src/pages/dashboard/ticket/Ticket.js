import React from "react";
import {FormInput} from "../../../components/forms/Input";

const Ticket = () => {
  return (
    <div>
      <div className={'profile-card'}>
        <div className={'header3 mb-3 mt-3 fw-bold'}>Purchase raffle tickets</div>
        <div className={'ticket-m'}>
          <div className={'ticket-grid mb-5'}>
            <div className={'ticket-card justify-content-around d-flex flex-column align-items-center'}>
              <div className={'text-align-center'}>
                <img alt={'icon'} src={require('../../../assets/icons/cinema 1.svg')}/>
                <div>
                  <span className={'fw-bold title1'}>40</span>&nbsp;<span className={'small-paragraph'}>Tickets</span>
                </div>
              </div>
              <div className={'ticket-button d-flex align-items-center justify-content-center'}>
                Buy &#8358; 4000
              </div>
            </div>
            <div className={'ticket-card justify-content-around d-flex flex-column align-items-center'}>
              <div className={'text-align-center'}>
                <img alt={'icon'} src={require('../../../assets/icons/cinema 1.svg')}/>
                <div>
                  <span className={'fw-bold title1'}>40</span>&nbsp;<span className={'small-paragraph'}>Tickets</span>
                </div>
              </div>
              <div className={'ticket-button d-flex align-items-center justify-content-center'}>
                Buy &#8358; 4000
              </div>
            </div>
            <div className={'ticket-card justify-content-around d-flex flex-column align-items-center'}>
              <div className={'text-align-center'}>
                <img alt={'icon'} src={require('../../../assets/icons/cinema 1.svg')}/>
                <div>
                  <span className={'fw-bold title1'}>40</span>&nbsp;<span className={'small-paragraph'}>Tickets</span>
                </div>
              </div>
              <div className={'ticket-button d-flex align-items-center justify-content-center'}>
                Buy &#8358; 4000
              </div>
            </div>
            <div className={'ticket-card justify-content-around d-flex flex-column align-items-center'}>
              <div className={'text-align-center'}>
                <img alt={'icon'} src={require('../../../assets/icons/cinema 1.svg')}/>
                <div>
                  <span className={'fw-bold title1'}>40</span>&nbsp;<span className={'small-paragraph'}>Tickets</span>
                </div>
              </div>
              <div className={'ticket-button d-flex align-items-center justify-content-center'}>
                Buy &#8358; 4000
              </div>
            </div>
            <div className={'ticket-card justify-content-around d-flex flex-column align-items-center'}>
              <div className={'text-align-center'}>
                <img alt={'icon'} src={require('../../../assets/icons/cinema 1.svg')}/>
                <div>
                  <span className={'fw-bold title1'}>40</span>&nbsp;<span className={'small-paragraph'}>Tickets</span>
                </div>
              </div>
              <div className={'ticket-button d-flex align-items-center justify-content-center'}>
                Buy &#8358; 4000
              </div>
            </div>
          </div>
        </div>
        <hr/>
        
        <div className={'mt-5'}>
          <div className={'header3 mb-3 mt-3 fw-bold'}>Use Voucher Codes</div>
          <div className={'m-flex align-items-center'}>
            <div className={'col-md-9'}>
              <FormInput label={'Enter voucher code'} className={"mt-2"}/>
            </div>
            <div className={'grey-color disabled-btn m-mt-1 col-md-1 margin-top-2 ml-5px col-md-1'}>Send</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Ticket