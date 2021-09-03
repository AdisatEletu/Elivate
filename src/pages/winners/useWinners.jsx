import axios from "axios";
import { useState } from "react"

export const useWinners =()=>{
    const [winners, setWinners] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)


    const fetchWinners =async(limit=12)=>{
        try {
            setLoading(true)
            const {data, success} = await axios.get(`/customer/raffle/winners?per_page=${limit}&page=${page}`)
            if(success){
                setWinners(data?.data)
            }
        } catch (error) {
            setLoading(false)
        }
    }

    return{
        winners,
        fetchWinners,
        loading
    }
}