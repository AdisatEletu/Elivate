import React from "react";
import {winsData} from "../../../utils/mock";
import {RaffleCard} from "../../home/components/RaffleCards";

const  Win =()=>{
  return (
    <div className={"card-grid mt-4 padding-15px margin-bottom-80"}>
      {winsData.map((raffle, index) =>
        <RaffleCard key={index} description={raffle.description}
                    timer={raffle.timer}
                    status={raffle.status}
                    charity={raffle.charity}
                    ticket={raffle.ticket}
                    stacked={false}
                    profile={true}
                    winner = {raffle.winner}
                    ended={raffle.ended}
                    title={raffle.title}
                    imgUrl={raffle.imgUrl}
        />
      )}
    </div>
  )
};

export default Win