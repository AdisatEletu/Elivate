import React from "react";
import './testimonial.css'

export const Testimonials = () => {
  return (
    <div className={"p-5"}>
      <div className={'m-flex flex-column align-items-center'}>
        <div className={'bigTitle'}>What our clients say</div>
        <div className={'paragraph'}>Bidding on Elivate9ja happens in THREE easy steps</div>
      </div>
      <div className={'m-flex'}>
        <div style={{backgroundImage: `url(${require('../../../assets/testimonialRec.svg')})`}} className={'col-md-5'}>
          <img alt={'testimony'} src={require('../../../assets/image 33.png')}/>
        </div>
        <div className={'col-md-7 mt-6'}>
          <div className={'container'}>
          <figure className="quote">
            <blockquote>
              Elivate9ja is a one-stop raffle, games and promotional platform available for both online and physical participation.
            </blockquote>
            <figcaption className={"mt-4"}>
              <span className={'primary-color header3'}> Mary Frances Jones</span> <br/> <cite className={"paragraph"}>Head of Marketing, MTN Trade visibility.s</cite>  </figcaption>
          </figure>
          </div>
        </div>
      </div>
    </div>
  )
};