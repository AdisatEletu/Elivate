import React, { useEffect, useState } from "react";
import { Banner } from "./components/Banner";
import { HowItWorks } from "./components/HowItWorks";
import { Filter } from "./components/Filter";
import { FeaturedRaffleTitle } from "./components/FeaturedRaffleTitle";
import { RaffleTimer } from "./components/RaffleTimer";
import { WatchlistBtn } from "./components/WatchlistBtn";
import { RaffleCard } from "./components/RaffleCards";
import { Ticket } from "./components/Ticket";
import { HomepageWinners } from "./components/Winners";
import { FormButton } from "../../components/forms/Button";
import { Testimonials } from "./components/Testimonials";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/actions/authActions";
import axios from "axios";
import { doAlert } from "../../components/alert/AlertComponent";
import { getRequest, postRequest } from "../../helpers/requests";
import handleError from "../../helpers/handleError";
// import { raffleFetcher } from "../../utils";
import { PageLoader } from "../../components/Loaders";

const Home = () => {
  const dispatch = useDispatch();

  const [raffles, setRaffles] = useState([]);
  const [featuredRaffles, setFeaturedRaffles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [adding, setAdding] = useState(false);
  const [creating, setCreating] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [watchlist, setWatchlist] = useState(featuredRaffles.in_watchlist);

  let today = new Date();
  let start_date = new Date(featuredRaffles?.start_date);
  const end_date = new Date(featuredRaffles?.end_date);

  const started = start_date < today;
  const ended = end_date < today;

  const getRaffles = async () => {
    try {
      const { data, success } = await getRequest(
        `/customer/raffle/all/featured=${1}`
      );
      if (success) {
        const filteredRaffle = data.data[0];
        setFeaturedRaffles(filteredRaffle);
        setRaffles(data.data);
      }
      setIsLoading(false);
    } catch (e) {
      handleError(e);
      setIsLoading(false);
    }
  };

  const handleAddWatchlist = async () => {
    try {
      setAdding(true);
      const { success } = await postRequest("/customer/watchlist", {
        raffle_id: featuredRaffles.id,
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
      const res = await axios.delete(
        `/customer/watchlist/${featuredRaffles.id}`
      );

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
        `/customer/raffle/${featuredRaffles.id}`
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
    getRaffles();
  }, []);

  return (
    <div className="">
      <div className={"homepage-featured  banner"}>
        <img
          src={require("../../assets/Ebanner(1272x534)_01.jpg")}
          alt="alt banner"
          className="fullwidth"
        />
      </div>
      {/* <Banner data={raffles} /> */}
      <HowItWorks />
      
      <FeaturedRaffleTitle />
      {isLoading ? (
        ""
      ) : raffles.length > 0 ? (
        <>
      <Filter classNames={"mt-6"} />
     
        <div className={"mt-3 "}>
          <div
            className={"homepage-featured "}
            style={{
              backgroundImage: `url(${featuredRaffles.image_url})`,
            }}
          >
            <div
              className={"homepage-cover col-md-12 m-flex m-pl-6"}
              style={{ minHeight: " 325px" }}
            >
              <div className={"col-md-4 ticket-details-holder m-show"}>
                <Ticket ticket={5} />
              </div>
              <div
                className={
                  "col-md-4  m-flex flex-column m-p-2 justify-content-center"
                }
              >
                <div className={"title1 white-color"}>
                  {featuredRaffles.name}
                </div>
                <div className={"paragraph off-white-color"}>
                  {featuredRaffles.description}
                </div>
                <div className={"col-md-10 mt-5"}>
                  <RaffleTimer timer={featuredRaffles.start_date} />
                </div>
              </div>
              <div
                className={
                  "col-md-4 d-flex align-items-center m-p-2 m-justify-content-normal m-mb-3"
                }
              >
                <WatchlistBtn
                  adding={adding}
                  removing={removing}
                  creating={creating}
                  ended={ended}
                  handleRemoveWatchlist={handleRemoveWatchlist}
                  started={started}
                  start={featuredRaffles?.start_date}
                  watchlist={watchlist}
                  handleEnterRaffle={handleEnterRaffle}
                  handleAddWatchlist={handleAddWatchlist}
                  fullwidth
                  status={featuredRaffles.status}
                />
              </div>
              <div className={"col-md-4 ticket-details-holder m-hidden"}>
                <Ticket ticket={featuredRaffles.ticket} />
              </div>
            </div>
          </div>
        </div>
      </>) : (
         <div className="d-flex justify-content-center header3 mt-5 ">No featured raffle</div> 
      )}
      <div className="raffle-wrapper padding-b-20per">
        {/*{raffles.length < 10 && <div className="pointer float-right primary-color " onClick={()=>window.location.href='/raffles'}>View all raffles</div>}*/}
        {isLoading ? (
          <div className="d-flex col-md-12 mb-5  justify-content-center">
            <PageLoader />
          </div>
        ) : (
          <div className={`mt-6 mb-5 card-grid `}>
            {raffles.length > 0 ? (
              raffles.map((raffle, index) => (
                <RaffleCard
                  key={index}
                  raffle={raffle}
                  getRaffles={getRaffles}
                />
              ))
            ) : (
              <div className="d-flex justify-content-center fw-500 fs-20">
                {/* Opsss! there happened to be no data at the moment */}
              </div>
            )}
          </div>
        )}
      </div>
      <div className={"mt-6  m-background"}>
        <div className={"m-flex justify-content-between"}>
          <div className={"col-md-10"}>
            <div className={"d-flex align-items-center"}>
              <div className={"title2"}>Elivate Prize Winners</div>
              <img alt={"icon"} src={require("../../assets/icons/prize.svg")} />
            </div>
            <div className={"paragraph"}>
              Raffles recently won, don't miss out on the next raffles!
            </div>
          </div>
          <div className={"col-md-2"}>
            <FormButton title={"View all winners"} />
          </div>
        </div>

        <div
          className={
            "col-md-12 winners-holder-div justify-content-center m-flex m-align-items-center"
          }
        >
          <HomepageWinners tickets={5} />
          <HomepageWinners tickets={4} />
          <HomepageWinners tickets={5} />
          <HomepageWinners tickets={3} />
        </div>
      </div>
      <Testimonials />
    </div>
  );
};
export default Home;
