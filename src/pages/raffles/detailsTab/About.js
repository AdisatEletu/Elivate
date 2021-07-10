import React from "react";



export const AboutRaffle = ({raffle}) =>{
  return(
    <div className={'p-4 '}  dangerouslySetInnerHTML={{__html: raffle.about }} />
    
  )
}