import React, { useEffect, useState } from "react";
import { RaffleTimer } from "./RaffleTimer";
import { WatchlistBtn } from "./WatchlistBtn";

export const Banner = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSlideShow = () => {
    if (index + 1 < data.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    setInterval(() => handleSlideShow(), 10000);
  }, [index]);

  return (
    <div className={"banner-bg banner"}>
      <div
        className={"col-md-12 d-flex flex-column m-flex"}
        style={{
          backgroundImage: `url(${require("../../../assets/—Pngtree.png")})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "543px",
          borderRadius: "30px",
        }}
      >
        <div className={"col-md-12 d-flex m-flex"} key={index}>
          <div
            className={
              "col-md-6 d-flex flex-column justify-content-center p-5 m-text-align-center"
            }
          >
            <div className={"bigTitle white-color m-fs-24"}>
              {data[index].title}
            </div>
            <div className={"paragraph off-white-color m-mt-1"}>
              {data[index].subtitle}
            </div>
            <div className={"col-md-7 mt-5"}>
              <RaffleTimer timer={"1 hr : 30 mins : 27 sec"} />
            </div>
            <div className={"mt-5"}>
              <WatchlistBtn />
            </div>
          </div>

          <div className={"col-md-6"}>
            <img
              className={"fullwidth"}
              src={data[index].image}
              alt={"post-images"}
            />
          </div>
        </div>
        <div className={"d-flex justify-content-center p-3 carousel-holder"}>
          {data.map((slides, index) => (
            <div
              key={index}
              onClick={() => setIndex(index)}
              className={"slider-icon"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
