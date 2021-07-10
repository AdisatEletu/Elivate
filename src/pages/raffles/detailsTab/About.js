import React from "react";



export const AboutRaffle = ({raffle}) =>{
  return(
    <div className={'p-4 '}>
      {raffle?.about}
    </div>
  )
}