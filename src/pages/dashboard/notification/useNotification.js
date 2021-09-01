import { useState } from "react"
import { getRequest } from "../../../helpers/requests"


export const useNotification =()=>{
    const [notifications, setNotification] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchNotification =async()=>{
        try {
            const {data} = await getRequest('/customer/notifications')
        if(data.success){
            console.log({data})
            setNotification(data?.data?.data)
        }
        setLoading(false)
        } catch (error) {
           console.log(error) 
        }
        
    }
    return{
        notifications,
        fetchNotification,
        loading
    }
}