import React, {useState, useEffect} from "react";
import {RaffleCard} from "../../home/components/RaffleCards";
import { useCustomerRaffle } from "./useHistory";



const Raffles = () => {

  const {raffles, getRaffles} = useCustomerRaffle();
  const [activePage, setActivePage] = useState(1)

  useEffect(() => {
    getRaffles()
  }, [activePage])
  return (
    <div className={"card-grid mt-4 padding-15px margin-bottom-80"}>
      {raffles.map((raffle, index) =>
        <RaffleCard  key={index}
                     raffle={raffle}
        />
      )}
    </div>
  )
};

export default Raffles