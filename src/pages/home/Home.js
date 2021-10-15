import "./home.css";

import React, { useEffect, useState } from "react";
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
import { useHistory } from "react-router-dom";
import { PageLoader } from "../../components/Loaders";
import { useWinners } from "../winners/useWinners";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  //Hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const { winners } = useWinners();
  //State
  const [raffles, setRaffles] = useState([]);
  const [banners, setBanners] = useState([]);
  const [isLoadingBanner, setIsLoadingBanner] = useState(true);
  const [featuredRaffles, setFeaturedRaffles] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingBigRaffle, setIsLoadingBigRaffle] = useState(true);
  const [bigRaffle, setBigRaffle] = useState({});
  const [total, setTotal] = useState(0);
  const [perpage, setPerPage] = useState(20);
  const [adding, setAdding] = useState(false);
  const [creating, setCreating] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [watchlist, setWatchlist] = useState(featuredRaffles?.in_watchlist);
  const [loadingMore, setLoadingMore] = useState(false);
  let today = new Date();

  let start_date = new Date(bigRaffle?.start_date);
  const end_date = new Date(bigRaffle?.end_date);

  const started = start_date < today;
  const ended = end_date < today;

  const getRaffles = async () => {
    try {
      setLoadingMore(true);
      const { data, success } = await getRequest(
        `/customer/raffle/all?featured=${1}&per_page=${perpage}&page=${1}`
      );
      if (success) {
        const filteredRaffle = data?.data[0];
        setFeaturedRaffles(filteredRaffle);
        setRaffles(data?.data);
        setTotal(data?.total);
      }
      setLoadingMore(false);
      setIsLoading(false);
    } catch (e) {
      handleError(e);
      setLoadingMore(false);
      setIsLoading(false);
    }
  };

  const LoadMore = () => {
    setPerPage(perpage * 2);
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

  const getBigFeatured = async () => {
    try {
      setIsLoadingBigRaffle(true);
      const { data, success } = await getRequest(
        `/customer/raffle/big-featured`
      );
      if (success) {
        setBigRaffle(data);
      }
      setIsLoadingBigRaffle(false);
    } catch (error) {
      setIsLoadingBigRaffle(false);
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

  const getBanner = async () => {
    try {
      setIsLoadingBanner(true);
      const { data, success } = await getRequest(`/admin/banners/active`);
      if (success) {
        setBanners(data);
      }
      setIsLoadingBanner(false);
    } catch (error) {
      setIsLoadingBanner(false);
    }
  };

  const handleEnterRaffle = async () => {
    try {
      setCreating(true);
      const { success, error } = await postRequest(
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
  }, [perpage]);

  useEffect(() => {
    getBigFeatured();
    getBanner();
  }, []);

  console.log({ banners });

  if (isLoadingBanner) {
    return (
      <div className="d-flex align-items-center fullwidth mt-6">
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="">
      <Carousel autoPlay={true} infiniteLoop swipeable showStatus={false}>
        {banners.length > 0 ? 
        banners?.map((banner, index) => (
          <div className={"homepage-banner-featured  banner"}>
            <img
              src={banner}
              alt="banner"
              style={{ objectFit: "cover", height: "535px" }}
              className="fullwidth"
            />
          </div>
        )):  <div className={"homepage-banner-featured  banner"}>
        <img
          src={require("../../assets/Ebanner(1272x534)_01.jpg")}
          alt="alt banner"
          style={{ objectFit: "cover", height: "100%" }}
          className="fullwidth"
        />
      </div>}

       
      </Carousel>

      {/* <Banner data={raffles} /> */}
      <HowItWorks />

      <FeaturedRaffleTitle />
      {isLoadingBigRaffle ? (
        ""
      ) : bigRaffle ? (
        <>
          <div className={"mt-3 "}>
            <div
              className={"homepage-featured "}
              style={{
                backgroundImage: `url(${bigRaffle?.image_url})`,
              }}
            >
              <div
                className={"homepage-cover col-md-12 m-flex m-pl-6"}
                style={{ minHeight: " 325px" }}
              >
                <div className={"col-md-4 ticket-details-holder m-show"}>
                  <Ticket ticket={bigRaffle?.number_of_tickets} />
                </div>
                <div
                  className={
                    "col-md-4  m-flex flex-column m-p-2 justify-content-center"
                  }
                >
                  <div className={"title1 white-color"}>{bigRaffle?.name}</div>
                  <div className={"paragraph off-white-color"}>
                    {bigRaffle?.description}
                  </div>
                  <div className={"col-md-10 mt-5"}>
                    <RaffleTimer
                      timer={bigRaffle?.start_date}
                      started={started}
                      ended={ended}
                    />
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
                    className={"secondary-btn mt-3"}
                    start={featuredRaffles?.start_date}
                    watchlist={watchlist}
                    handleEnterRaffle={handleEnterRaffle}
                    handleAddWatchlist={handleAddWatchlist}
                    fullwidth
                    status={featuredRaffles.status}
                  />
                </div>
                <div className={"col-md-4 ticket-details-holder m-hidden"}>
                  <Ticket ticket={bigRaffle?.number_of_tickets} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          className="d-flex justify-content-center header3 mt-5 "
          style={{ height: "100px" }}
        >
          No Large featured raffle
        </div>
      )}
      <div className="raffle-wrapper ">
        {/*{raffles.length < 10x && <div className="pointer float-right primary-color " onClick={()=>window.location.href='/raffles'}>View all raffles</div>}*/}
        {isLoading ? (
          <div className="d-flex col-md-12 mb-5  justify-content-center">
            <PageLoader />
          </div>
        ) : raffles?.length > 0 ? (
          <>
            <Filter
              classNames={"mt-6"}
              endpoint={`/customer/raffle/all?featured=${1}&category=`}
              sortEndpoint={`/customer/raffle/all?featured=${1}&`}
              setRaffles={setRaffles}
              searchEndpoint={`/customer/raffle/all?featured=${1}`}
            />

            <div className={`mt-6 mb-5 card-grid `}>
              {raffles?.map((raffle, index) => (
                <RaffleCard
                  key={index}
                  raffle={raffle}
                  ticketclassName={"m-justify-content-center"}
                  getRaffles={getRaffles}
                />
              ))}
            </div>
            {total > perpage && (
              <div className="d-flex justify-content-center">
                <div
                  className={`raffle-secondary-btn primary-bg-color white-color paragraph-bold`}
                  style={{ width: "180px" }}
                  onClick={() => LoadMore()}
                >
                  {loadingMore ? "Loading..." : "Load More"}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="d-flex justify-content-center mt-5 fw-500 fs-20">
            No Featured Raffle
          </div>
        )}
      </div>
      <div className={"mt-6  m-background"}>
        <div className={"m-flex justify-content-between"}>
          <div className={"col-md-10"}>
            <div className={"d-flex align-items-center"}>
              <div className={"title2"}>Elivate9ja Prize Winners</div>
              <img alt={"icon"} src={require("../../assets/icons/prize.svg")} />
            </div>
            <div className={"paragraph"}>
              Raffles recently won, don't miss out on the next raffles!
            </div>
          </div>
          {winners && winners.length > 0 && (
            <div className={"col-md-2"}>
              <FormButton
                title={"View all winners"}
                onClick={() => history.push("/winners")}
              />
            </div>
          )}
        </div>
        <HomepageWinners />
      </div>
      <Testimonials />
    </div>
  );
};
export default Home;
