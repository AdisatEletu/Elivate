import React from "react";

export const SubHeader = ({subheader, text}) => {
  return (
    <>
      <div className={'bigTitle'}>{subheader}</div>
      <div className={'paragraph'}>{text}</div>
    </>
  )
};