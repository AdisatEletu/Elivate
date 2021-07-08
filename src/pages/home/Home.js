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
import {Spinner} from 'reactstrap'

// import { raffleFetcher } from "../../utils";
import { getRequest } from "../../helper/request";
import handleError from "../../helpers/handleError";
import { PageLoader } from "../../components/Loaders";

const Home = () => {
  // const [data, setData] = useState([
  //   {
  //     image:
  //       "https://image.similarpng.com/very-thumbnail/2020/04/cosmetic-products-ad-3d-skin-care-brand-cream-lotion-png.png",
  //     subtitle:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  //     title: "Pixel 4 modern edition",
  //     isManual: true,
  //   },
  //   {
  //     image:
  //       "https://image.similarpng.com/very-thumbnail/2020/04/cosmetic-products-ad-3d-skin-care-brand-cream-lotion-png.png",
  //     subtitle:
  //       "What do you say changed again the industry's standard dummy text ever since the 1500s.",
  //     title: "Pixel 5 modern edition",
  //     isManual: false,
  //   },
  //   {
  //     image:
  //       "https://image.similarpng.com/very-thumbnail/2020/04/cosmetic-products-ad-3d-skin-care-brand-cream-lotion-png.png",
  //     subtitle:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  //     title: "Pixel 6 modern edition",
  //     isManual: true,
  //   },
  // ]);

  const [raffles, setRaffles] = useState([]);
  const [featuredRaffles, setFeaturedRaffles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getRaffles = async () => {
    try {
      // const { data, success } = await getRequest("customer/raffle");
      const { data, success } = await getRequest("/customer/raffle/all");
      if (success) {
        const filteredRaffle = data.data.filter((featured)=> featured.is_featured)
        setFeaturedRaffles(filteredRaffle)
        setRaffles(data.data);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      handleError(e);
      setIsLoading(false);
    }
  };



  useEffect(() => {
    getRaffles();
  }, []);

  const baseURL = "https://desolate-fjord-54053.herokuapp.com/";

  return (
    <div className="">
        <div
          className={"homepage-featured  banner"}
        >
            <img src={require("../../assets/Ebanner(1272x534)_01.jpg")} alt="alt banner" className='fullwidth'/>
        </div>
      {/* <Banner data={raffles} /> */}
      <HowItWorks />
      <FeaturedRaffleTitle />
      <Filter classNames={"mt-6"} />

      <div className={"mt-3"}>
        <div
          className={"homepage-featured "}
          style={{
            backgroundImage: `url(${require("../../assets/Elivate9ja/ladies.png")})`,
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
              <div className={"title1 white-color"}> iPhone SE</div>
              <div className={"paragraph off-white-color"}>
                The all new Iphone SE is up for grabsThe all new Iphone SE is up
                for grabs
              </div>
              <div className={"col-md-10 mt-5"}>
                <RaffleTimer timer={"2 hr : 30 mins : 27 sec"} />
              </div>
            </div>
            <div
              className={
                "col-md-4 d-flex align-items-center m-p-2 m-justify-content-normal m-mb-3"
              }
            >
              {/* <WatchlistBtn /> */}
            </div>
            <div className={"col-md-4 ticket-details-holder m-hidden"}>
              <Ticket ticket={5} />
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
          <div className='d-flex col-md-12 mb-5  justify-content-center'>
           <PageLoader/>
           </div>
        ) :
      <div className={`mt-6 mb-5 card-grid`}>
       {raffles.length > 0 ? (
          raffles.map((raffle, index) => (
            <RaffleCard
              key={index}
              description={raffle.description}
              timer={raffle.start_date}
              charity={raffle.is_charity}
              ticket={raffle.number_of_tickets}
              title={raffle.name}
              imgUrl={`${baseURL}${raffle.image_url}`}
              raffle={raffle}
              getRaffles={getRaffles}
            />
          ))
        ) : (
          <div className="d-flex justify-content-center fw-500 fs-20">
            {/* Opsss! there happened to be no data at the moment */}
          </div>
        )}
      </div>}
    
      <div className={"mt-6 m-background"}>
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
