import React, { useEffect } from "react";
import { FormInput } from "../../../components/forms/Input";
import { usePaystackPayment } from "react-paystack";
import { useTicket } from "./useTicket";
import { connect } from "react-redux";
import { EmptyData } from "../../../components/EmptyData";

const Ticket = ({ user }) => {
  const {
    fetchTickets,
    fetching,
    tickets,
    onClose,
    setAmount,
    onSuccess,
    config,
    buyTickets
  } = useTicket({user});


  useEffect(() => {
    fetchTickets();
  }, [user]);

  const initializePayment = usePaystackPayment(config);


  return (
    <div>
      <div className={"profile-card"}>
        <div className={"header3 mb-3 mt-3 fw-bold"}>
          Purchase raffle tickets
        </div>
        {fetching
          ? "...Loading"
          : tickets.length > 0 ?
         
              <div className={"ticket-m"} >
                <div className={"ticket-grid mb-5"}>
                {tickets.map((ticket, index) => (
                  <div
                    className={
                      "ticket-card justify-content-around d-flex flex-column align-items-center"
                    }
                    key={ticket.uuid} onLoad={()=>setAmount(ticket.amount)}
                  >
                    <div className={"text-align-center"}>
                      <img
                        alt={"icon"}
                        src={require("../../../assets/icons/cinema 1.svg")}
                      />
                      <div>
                        <span className={"fw-bold title1"}>
                          {ticket.num_of_tickets}
                        </span>
                        &nbsp;
                        <span className={"small-paragraph"}>Tickets</span>
                      </div>
                    </div>
                    {ticket.bonus && (
                      <div className="bonus">{`+${ticket.bonus} bonus`}</div>
                    )}
                    <div
                      className={
                        "ticket-button d-flex align-items-center justify-content-center pointer"
                      }
                      onClick={() => {
                      buyTickets(ticket.id)
                      }}
                    >
                      Buy &#8358; {ticket.amount}
                    </div>
                  </div>
                
                ))}</div> 
              </div>
           : <EmptyData/>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Ticket);
