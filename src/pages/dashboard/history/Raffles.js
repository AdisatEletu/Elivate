import React from "react";
import {RaffleCard} from "../../home/components/RaffleCards";
import {expiredData} from "../../../utils/mock";


const Raffles = () => {
  return (
    <div className={"card-grid mt-4 padding-15px margin-bottom-80"}>
      {expiredData.map((raffle, index) =>
        <RaffleCard  key={index}
                     raffle={raffle}
        />
      )}
    </div>
  )
};

export default Raffles