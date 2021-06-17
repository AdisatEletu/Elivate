import React from "react";
import {Table} from "reactstrap";


const Referrals = () => {
  return (
    <div>
      {/*<div className={'header3  '}>Your Wishlist</div>*/}
      <Table className={'mt-3'}>
        <thead>
        <tr>
          <th className={'paragraph-bold'}>Email Invited</th>
          <th className={'paragraph-bold'}>Tickets Won</th>
          <th className={'paragraph-bold'}>Date</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className={'fw-400 grey-color p-3'}>deanna.curtis@example.com</td>
          <td><img src={require('../../../assets/icons/cinema 1.svg')} alt={'ticket'}/> &nbsp; 326</td>
          <td>5 hours ago</td>
        </tr>
        <tr>
          <td className={'fw-400 grey-color p-3'}>deanna.curtis@example.com</td>
          <td><img src={require('../../../assets/icons/cinema 1.svg')} alt={'ticket'}/> &nbsp; 326</td>
          <td>6 hours ago</td>
        </tr>
        <tr>
          <td className={'fw-400 grey-color p-3'}>deanna.curtis@example.com</td>
          <td><img src={require('../../../assets/icons/cinema 1.svg')} alt={'ticket'}/> &nbsp; 326</td>
          <td>6 hours ago</td>
        </tr>
        <tr>
          <td className={'fw-400 grey-color p-3'}>deanna.curtis@example.com</td>
          <td><img src={require('../../../assets/icons/cinema 1.svg')} alt={'ticket'}/> &nbsp; 326</td>
          <td>6 hours ago</td>
        </tr>
        
        </tbody>
      </Table>
    </div>
  )
};

export default Referrals