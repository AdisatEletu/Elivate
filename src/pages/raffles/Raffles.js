import React, {useEffect} from "react";
import {setSubHeaderAction} from "../../redux/actions/subHeaderActions";
import {connect} from "react-redux";

const Raffles =({header})=>{
  useEffect(()=>{
    setSubHeaderAction("Ongoing and upcoming Raffles")
  });
  
  
  console.log(header);
  
  return(
    <div>
      <div className={'mt-6 p-5 m'}>
      </div>
     {header.title}
    </div>
  )
};



const mapStateToProps = (state)=>{
  return {
    header: state.headerReducer
  }
};

export default connect(mapStateToProps,{setSubHeaderAction})(Raffles);