import React, {useEffect, useState} from 'react';
import {Banner} from "./components/Banner";
import {HowItWorks} from "./components/HowItWorks";
import {Filter} from "./components/Filter";
import {RaffleTimer} from "./components/RaffleTimer";
import {WatchlistBtn} from "./components/WatchlistBtn";
import {RaffleCard} from "./components/RaffleCards";
import {Ticket} from "./components/Ticket";
import {HomepageWinners} from "./components/Winners";
import {FormButton} from "../../components/forms/Button";
import {Testimonials} from "./components/Testimonials";

const Home = () => {
  
  const [data, setData] = useState([{
    image: 'https://image.similarpng.com/very-thumbnail/2020/04/cosmetic-products-ad-3d-skin-care-brand-cream-lotion-png.png',
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    title: "Pixel 4 modern edition",
    isManual: true
  },
    {
      image: 'https://image.similarpng.com/very-thumbnail/2020/04/cosmetic-products-ad-3d-skin-care-brand-cream-lotion-png.png',
      subtitle: "What do you say changed again the industry's standard dummy text ever since the 1500s.",
      title: "Pixel 5 modern edition",
      isManual: false
    },
    {
      image: 'https://image.similarpng.com/very-thumbnail/2020/04/cosmetic-products-ad-3d-skin-care-brand-cream-lotion-png.png',
      subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      title: "Pixel 6 modern edition",
      isManual: true
    }
  ]);
  
  useEffect(() => {
  
  });
  
  
  return (
    <div className="margin-bottom-300 margin-top-100">
      <Banner data={data}/>
      <HowItWorks/>
      <Filter/>
      
      <div className={'mt-3'}>
        <div className={"homepage-featured "}
             style={{backgroundImage: `url(${require('../../assets/Elivate9ja/ladies.png')})`}}>
          <div className={'homepage-cover col-md-12 m-flex m-pl-6'} style={{minHeight: " 325px"}}>
            <div className={'col-md-4 ticket-details-holder m-show'}>
              <Ticket ticket={5}/>
            </div>
            <div className={'col-md-4  m-flex flex-column m-p-2 justify-content-center'}>
              <div className={'title1 white-color'}> iPhone SE</div>
              <div className={'paragraph off-white-color'}>
                The all new Iphone SE is up for grabsThe all new Iphone SE is up for grabs
              </div>
              <div className={'col-md-10 mt-5'}>
                <RaffleTimer timer={'2 hr : 30 mins : 27 sec'}/>
              </div>
            </div>
            <div className={'col-md-4 d-flex align-items-center m-p-2 m-justify-content-normal m-mb-3'}>
              <WatchlistBtn/>
            </div>
            <div className={'col-md-4 ticket-details-holder m-hidden'}>
              <Ticket ticket={5}/>
            </div>
          </div>
        </div>
      </div>
      <div className={'mt-6 card-grid'}>
        <RaffleCard description={'The all new Iphone SE is up for grabsThe all new Iphone SE is up for grabs'}
                    timer={'1 hr : 30 mins : 27 sec'}
                    charity
                    ticket={10}
                    title={'Tag Heuer Formula 1'}
                    imgUrl={'https://pngimg.com/uploads/iphone_12/iphone_12_PNG19.png'}/>
        <RaffleCard description={'The all new Iphone SE is up for grabsThe all new Iphone SE is up for grabs'}
                    timer={'1 hr : 30 mins : 27 sec'}
                    title={'Tag Heuer Formula 1'}
                    imgUrl={'https://pngimg.com/uploads/iphone_12/iphone_12_PNG19.png'}/>
        <RaffleCard description={'The all new Iphone SE is up for grabsThe all new Iphone SE is up for grabs'}
                    timer={'1 hr : 30 mins : 27 sec'}
                    title={'Tag Heuer Formula 1'}
                    imgUrl={'https://pngimg.com/uploads/iphone_12/iphone_12_PNG19.png'}/>
        <RaffleCard description={'The all new Iphone SE is up for grabsThe all new Iphone SE is up for grabs'}
                    timer={'1 hr : 30 mins : 27 sec'}
                    charity
                    ticket={1000}
                    title={'Tag Heuer Formula 1'}
                    imgUrl={'https://pngimg.com/uploads/iphone_12/iphone_12_PNG19.png'}/>
        <RaffleCard
          description={'The all new Iphone SE is up for grabsThe all new Iphone SE is up for grabs'}
          timer={'1 hr : 30 mins : 27 sec'}
          title={'Tag Heuer Formula 1'}
          imgUrl={'https://pngimg.com/uploads/iphone_12/iphone_12_PNG19.png'}/>
        <RaffleCard
          description={'The all new Iphone SE is up for grabsThe all new Iphone SE is up for grabs'}
          timer={'1 hr : 30 mins : 27 sec'}
          title={'Tag Heuer Formula 1'}
          imgUrl={'https://pngimg.com/uploads/iphone_12/iphone_12_PNG19.png'}/>
        <RaffleCard description={'The all new Iphone SE is up for grabsThe all new Iphone SE is up for grabs'}
                    timer={'1 hr : 30 mins : 27 sec'}
                    title={'Tag Heuer Formula 1'}
                    imgUrl={'https://pngimg.com/uploads/iphone_12/iphone_12_PNG19.png'}/>
      
      
      </div>
      <div className={'mt-6 m-background'}>
        <div className={'m-flex justify-content-between'}>
          <div className={'col-md-10'}>
            <div className={'d-flex align-items-center'}>
              <div className={"title2"}>Elivate Prize Winners</div>
              <img alt={'icon'} src={require('../../assets/icons/prize.svg')}/>
            </div>
            <div className={'paragraph'}>
              Raffles recently won, don't miss out on the next raffles!
            </div>
          </div>
          <div className={'col-md-2'}>
            <FormButton title={'View all winners'}/>
          </div>
        </div>
        
        
        <div className={"col-md-12 winners-holder-div justify-content-center m-flex m-align-items-center"}>
          <HomepageWinners tickets={5}/>
          <HomepageWinners tickets={4}/>
          <HomepageWinners tickets={5}/>
        </div>
      </div>
      <Testimonials/>
    </div>
  );
}
export default Home;
