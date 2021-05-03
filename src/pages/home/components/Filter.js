import React from "react";
import {SearchInput} from "../../../components/filters/SearchInput";
import {DropDown} from "../../../components/dropDown/DropDown";

export const Filter = ({classNames}) => {
  return (
    <div className={`m-flex m-align-items-center justify-content-between ${classNames}`}>
      <div className={'d-flex align-items-center justify-content-between'}>
        <div style={{width: '30%'}}>
          <DropDown placeholder={'Category'}/>
        </div>
    
        <div className={'filter-width d-flex align-items-center'}>
          <div style={{marginTop: "27px"}}> Sort: &nbsp; </div>
          <div className={''} style={{width: '80%'}}><DropDown placeholder={'Popularity'}/></div>
        </div>
      </div>
      
      <div className={'col-md-4'}>
        <SearchInput/>
      </div>
     
    </div>
  )
};