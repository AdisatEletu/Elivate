import React, {useEffect, useState} from "react";
import {RaffleTimer} from "../home/components/RaffleTimer";
import {WatchlistBtn} from "../home/components/WatchlistBtn";


const Charity = () => {
  const [index, setIndex] = useState(0);
  
  const [data, setData] = useState([{
    image: `${require('../../assets/charity.png')}`,
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
  
  
  const handleSlideShow=()=>{
    if(index + 1 < data.length){
      setIndex(index+1);
    }else{
      setIndex(0)
    }
  };
  
  useEffect(()=>{
    // setInterval(()=>handleSlideShow(), 10000);
  },[index]);
  
  return (
    <section>
      <div className={'banner-bg banner'}>
        <div className={"col-md-12 d-flex flex-column m-flex light-blue-bg"}>
          <div className={'col-md-12 d-flex m-flex'} key={index}>
            <div className={'col-md-6 d-flex flex-column justify-content-center p-5 m-text-align-center'}>
              <div className={'bigTitle white-color m-fs-24'}>
                {data[index].title}
              </div>
              <div className={"paragraph off-white-color m-mt-1"}>
                {data[index].subtitle}
              </div>
              <div className={'col-md-7 mt-5'}>
                <RaffleTimer timer={'1 hr : 30 mins : 27 sec'}/>
              </div>
              <div className={'mt-5'}>
                <WatchlistBtn/>
              </div>
            </div>
        
           
          </div>
          <div className={'d-flex justify-content-center p-3 carousel-holder'}>
            {data.map((slides, index) =>
              <div key={index} onClick={()=>setIndex(index)} className={'slider-icon'}/>
            )}
          </div>
        </div>
      </div>
    </section>
  )
};

export default Charity