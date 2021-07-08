import React, { useState } from "react";
import {RaffleTimer} from "./RaffleTimer";
import {WatchlistBtn} from "./WatchlistBtn";
import {Ticket} from "./Ticket";
import {bool, func, string} from "prop-types";
import { postRequest,deleteRequest } from "../../../helpers/requests";
import handleError from "../../../helpers/handleError";
import { doAlert } from "../../../components/alert/AlertComponent";
import axios from "axios";
import { useRaffle } from "../../raffles/useRaffle";

export const RaffleCard = ({imgUrl, title, ticket, description,status, timer,onClick, charity, profile, winner, stacked, raffle}) => {
  const {getRaffles} = useRaffle()

  const ended = raffle.start_date <= new Date().now;


  const [adding, setAdding] = useState(false);
  const [creating, setCreating] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [watchlist, setWatchlist] = useState(raffle.in_watchlist)

  const handleAddWatchlist =async ()=>{
    try{
      setAdding(true)
      const {success} = await postRequest('/customer/watchlist', {raffle_id: raffle.id})
      
      if(success){
       
        setWatchlist(true)
       await getRaffles()
       doAlert('successfully Added to watchlist', "success")
     
      }
      setAdding(false)
    }catch(e){
      handleError(e)
      setAdding(false)
    }
  }

  const handleRemoveWatchlist =async ()=>{
    try{
      setRemoving(true)
      const res= await axios.delete(`/customer/watchlist/${raffle.id}`)

      setWatchlist(false)
      
      if(res.success){
       doAlert('successfully removed from watchlist', "success")
      }
      setRemoving(false)
    }catch(e){
      handleError(e)
    }
  }

  console.log({watchlist})

  const handleEnterRaffle =async ()=>{
    try{
      setCreating(true)
      const {data,success, error} = await postRequest(`/customer/raffle/${raffle.id}` )
  
      if(success){
       doAlert('successfully entered raffle', "success")
       
      }else{
        doAlert(error.response.data.message, "error")
      }
      setCreating(false)
    }catch(e){
      handleError(e)
    }
  }

  return (
    <div className={'raffle-card-holder justify-content-between m-flex col-md-12 pointer'}>
      <div className={'col-md-4'}>
        <img src={(raffle.image_url)} className={'raffle-image'}/>
        <div className={'raffle-image'} style={{backgroundImage: `url(${imgUrl})`}}>
          <Ticket ticket={ticket} className={'display-none'}/>
  
          {charity ?
            <img alt={'charity'} className={'charity-icon'} src={require('../../../assets/icons/charity.svg')}/>
            : ''}
        </div>
      </div>
      <div className={'col-md-7'}>
        <div className={'m-flex height-100px m-display-none justify-content-between'}>
          <div className={'title2 mt-5 m-display-none'}>{title}</div>
          <Ticket ticket={ticket}/>
        </div>
        <div className={'padding-right-15'}>
          <div className={`title2 mt-5 display-none`}>{title}</div>
          <div className={`${stacked ? 'small-paragraph mt-3' : 'small-paragraph mt-3'}`}>{description}</div>
          <div className={'mt-3'}>
            <RaffleTimer  winner={winner} black stacked={stacked} ended={ended} profile={profile} className={'raffle-card-button'} timer={raffle?.end_date}/>
          </div>
          <div className={'mt-3'}>
            <WatchlistBtn adding={adding} removing={removing} creating={creating} ended={ended} handleRemoveWatchlist={handleRemoveWatchlist} watchlist={watchlist} handleEnterRaffle={handleEnterRaffle} handleAddWatchlist={handleAddWatchlist} fullwidth status={status}/>
          </div>
        </div>
      </div>
    </div>
  )
};

RaffleCard.prototype={
  imgUrl: string,
  title: string,
  ticket: string,
  description: string,
  status: string,
  timer:string,
  onClick: func,
  charity: bool,
  profile: bool,
  stacked: bool,
  ended: bool
};

RaffleCard.defaultProps={
  imgUrl: '',
  title: "",
  ticket: "",
  description: "",
  status: "watchlist",
  timer: "",
  onClick: func,
  charity: false,
  profile: false,
  stacked: false,
  ended: false
}