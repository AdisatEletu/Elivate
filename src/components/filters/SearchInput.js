import React from "react";

export const SearchInput = ({value, 
  onSubmit, handleSearchChange, }) => {
  return (
    <form onSubmit={(e)=>{e.preventDefault(); onSubmit()}} className={'search-input fullwidth d-flex align-items-center justify-content-between'}>
      <input placeholder={'Search list'} onChange={(e)=>handleSearchChange(e.target.value)} value={value} className={'search-input-style'}/>
      <img alt={'srch'} onClick={onSubmit} src={require('../../assets/icons/Search.svg')} width={30} height={30}/>
    </form>
  )
};