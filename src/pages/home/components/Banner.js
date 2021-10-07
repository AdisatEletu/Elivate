import React, { useState } from "react";
import { EmptyData } from "../../../components/EmptyData";
import { RaffleTimer } from "./RaffleTimer";

export const Banner = ({ data }) => {
  const [index, setIndex] = useState(0);

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
        {data.length > 0 ? (
          <div className={"col-md-12 d-flex m-flex"} key={index}>
            <div
              className={
                "col-md-6 d-flex flex-column justify-content-center p-5 m-text-align-center"
              }
            >
              <div className={"bigTitle white-color m-fs-24"}>
                {data[index].name}
              </div>
              <div className={"paragraph off-white-color m-mt-1"}>
                {data[index].description}
              </div>
              <div className={"col-md-7 mt-5"}>
                <RaffleTimer timer={data.start_date} />
              </div>
              <div className={"mt-5"}>
                {/* <WatchlistBtn /> */}
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
        ) : (
          <EmptyData />
        )}
        <div className={"d-flex justify-content-center p-3 carousel-holder"}>
          {data?.map((slides, index) => (
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
