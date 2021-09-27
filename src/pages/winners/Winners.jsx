import { Col, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import "./winners.css";
import { useWinners } from "./useWinners";
import { PageLoader } from "../../components/Loaders";
import { Empty } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FormButton } from "../../components/forms/Button";
const Winners = () => {
  const {
    winners,
    loading,
    fetchWinners,
    winnerStats,
    fetchWinnersStat,
    show,
    handleLoadMore,
    handleHover,
    limit,
    total,
  } = useWinners();

  useEffect(() => {
    fetchWinners();
  }, [limit]);

  useEffect(() => {
    fetchWinnersStat();
  }, []);

  if (loading) return <PageLoader />;
  return (
    <div className="height-100vh  aligin-items-center justify-content-center mt-3">
      {/* <Empty/> */}

      <div className="col-md-12 d-flex banner charity-banner justify-content-center flex-column m-flex ">
        <Carousel autoPlay={true} infiniteLoop swipeable showStatus={false}>
          {winners?.map((winner, index) => (
            <div
              className={
                "col-md-12 d-flex banner charity-banner justify-content-center flex-column m-flex primary-bg-color"
              }
              key={index}
            >
              <div
                className={
                  "col-md-12 d-flex align-items-center justify-content-center  m-flex"
                }
              >
                <div
                  className={
                    "col-md-6 d-flex flex-column justify-content-center p-5 m-text-align-center"
                  }
                >
                  <div
                    className={
                      "bigTitle text-align-left mt-3 m-fs-24 white-color"
                    }
                  >
                    {winner.name}
                  </div>
                  <div
                    className={
                      "paragraph text-align-left mt-3 m-mt-1 white-color"
                    }
                  >
                    <div>Won by</div>
                    <div
                      className={
                        "d-flex text-align-left fullwidth align-items-center"
                      }
                    >
                      <div style={{ marginLeft: "-25px" }}>
                        <img src={require("../../assets/trophy.svg")} />
                      </div>
                      <div>
                        <div>
                          <div>
                            {`${winner?.winner?.first_name || ""} ${winner
                              ?.winner?.last_name || ""}`}
                          </div>

                          <div>
                            Number of tickets:{" "}
                            {`${winner?.winner?.tickets || ""}`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center image-br">
                  <img
                    alt="charity-logo"
                    src={winner.image_url}
                    height={"70%"}
                    className="charity-logo  image-br"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <Row className="mt-5 mb-5">
        <Col xs={12} sm={12} md={4} lg={4} className="num-of-winners-holder">
          <Row>
            <Col md={2} className="text-align-center">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26" cy="26" r="26" fill="#EEF7FF" />
                <path
                  d="M21.5311 29.3317C24.6419 29.3317 27.1637 26.8099 27.1637 23.6991C27.1637 20.5882 24.6419 18.0664 21.5311 18.0664C18.4203 18.0664 15.8984 20.5882 15.8984 23.6991C15.8984 26.8099 18.4203 29.3317 21.5311 29.3317Z"
                  stroke="#035EA8"
                  strokeMiterlimit="10"
                />
                <path
                  d="M28.8359 18.2756C29.6107 18.0573 30.4232 18.0076 31.2187 18.1297C32.0143 18.2519 32.7745 18.5432 33.448 18.9838C34.1215 19.4245 34.6928 20.0044 35.1233 20.6845C35.5539 21.3646 35.8337 22.129 35.9439 22.9263C36.0541 23.7236 35.9922 24.5353 35.7623 25.3067C35.5324 26.078 35.1399 26.7912 34.6112 27.3981C34.0825 28.005 33.4299 28.4915 32.6973 28.825C31.9647 29.1584 31.1692 29.331 30.3643 29.3311"
                  stroke="#035EA8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.7344 33.3819C14.6141 32.1306 15.7819 31.1093 17.1394 30.4042C18.4968 29.6992 20.0039 29.3311 21.5335 29.3311C23.0631 29.331 24.5703 29.699 25.9278 30.4039C27.2852 31.1088 28.4532 32.13 29.333 33.3813"
                  stroke="#035EA8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.3633 29.3311C31.893 29.33 33.4005 29.6975 34.7581 30.4025C36.1157 31.1075 37.2834 32.1293 38.1624 33.3813"
                  stroke="#035EA8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Col>
            <Col md={10}>
              <div>Total Number of raffle winners</div>
              <div>{winnerStats?.online_winners_count}</div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} className="num-of-prices-holder">
          <Row>
            <Col md={2} className="text-align-center">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26" cy="26" r="26" fill="#FFF0D7" />
                <path
                  d="M25.8648 31.0646C30.6507 31.0646 34.5305 27.1849 34.5305 22.399C34.5305 17.6131 30.6507 13.7334 25.8648 13.7334C21.079 13.7334 17.1992 17.6131 17.1992 22.399C17.1992 27.1849 21.079 31.0646 25.8648 31.0646Z"
                  stroke="#E89606"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.8634 27.598C28.735 27.598 31.0628 25.2701 31.0628 22.3986C31.0628 19.5271 28.735 17.1992 25.8634 17.1992C22.9919 17.1992 20.6641 19.5271 20.6641 22.3986C20.6641 25.2701 22.9919 27.598 25.8634 27.598Z"
                  stroke="#E89606"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.0628 29.3311V37.9972L25.8627 35.3975L20.6641 37.9972V29.3318"
                  stroke="#E89606"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Col>
            <Col md={10}>
              <div>Total Number of prices won</div>
              <div>{winnerStats?.prices_won_count}</div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} className="num-of-users-holder">
          <Row>
            <Col md={2} className="text-align-center">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26" cy="26" r="26" fill="#ECECEC" />
                <g clipPath="url(#clip0)">
                  <path
                    d="M14.7096 27.5488C14.4106 27.5488 14.168 27.7915 14.168 28.0904C14.168 28.3894 14.4106 28.632 14.7096 28.632C15.0085 28.632 15.2512 28.3894 15.2512 28.0904C15.2512 27.7915 15.0085 27.5488 14.7096 27.5488Z"
                    fill="#111111"
                  />
                  <path
                    d="M36.893 29.4273L31.7871 31.1826C31.8097 31.0569 31.8224 30.9287 31.8224 30.7986C31.8224 29.6041 30.8507 28.6322 29.656 28.6322H26.1487C26.0556 28.6322 25.9638 28.6083 25.8828 28.5626L23.0214 26.9532C22.4557 26.6344 21.8127 26.4658 21.1622 26.4658H17.3227C17.0993 25.8356 16.4972 25.3828 15.7912 25.3828H12.5416C12.2425 25.3828 12 25.6253 12 25.9244V35.673C12 35.9722 12.2425 36.2147 12.5416 36.2147H15.7912C16.4811 36.2147 17.0727 35.7812 17.3075 35.1723C17.9206 35.2484 18.63 35.4298 19.0757 35.6972L21.9082 37.3967C22.9812 38.0407 24.2098 38.3811 25.4614 38.3811C26.4532 38.3811 27.4141 38.1729 28.3177 37.7625L38.4264 33.3114C39.546 32.8571 40.0988 31.5139 39.4588 30.33C38.9881 29.4588 37.8856 29.0712 36.893 29.4273ZM16.3328 34.5924C16.3316 34.8898 16.0889 35.1314 15.7912 35.1314H13.0832V26.466H15.7912C16.0897 26.466 16.3328 26.7089 16.3328 27.0076V34.5924ZM38.0149 32.3096C38.0092 32.3117 38.0035 32.3143 37.9978 32.3166C37.9978 32.3166 27.874 36.7742 27.8721 36.7751C27.1094 37.122 26.2983 37.2979 25.4614 37.2979C24.4061 37.2979 23.3703 37.011 22.4656 36.4679L19.633 34.7684C19.0267 34.4047 18.1584 34.183 17.416 34.0942V27.5492H21.1622C21.6268 27.5492 22.0859 27.6694 22.4902 27.8972L25.3516 29.5066C25.594 29.6433 25.8699 29.7156 26.1487 29.7156H29.656C30.2533 29.7156 30.7392 30.2014 30.7392 30.7988C30.7392 31.394 30.2531 31.882 29.656 31.882H24.1503C23.8512 31.882 23.6087 32.1245 23.6087 32.4236C23.6087 32.7226 23.8512 32.965 24.1503 32.965H29.656C30.0112 32.965 30.361 32.8768 30.6713 32.7114C30.6713 32.7114 37.2541 30.4485 37.2567 30.4476C37.742 30.2725 38.2908 30.4468 38.5059 30.845C38.8286 31.4418 38.5618 32.0906 38.0149 32.3096Z"
                    fill="#111111"
                  />
                  <path
                    d="M27.7752 26.4903C27.8771 26.5786 28.0034 26.6226 28.13 26.6226C28.2565 26.6226 28.383 26.5786 28.4847 26.4903C32.9037 22.6606 35.6371 20.7225 35.6371 17.7107C35.6371 15.328 33.9503 13.3535 31.5806 13.3535C30.0243 13.3535 28.8326 14.2505 28.065 15.5967C27.2991 14.2535 26.1087 13.3535 24.5501 13.3535C22.7359 13.3535 21.2192 14.5292 20.6861 16.3484C20.6019 16.6355 20.7665 16.9363 21.0536 17.0205C21.3407 17.1047 21.6415 16.9402 21.7255 16.6531C22.1201 15.3067 23.2287 14.4367 24.5501 14.4367C26.0951 14.4367 27.179 15.8087 27.5431 17.0861C27.608 17.3208 27.8217 17.4832 28.065 17.4832C28.3085 17.4832 28.522 17.3208 28.5869 17.0861C28.5943 17.0597 29.3467 14.4367 31.5806 14.4367C33.2756 14.4367 34.5539 15.844 34.5539 17.7107C34.5539 20.12 32.1987 21.8569 28.1295 25.3655C25.6502 23.2363 23.6808 21.7376 22.5614 20.2714C22.3799 20.0336 22.0401 19.9879 21.8023 20.1695C21.5645 20.351 21.519 20.6907 21.7003 20.9288C22.9621 22.5813 25.0921 24.1646 27.7752 26.4903Z"
                    fill="#111111"
                  />
                  <path
                    d="M21.151 18.125C20.852 18.125 20.6094 18.3677 20.6094 18.6666C20.6094 18.9655 20.852 19.2082 21.151 19.2082C21.4499 19.2082 21.6926 18.9655 21.6926 18.6666C21.6926 18.3677 21.4499 18.125 21.151 18.125Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="27.73"
                      height="27.73"
                      fill="white"
                      transform="translate(12 12)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Col>
            <Col md={10}>
              <div>Total Number of charity engagements</div>
              <div>{winnerStats?.raffles_belonging_to_charity_count}</div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <div className="bigTitle text-align-center">Prices won</div>
          <div className="grey-color text-align-center">
            Here’s a list of prices that have been won on our platform
          </div>
        </Col>
      </Row>

      <Row className="mt-5 ">
        {winners && winners.length > 0 ? (
          winners.map((winner, index) => (
            <Col md={2} sm={12} xs={12} lg={3} key={index}>
              <div
                className="items-holder white-color background-position-center"
                style={{
                  backgroundImage: `url(${winner.image_url})`,
                  backgroundSize: "cover",
                }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(-1)}
              >
                {show >= 0 && (
                  <div className="d-flex fullheight align-items-center justify-content-center flex-column black-overlay">
                    <h4 className="white-color">{winner.name}</h4>
                    <p className=" mt-3">Won by</p>
                    <div className="text-align-center ">
                      <img src={require("../../assets/trophy.svg")} />
                    </div>
                    <div>
                      {`${winner?.winner?.first_name || ""} ${winner?.winner
                        ?.last_name || ""}`}
                    </div>
                    <div>
                      Number of tickets: {`${winner?.winner?.tickets || ""}`}
                    </div>
                  </div>
                )}
              </div>
            </Col>
          ))
        ) : (
          <Empty />
        )}
      </Row>
      {total > limit && (
        <div className="d-flex justify-content-center">
          <Col md={2} sm={11} xs={12}>
            <FormButton title={"Load more"} onClick={handleLoadMore} />
          </Col>
        </div>
      )}
    </div>
  );
};

export default Winners;
