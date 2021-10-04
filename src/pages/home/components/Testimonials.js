import React from "react";
import './testimonial.css'

export const Testimonials = () => {
  return (
    <div className={"p-5"}>
      <div className={'m-flex flex-column align-items-center'}>
        <div className={'bigTitle'}>What our clients say</div>
        <div className={'paragraph'}> Join our community of winners.</div>
      </div>
      <div className={'m-flex t-mt-6'}>
        <div style={{backgroundImage: `url(${require('../../../assets/testimonialRec.svg')})`,     backgroundRepeat: "no-repeat",
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center'}} className={'col-md-5 '}>
          <img alt={'testimonial'} src={require('../../../assets/testimonialImag.jpg')} className='testimony'/>
        </div>
        <div className={'col-md-7 m-mt-6 t-mt-6'}>
          <div className={'container'}>
          <figure className="quote">
            <blockquote>
            Elivate9ja is a trusted and transparent raffle platform, I participated in their contest, and I won.
            </blockquote>
            <figcaption className={"mt-4"}>
              <span className={'primary-color header3'}>  - Chisom Elias</span> <br/> <cite className={"paragraph"}>Elivate9ja Customer</cite>  </figcaption>
          </figure>
          </div>
        </div>
      </div>
    </div>
  )
};