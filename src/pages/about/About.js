import React from "react";

const About = () => {
  return (
    <section id="about">
      <img
        src={require("../../assets/aboutUs.png")}
        className={"border-radius-20 col-md-12"}
        alt={"team-picture"}
      />
      <div className={"card-grid align-items-center mt-6"}>
        <div>
          <div className={"paragraph grey-color"}>About us</div>
          <div className={"title1-regular"}>
            Elivate9ja is an online and offline raffle and promotional platform
            in Lagos state, Nigeria, established with the sole purpose of
            changing lives through fun and rewarding games where great prizes
            are raffled off.
          </div>
        </div>
        <div className={"paragraph grey-color"}>
          We believe raffles should be used in the service of great causes.
          That’s why we donate a percentage of earnings from every raffle to
          help charities in Lagos. In doing so, we encourage the giving culture
          in Nigeria, help create a better world while also helping people
          achieve their dreams.
        </div>
      </div>

      <div className={"container mt-6"}>
        <div className={"bigTitle text-align-center mb-5"}>Our Core Values</div>
        <div className={"card-grid"}>
          <div
            className={
              "d-flex flex-column align-items-center justify-content-center"
            }
          >
            <img
              alt={"icon"}
              src={require("../../assets/icons/transpiracy.svg")}
              className={"text-align-center"}
            />
            <div className={"title2 text-align-center mt-3"}>Transparency</div>
            <div className={"paragraph mt-2  p-4 text-align-center"}>
              Our commitment to providing a transparent raffle platform is one
              of our core values. There are no foul play at Elivate9ja. Whenever
              you play, you can be sure that you are playing on safe ground.
            </div>
          </div>
          <div
            className={
              "d-flex flex-column align-items-center justify-content-center "
            }
          >
            <img
              alt={"icon"}
              src={require("../../assets/icons/justice.svg")}
              className={"text-align-center"}
            />
            <div className={"title2 text-align-center mt-3"}>
              Equal Opportunities
            </div>
            <div className={"paragraph mt-2 text-align-center p-4"}>
              We are dedicated to providing everyone equal access to participate
              in raffles. No matter who you are, we will ensure you have the
              best experience possible on our platforms. We want you to
              experience what it feels like to win.
            </div>
          </div>
          <div
            className={
              "d-flex flex-column align-items-center justify-content-center"
            }
          >
            <img
              alt={"icon"}
              src={require("../../assets/icons/transform.svg")}
              className={"text-align-center"}
            />
            <div className={"title2 text-align-center mt-3"}>
              Transforming lives
            </div>
            <div className={"paragraph mt-2 text-align-center p-4"}>
              At Elivate9ja, we are driven by the desire to change lives for the
              better. This can be seen in the rewards we offer, our affordable
              ticket pricing, and the charities we support.
            </div>
          </div>
          <div
            className={
              "d-flex flex-column align-items-center justify-content-center"
            }
          >
            <img
              alt={"icon"}
              src={require("../../assets/icons/about-charity.svg")}
              className={"text-align-center"}
            />
            <div className={"title2 text-align-center mt-3"}>Charity</div>
            <div className={"paragraph mt-2 text-align-center p-4"}>
              We are committed to doing our part and giving back to our
              community. Donating to different charities helps us achieve that.
            </div>
          </div>
        </div>
      </div>

      <div className="border-radius-20 mt-6 fullwidth about-us-video d-flex justify-content-center about-us-video-height">
        <iframe
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
          className="border-radius-20 fullwidth about-us-video-height"
        />
      </div>
      <div className={"d-flex flex-column align-items-center mt-6 container"}>
        <div className={"bigTitle text-align-center"}>
          Why Play With Elivate9ja Raffles?
        </div>
        <div className={"grey-color text-align-center"}>
          Bidding on Elivate9ja happens in THREE easy steps
        </div>
        <div className={" mt-5"}>
          <div className={" about-us-grid"}>
            <div
              className={
                "cursive biggestText text-align-center circle-background"
              }
            >
              1
            </div>
            <div className={""}>
              <div className={"title2"}>Our prizes are great</div>
              <div className={"paragraph grey-color"}>
                Here at Elivate9ja, we believe that life should be lived to the
                fullest, and we want you to do exactly that. Whether you fancy
                taking the holiday of your dreams, getting behind the wheel of a
                brand-new sports car, having the latest technology in your hands
                or embarking on a new and adventurous experience, our raffles
                could be your ticket to the life you dream. .
              </div>
            </div>
          </div>
          <div className={" about-us-grid mt-6"}>
            <div
              className={
                "cursive biggestText text-align-center circle-background2"
              }
            >
              2
            </div>
            <div className={""}>
              <div className={"title2"}>Our Raffles are fun</div>
              <div className={"paragraph grey-color"}>
                Raffling is a source of light-hearted fun, and we are determined
                to keep it that way. We’ve made our games super exciting so our
                players can enjoy themselves while winning amazing prizes. To
                keep it even more interesting, we refresh our raffles frequently
                to ensure you have a variety to choose from.
              </div>
            </div>
          </div>
          <div className={" about-us-grid mt-6"}>
            <div
              className={
                "cursive biggestText text-align-center circle-background3"
              }
            >
              3
            </div>
            <div className={""}>
              <div className={"title2"}>Our odds are great</div>
              <div className={"paragraph grey-color"}>
                Rather than accepting millions of entries, as most raffle and
                lottery platforms do, we keep the number of our entries low
                --relative to the cost of the prize-- and keep ticket prices
                low, as well. This way, you stand a better chance at winning.
              </div>
            </div>
          </div>
          <div className={" about-us-grid mt-6"}>
            <div
              className={
                "cursive biggestText text-align-center circle-background4"
              }
            >
              4
            </div>
            <div className={""}>
              <div className={"title2"}>Our platforms are transparent</div>
              <div className={"paragraph grey-color"}>
                Before you purchase a ticket, you will always know the number of
                tickets available for that raffle. We share this information so
                you know what your chances of winning are.
              </div>
            </div>
          </div>
          <div className={" about-us-grid mt-6"}>
            <div
              className={
                "cursive biggestText text-align-center circle-background5"
              }
            >
              5
            </div>
            <div className={""}>
              <div className={"title2"}>Our fees are low</div>
              <div className={"paragraph grey-color"}>
                Our platform was created to help people pursue their dreams. We
                give a percentage of raffle earnings to charities, and for some
                raffles, we donate every single earning. This means that every
                ticket purchased on the website goes to a good cause. So, even
                if you play and don’t win, you would have helped someone out
                there achieve their dreams.
              </div>
            </div>
          </div>
          <div className={" about-us-grid mt-6"}>
            <div
              className={
                "cursive biggestText text-align-center circle-background"
              }
            >
              6
            </div>
            <div className={""}>
              <div className={"title2"}>Our earnings go to charity</div>
              <div className={"paragraph grey-color"}>
                Our platform was created to help people pursue their dreams. We
                give a percentage of raffle earnings to charities, and for some
                raffles, we donate every single earning. This means that every
                ticket purchased on the website goes to a good cause. So, even
                if you play and don’t win, you would have helped someone out
                there achieve their dreams.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
