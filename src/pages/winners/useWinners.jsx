import axios from "axios";
import { useState } from "react"
import {getRequest} from"../../helpers/requests"
export const useWinners =()=>{
    const [winners, setWinners] = useState([]);
    const [winnerStats, setWinnerStats] = useState({});
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)


    const fetchWinners =async(limit=12)=>{
        try {
            setLoading(true)
            const {data, success} = await getRequest(`/customer/raffle/winners?per_page=${limit}&page=${page}`)
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
    return{
        winners,
        fetchWinners,
        loading,
        winnerStats,
        fetchWinnersStat
    }
}