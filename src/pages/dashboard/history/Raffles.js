import React from "react";
import {RaffleCard} from "../../home/components/RaffleCards";
import {expiredData} from "../../../utils/mock";


const Raffles = () => {
  return (
    <div className={"card-grid mt-4 padding-15px margin-bottom-80"}>
      {expiredData.map((raffle, index) =>
        <RaffleCard key={index} description={raffle.description}
                    timer={raffle.timer}
                    status={raffle.status}
                    charity={raffle.charity}
                    ticket={raffle.ticket}
                    stacked={false}
                    profile={true}
                    ended={raffle.ended}
                    title={raffle.title}
                    imgUrl={raffle.imgUrl}
        />
      )}
    </div>
  )
};

export default Raffles