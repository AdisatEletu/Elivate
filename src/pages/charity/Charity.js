import React, { useEffect } from "react";
import { PageLoader } from "../../components/Loaders";
import { useCharity } from "./useCharity";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Charity = () => {
  const { fetchCharities, charities, loading } = useCharity();

  useEffect(() => {
    fetchCharities();
  }, []);

  if (loading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  } else {
    return (
      <section>
        <div className="col-md-12 d-flex banner charity-banner mt-3 justify-content-center flex-column m-flex ">
          <Carousel autoPlay={true} infiniteLoop swipeable showStatus={false}>
            {charities &&
              charities.map((charity, index) => (
                <div
                  className={
                    "col-md-12 d-flex banner charity-banner justify-content-center flex-column m-flex light-blue-bg"
                  }
                  key={index}
                >
                  <div className={"col-md-12 d-flex align-items-center justify-content-center  m-flex"}>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                      <img
                        alt="charity-logo"
                        src={charity.image_url}
                        style={{objectFit: "contain"}}
                        // height={"70%"}
                        className=" charity-image"
                        // className="charity-logo"
                      />
                    </div>
                    <div
                      className={
                        "col-md-6 d-flex flex-column justify-content-center p-5 m-text-align-center"
                      }
                    >
                      {/* <div className="charity-raise col-md-7 p-2 mb-2">
                        <span>Total amount raised for charity</span>
                        <span> NGN 100, 000</span>
                      </div> */}
                      <div className={"bigTitle text-align-left mt-3 m-fs-24"}>
                        {charity.title}
                      </div>
                      <div className={"paragraph text-align-left mt-3 m-mt-1"}>
                        {charity.about || ""}
                        <div
                          className={
                            "d-flex text-align-left mt-5 m-justify-content-center fullwidth"
                          }
                        >
                          <a
                            href={"https://" + charity.website || ""}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div
                              className={`text-align-center secondary-bg-color secondary-btn white-color paragraph-bold`}
                            >
                              Visit charity website
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
        <div className="m-container">
          <div className="text-align-center mt-5">
            <div className="big-title bigTitle">
              The wonderful charities we support
            </div>
            <div className="grey-color paragraph">
              Charity is right at the heart of our mission, when you sign up to
              Elivate9ja Raffles a percentage of every token you purchase will
              be donated to selected charity or to support good causes.
            </div>
          </div>

          {charities &&
            charities.map((charity, index) => (
              <div
                className="m-flex gap-30 p-5 align-items-center "
                key={index}
              >
                <div className="col-md-3 bordered charity-list-image">
                  <img
                    src={charity.image_url || ""}
                    className="charity-logo"
                    alt="logo"
                    width={"100%"}
                  />
                </div>
                <div className="col-md-9">
                  <div className="title1">{charity.title || ""}</div>
                  <div className="paragraph grey-color">
                    '{charity.about || ""}'
                  </div>
                  <div className="primary-color mt-4">
                    <a
                      href={"https://" + charity.website || ""}
                      target="_blank"
                      // ref="noopener noreferrer"
                    >
                      Visit charity
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    );
  }
};

export default Charity;
