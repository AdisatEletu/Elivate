import React from "react";



export const Entry = ({raffle}) =>{
  return(
    <div className={'p-4 '}>
     {raffle?.kind}
     </div>
  )
}