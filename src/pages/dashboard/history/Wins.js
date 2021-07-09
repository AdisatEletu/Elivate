import React from "react";
import {winsData} from "../../../utils/mock";
import {RaffleCard} from "../../home/components/RaffleCards";

const  Win =()=>{
  return (
    <div className={"card-grid mt-4 padding-15px margin-bottom-80"}>
      {winsData.map((raffle, index) =>
        <RaffleCard  key={index}
                     raffle={raffle}
        />
      )}
    </div>
  )
};

export default Win