import { useState } from "react"
import { getRequest, putRequest } from "../../../helpers/requests"


export const useNotification =()=>{
    const [notifications, setNotification] = useState([])
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [selectedNotification, setSelectedNotification]= useState({})
    const [requesting, setRequesting] = useState(false)
    const [limit, setLimit] = useState(15)
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)

    const fetchNotification =async()=>{
        try {
            const {data, success} = await getRequest(`/customer/notifications?per_page=${limit}&page=${page}`)
        if(success){
            setNotification(data?.data)
            setTotal(data?.total)
        }
        setLoading(false)
        } catch (error) {
           console.log(error) 
        }
        
    }
    const handlePageChange = (pageNumber) => {
        setPage(pageNumber)
      };

    const toggleOn = async(notification) => {
        setModal(true)
        setRequesting(true)
        await putRequest(`/customer/notifications/${notification.id}`)
        setSelectedNotification(notification)
        setRequesting(false)
        
    };

    const toggleOff = async() => {
        setModal(false)
    };
    return{
        notifications,
        fetchNotification,
        loading,
        toggleOn,
        modal,
        selectedNotification,
        requesting,
        handlePageChange,
        limit,
        page,
        toggleOff,
        total
    }
}