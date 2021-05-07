import React from 'react';

const About = () => {
  return (
    <section id="about">
      <img src={require('../../assets/aboutUs.png')} className={'border-radius-20'} alt={'team-picture'}/>
      <div className={'card-grid align-items-center mt-6'}>
        <div>
          <div className={'paragraph grey-color'}>About us</div>
          <div className={'title1-regular'}>Elivate9ja is an online and offline raffle and promotional platform in Lagos
            state, Nigeria, established
            with the sole purpose of changing lives through fun and rewarding games where great prizes are raffled off.
          </div>
        </div>
        <div className={'paragraph grey-color'}>
          We believe raffles should be used in the service of great causes. That’s why we donate a percentage of
          earnings from every raffle to help charities in Lagos. In doing so, we encourage the giving culture in
          Nigeria, help create a better world while also helping people achieve their dreams.
        </div>
      </div>
      
      <div className={'container mt-6'}>
        <div className={'bigTitle text-align-center mb-5'}>Our Core Values</div>
        <div className={'card-grid'}>
          <div className={'d-flex flex-column align-items-center justify-content-center'}>
            <img alt={'icon'} src={require('../../assets/icons/transpiracy.svg')} className={'text-align-center'}/>
            <div className={'title2 text-align-center mt-3'}>Transparency</div>
            <div className={'paragraph mt-2  p-4 text-align-center'}>Our commitment to providing a transparent raffle
              platform is one of
              our core values. There are no foul play at Elivate9ja. Whenever you play, you can be sure that you are
              playing on safe ground.
            </div>
          </div>
          <div className={'d-flex flex-column align-items-center justify-content-center '}>
            <img alt={'icon'} src={require('../../assets/icons/justice.svg')} className={'text-align-center'}/>
            <div className={'title2 text-align-center mt-3'}>Equal Opportunities</div>
            <div className={'paragraph mt-2 text-align-center p-4'}>We are dedicated to providing everyone equal access
              to participate in raffles. No matter who you are, we will ensure you have the best experience possible on
              our platforms. We want you to experience what it feels like to win.
            </div>
          </div>
          <div className={'d-flex flex-column align-items-center justify-content-center'}>
            <img alt={'icon'} src={require('../../assets/icons/transform.svg')} className={'text-align-center'}/>
            <div className={'title2 text-align-center mt-3'}>Transforming lives</div>
            <div className={'paragraph mt-2 text-align-center p-4'}>At Elivate9ja, we are driven by the desire to change
              lives for the better. This can be seen in the rewards we offer, our affordable ticket pricing, and the
              charities we support.
            </div>
          </div>
          <div className={'d-flex flex-column align-items-center justify-content-center'}>
            <img alt={'icon'} src={require('../../assets/icons/about-charity.svg')} className={'text-align-center'}/>
            <div className={'title2 text-align-center mt-3'}>Charity</div>
            <div className={'paragraph mt-2 text-align-center p-4'}>We are committed to doing our part and giving back
              to our community. Donating to different charities helps us achieve that.
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <video className={'border-radius-20 mt-6 fullwidth'}
               autoPlay loop>
          <source
            src={('https://upload.wikimedia.org/wikipedia/commons/transcoded/1/18/Big_Buck_Bunny_Trailer_1080p.ogv/Big_Buck_Bunny_Trailer_1080p.ogv.360p.vp9.webm')}
            type={"video/mp4"}/>
          
          <div>
            It’s only natural that, as humans, we want a better lifestyle. The more we explore a world of possibilities,
            the closer this life is to our grasp. As you dream big, let us be part of what makes the dream a reality.
          </div>
        </video>
      </div>
    </section>
  );
};

export default About;
