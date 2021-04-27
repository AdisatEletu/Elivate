import React from "react";

export const SearchInput = () => {
  return (
    <div className={'search-input fullwidth d-flex align-items-center justify-content-between'}>
      <input placeholder={'Search list'} className={'search-input-style'}/>
      <img alt={'srch'} src={require('../../assets/icons/Search.svg')} width={30} height={30}/>
    </div>
  )
};