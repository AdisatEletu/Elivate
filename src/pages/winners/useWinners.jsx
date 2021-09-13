import axios from "axios";
import { useState } from "react"
import {getRequest} from"../../helpers/requests"
export const useWinners =()=>{
    const [winners, setWinners] = useState([]);
    const [winnerStats, setWinnerStats] = useState({});
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const [show, setShow] = useState(-1)
    const [limit, setLimit] = useState(12)

    const fetchWinners =async(pagelimit)=>{
        let url ="";
        if(pagelimit){
            url = `/customer/raffle/winners?per_page=${pagelimit}&page=${page}`
        }else{
           url= `/customer/raffle/winners?per_page=${limit}&page=${page}`
        }
        try {
            setLoading(true)
            const {data, success} = await getRequest(url)
            if(success){
                setWinners(data?.data)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const fetchWinnersStat =async()=>{
        try {
            setLoading(true)
            const {data, success} = await getRequest(`/customer/profile/stats`)
            if(success){
                setWinnerStats(data)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

   const  handleLoadMore =()=>{
        setLimit(limit * 2)
    }

   const handleHover =(id)=>{
        setShow(id)
   }
    return{
        winners,
        fetchWinners,
        loading,
        winnerStats,
        fetchWinnersStat,
        show,
        handleHover,
        handleLoadMore,
        limit
    }
}