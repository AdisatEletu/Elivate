import React from "react";
import {Table} from "reactstrap";


const Payment = () => {
  return (
    <Table>
      <thead>
      <tr>
        <th className={'paragraph-bold'}>Email </th>
        <th className={'paragraph-bold'}>Amount</th>
        <th className={'paragraph-bold'}>Date</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td className={'fw-400 grey-color p-3'}>deanna.curtis@example.com</td>
        <td> 326</td>
        <td>5 hours ago</td>
      </tr>
      <tr>
        <td className={'fw-400 grey-color p-3'}>deanna.curtis@example.com</td>
        <td> 326</td>
        <td>6 hours ago</td>
      </tr>
      <tr>
        <td className={'fw-400 grey-color p-3'}>deanna.curtis@example.com</td>
        <td> 326</td>
        <td>6 hours ago</td>
      </tr>
      <tr>
        <td className={'fw-400 grey-color p-3'}>deanna.curtis@example.com</td>
        <td> 326</td>
        <td>6 hours ago</td>
      </tr>
    
      </tbody>
    </Table>
  )
};

export default Payment