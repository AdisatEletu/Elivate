import React, { useEffect, useState } from "react";
import { RaffleTimer } from "../home/components/RaffleTimer";
import { WatchlistBtn } from "../home/components/WatchlistBtn";
import Details from "./Details";
import { getRequest, postRequest } from "../../helpers/requests";
import handleError from "../../helpers/handleError";
import { PageLoader } from "../../components/Loaders";
import { useRaffle } from "./useRaffle";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/actions/authActions";
import { doAlert } from "../../components/alert/AlertComponent";
import axios from "axios";

const RaffleDetails = (props) => {
  const { getRaffles } = useRaffle();
  const dispatch = useDispatch();

  const [raffle, setRaffle] = useState({});
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [adding, setAdding] = useState(false);
  const [creating, setCreating] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [watchlist, setWatchlist] = useState(raffle.in_watchlist);
  const [raffles, setRaffles] = useState([]);

  const id = props?.match?.params?.id;
  let today = new Date();
  let start_date = new Date(raffle?.start_date);
  const end_date = new Date(raffle?.end_date);

  const started = start_date < today;
  const ended = end_date < today;
  const fetchDetails = async () => {
    try {
      const { success, data } = await getRequest(`/customer/raffle/${id}`);
      if (success) {
        setRaffle(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  const getSimilarRaffles = async () => {
    try {
      const { data, success } = await getRequest(
        `/customer/raffle/all?per_page=${2}&category=${raffle?.cartegory_id}`
      );
      if (success) {
        const similar = data.data.slice(1, 3);
        setRaffles(similar);
      }
      setFetching(false);
    } catch (error) {
      handleError(error);
      setFetching(false);
    }
  };

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
      } else {
        doAlert(error.response.data.message, "error");
      }
      setCreating(false);
    } catch (e) {
      handleError(e);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (loading) {
    return <PageLoader />;
  } else {
    return (
      <div>
        <div className={"raffle-details m-flex col-md-12 light-blue-bg p-3"}>
          {/* <div className="d-flex m-flex m-justify-content-center m-align-items-center"> */}
          <div
            className={"col-md-6 raffle-details-image"}
            style={{
              backgroundImage: `url(${raffle.image_url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: 'cover'
            }}
          />
          {/* </div> */}
        
          <div
            className={
              "col-md-6 d-flex flex-column justify-content-center p-5 m-text-align-center"
            }
          >
            <div className={"bigTitle m-fs-24"}>{raffle.name}</div>
            <div className={"paragraph grey-color m-mt-1 mb-3"}>
              {raffle.description}
            </div>
              <RaffleTimer
                timer={raffle.start_date}
                className={" m-black-color text-align-center border-radius-0 bottom-0 raffle-details-mt padding-0 raffle-details-center"}
                started={started}
                stacked
                black
              />
            <div className={"mt-5 raffle-details-mt"}>
              <WatchlistBtn
                adding={adding}
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
              />
            </div>
          </div>
        </div>
        <div>
          <Details raffle={raffle} />
        </div>
        {fetching ? (
          <PageLoader />
        ) : (
          // <div className={"mt-6"}>
          //   <div className={"bigTitle"}>You may also be interested in</div>
          //   <div className={"mt-4 card-grid"}>
          //     {raffles.map((raffle, index) => (
          //       <RaffleCard key={index} raffle={raffle} />
          //     ))}
          //   </div>
          // </div>
          ""
        )}
      </div>
    );
  }
};
export default RaffleDetails;
