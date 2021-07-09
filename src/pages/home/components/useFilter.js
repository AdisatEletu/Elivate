// import {useState} from "React";
// import handleError from "../../../helpers/handleError";
// import { getRequest } from "../../../helpers/requests";


// export const useFilter =()=>{
    // const [categories, setCategories] = useState([])
    // const [loading, setLoading] = useState(true)


    // const getCategories=async ()=>{
    //    try {
    //     const {data, success} = await getRequest(`/customer/category`)
    //     if(success){
    //         setCategories(data.data)
    //     }
    //     setLoading(false)
    //    } catch (error) {
    //        handleError(error)
    //        setLoading(false)
    //    }
    // }
    // return{
    //     categories, getCategories,loading
    // }
// }

import { useState } from "react";
import handleError from "../../../helpers/handleError";
import { getRequest } from "../../../helpers/requests";
import {useRaffle} from "../../raffles/useRaffle";

export const useFilter =()=>{
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
  
  const {getRaffles, raffles} = useRaffle();

    const getCategories=async ()=>{
       try {
        const {data, success} = await getRequest(`/customer/category`);
        if(success){
            setCategories(data.data)
        }
        setLoading(false)
       } catch (error) {
           handleError(error);
           setLoading(false)
       }
    }
    const  handleChange=(value)=> {
    console.log(`selected ${value}`);
    
  }
  
    return{
        categories, getCategories,loading, handleChange
    }
}