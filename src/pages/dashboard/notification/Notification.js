import React,{useEffect, useState} from "react";
import EmptyNotification from "./EmptyNotification";
import {useNotification} from "./useNotification"
const Notification = () => {

  const { notifications,
    fetchNotification,
    loading} = useNotification();

    useEffect(() => {
      fetchNotification()
    }, [loading])
    console.log({notifications})
  return (
    <div>
      <div className={'profile-card'}>
        <div className={'header3 mb-3 mt-3 fw-bold'}>Notification(s)</div>
        
        <EmptyNotification/>
        {/*<Table>*/}
        {/*  <thead>*/}
        {/*  <tr>*/}
        {/*    <th className={'paragraph-bold'}>Title</th>*/}
        {/*    <th className={'paragraph-bold'}>Time</th>*/}
        {/*  </tr>*/}
        {/*  </thead>*/}
        {/*  <tbody>*/}
        {/*  <tr>*/}
        {/*    <td className={'fw-400 grey-color p-3'}>You triggered a password reset</td>*/}
        {/*    <td>6 hours ago</td>*/}
        {/*  </tr>*/}
        {/*  <tr>*/}
        {/*    <td className={'fw-400 grey-color p-3'}>You triggered a password reset</td>*/}
        {/*    <td>6 hours ago</td>*/}
        {/*  </tr>*/}
        {/*  <tr>*/}
        {/*    <td className={'fw-400 grey-color p-3'}>You triggered a password reset</td>*/}
        {/*    <td>6 hours ago</td>*/}
        {/*  </tr>*/}
        {/*  <tr>*/}
        {/*    <td className={'fw-400 grey-color p-3'}>You triggered a password reset</td>*/}
        {/*    <td>6 hours ago</td>*/}
        {/*  </tr>*/}
        {/*  */}
        {/*  </tbody>*/}
        {/*</Table>*/}
      </div>
    </div>
  )
};

export default Notification