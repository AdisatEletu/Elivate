import React, { useState } from "react";
import { RaffleTimer } from "./RaffleTimer";
import { WatchlistBtn } from "./WatchlistBtn";
import { Ticket } from "./Ticket";
import { postRequest } from "../../../helpers/requests";
import handleError from "../../../helpers/handleError";
import { doAlert } from "../../../components/alert/AlertComponent";
import axios from "axios";
import { useRaffle } from "../../raffles/useRaffle";
import {
  getNotificationCount,
  setNotificationCount,
} from "../../../redux/actions/uiActions";
import { useDispatch } from "react-redux";
import { getUser } from "../../../redux/actions/authActions";
import { useHistory } from "react-router-dom";
export const RaffleCard = ({ onClick, profile,ticketclassName, winner, stacked, raffle }) => {
  const { getRaffles } = useRaffle();
  const history = useHistory();

  let today = new Date();
  let start_date = new Date(raffle?.start_date);
  const end_date = new Date(raffle?.end_date);

  const started = start_date < today;
  const ended = end_date < today;

  const dispatch = useDispatch();

  const [adding, setAdding] = useState(false);
  const [creating, setCreating] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [watchlist, setWatchlist] = useState(raffle.in_watchlist);

  const handleAddWatchlist = async () => {
    try {
      setAdding(true);
      const { success } = await postRequest("/customer/watchlist", {
        raffle_id: raffle.id,
      });

      if (success) {
        setWatchlist(true);
        await getRaffles();
        doAlert("successfully Added to watchlist", "success");
      }
      setAdding(false);
    } catch (e) {
      handleError(e);
      setAdding(false);
    }
  };

  const handleRemoveWatchlist = async () => {
    try {
      setRemoving(true);
      const res = await axios.delete(`/customer/watchlist/${raffle.id}`);

      setWatchlist(false);

      if (res.success) {
        doAlert("successfully removed from watchlist", "success");
      }
      setRemoving(false);
    } catch (e) {
      handleError(e);
      setRemoving(false);
    }
  };

  const handleEnterRaffle = async () => {
    try {
      setCreating(true);
      const { data, success, error } = await postRequest(
        `/customer/raffle/${raffle.id}`
      );

      if (success) {
        doAlert("successfully entered raffle", "success");
        dispatch(getUser());
        const count = await getNotificationCount();
        dispatch(setNotificationCount(count));
      } else {
        doAlert(error.response.data.message, "error");
      }
      setCreating(false);
    } catch (e) {
      handleError(e);
      setCreating(false);
    }
  };

  const navigateToRaffleDetails = () => {
    history.push(`/raffles/${raffle.id}/details`);
  };
  return (
    <>
      <div
        className={
          "raffle-card-holder justify-content-between m-flex display-none col-md-12 pointer"
        }
      >
        <div className={"col-md-4 "} onClick={navigateToRaffleDetails}>
          <div
            className={"raffle-image"}
            style={{ backgroundImage: `url(${raffle.image_url})` }}
          >
            <div className='absolute-div'>
              <Ticket
                ticket={raffle.number_of_tickets}
                // className={"display-none"}
              />

              {/* <div className="d-flex justify-content-end"> */}
                {raffle.charity && (
                  <img
                    alt={"charity"}
                    className={"charity-icon"}
                    src={require("../../../assets/icons/charity.svg")}
                  />
                )}
              {/* </div> */}

              <div onClick={navigateToRaffleDetails}>
                <RaffleTimer
                  winner={winner}
                  black
                  stacked={stacked}
                  started={started}
                  profile={profile}
                  className={`raffle-card-button black-color m-padding-0 ${ticketclassName}`}
                  timer={raffle?.start_date}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={"col-md-7"}>
          <div className={"padding-right-15"}>
            <div
              className={`title2 m-title2 m-mt-3 ellipsis display-none`}
              onClick={navigateToRaffleDetails}
            >
              {raffle.name}
            </div>
            <div
              className={`${
                stacked
                  ? "small-paragraph r-mt-3"
                  : "small-paragraph r-mt-3 overflow-ellipsis description-height"
              }`}
              onClick={() => {
                onClick && onClick(raffle.raffle_id);
              }}
            >
              {raffle.description}
            </div>
            <div className={"mt-3 r-mt-2"}>
              <WatchlistBtn
                adding={adding}
                raffle={raffle}
                removing={removing}
                creating={creating}
                ended={ended}
                handleRemoveWatchlist={handleRemoveWatchlist}
                started={started}
                start={raffle?.start_date}
                watchlist={watchlist}
                handleEnterRaffle={handleEnterRaffle}
                handleAddWatchlist={handleAddWatchlist}
                fullwidth
                status={raffle.status}
                viewMore={navigateToRaffleDetails}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "raffle-card-holder justify-content-between m-flex m-display-none col-md-12 pointer"
        }
      >
        <div className={"col-md-4"} onClick={navigateToRaffleDetails}>
          <div
            className={"raffle-image"}
            style={{ backgroundImage: `url(${raffle.image_url})` }}
          >
            <Ticket
              ticket={raffle.number_of_tickets}
              className={"display-none"}
            />

            {raffle.charity && (
              <img
                alt={"charity"}
                className={"charity-icon"}
                src={require("../../../assets/icons/charity.svg")}
              />
            )}
          </div>
        </div>
        <div className={"col-md-7"}>
          <div
            className={
              "m-flex height-100px m-display-none justify-content-between"
            }
            onClick={navigateToRaffleDetails}
          >
            <div className={"title2 m-title2 mt-5 m-display-none"}>{raffle.name}</div>
            <Ticket ticket={raffle.number_of_tickets} />
          </div>
          <div className={"padding-right-15"}>
            <div
              className={`title2 mt-5 display-none`}
              onClick={navigateToRaffleDetails}
            >
              {raffle.name}
            </div>
            <div
              className={`${
                stacked ? "small-paragraph r-mt-3" : "small-paragraph mt-3"
              }`}
              onClick={() => {
                onClick && onClick(raffle.raffle_id);
              }}
            >
              {raffle.description}
            </div>
            <div className={"r-mt-3"} onClick={navigateToRaffleDetails}>
              <RaffleTimer
                winner={winner}
                black
                stacked={stacked}
                started={started}
                profile={profile}
                className={"raffle-card-button"}
                timer={raffle?.start_date}
              />
            </div>
            <div className={"r-mt-3"}>
              <WatchlistBtn
                adding={adding}
                removing={removing}
                creating={creating}
                ended={ended}
                raffle={raffle}
                handleRemoveWatchlist={handleRemoveWatchlist}
                started={started}
                start={raffle?.start_date}
                watchlist={watchlist}
                handleEnterRaffle={handleEnterRaffle}
                handleAddWatchlist={handleAddWatchlist}
                fullwidth
                status={raffle.status}
                viewMore={navigateToRaffleDetails}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
