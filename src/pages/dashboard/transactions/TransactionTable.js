import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import moment from 'moment'
import './table.css'
// import {imageBaseUrl} from "../../utils/url";

const TransactionTableItem = ({data,i, SN}) => {
  const status = data.status;
  const {customer} = data;
  return (
    <tr
      className={"pointer click-view"}
    >
      <td className={'bold'}>{SN}</td>
      <td>{data.order_num}</td>
      <td>{moment(data.transaction_date).format('DD-MM-YYYY @ hh:mm a')}</td>
      <td>
        <div className={'d-flex align-center black-color'}>
          <div
            className={
              status === 'initiate-transaction' ? 'black badge' : status === 'failed' ? "badge red " : status === 'success' ? "badge success" : "badge brown"
            }>
           {status}
          </div>
        </div>
      </td>
      <td>
      
      </td>
    </tr>
  )
};

export default withRouter(TransactionTableItem)
