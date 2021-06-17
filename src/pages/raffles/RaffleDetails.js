import React from "react";
import {RaffleTimer} from "../home/components/RaffleTimer";
import {WatchlistBtn} from "../home/components/WatchlistBtn";
import Details from "./Details";
import {RaffleCard} from "../home/components/RaffleCards";
import {raffleData} from "../../utils/mock";

const RaffleDetails = () =>{
  
  
  const onClickRaffle = (id) =>{
    window.location.href=`/raffles/${id}/details`
  };
  return(
    <div>
      <div className={'raffle-details m-flex col-md-12 light-blue-bg p-3'}>
        <div className={'col-md-6 raffle-details-image'} style={{backgroundImage: `url(${require('../../assets/Ninetindo.png')})`, backgroundRepeat: 'no-repeat'}}>
        
        </div>
          <div className={'col-md-6 d-flex flex-column justify-content-center p-5 m-text-align-center'}>
            <div className={'bigTitle m-fs-24'}>
              Nintendo Switch
            </div>
            <div className={"paragraph grey-color m-mt-1"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </div>
            <div className={'col-md-7 mt-5'}>
              <RaffleTimer timer={'1 hr : 30 mins : 27 sec'} className={'raffle-card-button'} black/>
            </div>
            <div className={'mt-5'}>
              <WatchlistBtn/>
            </div>
        
        </div>
      </div>
      <div>
        <Details/>
      </div>
      
      <div className={'mt-6'}>
        <div className={'bigTitle'}>You may also be interested in</div>
        <div className={'mt-4 card-grid'}>
          {raffleData.map((raffle, index) =>
            <RaffleCard key={index} description={raffle.description}
                        timer={raffle.timer}
                        status={raffle.status}
                        charity={raffle.charity}
                        ticket={raffle.ticket}
                        title={raffle.title}
                        imgUrl={raffle.imgUrl}
                        onClick={onClickRaffle}
            />
          )}
        </div>
      </div>
    </div>
  )
};
export default RaffleDetails