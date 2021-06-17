import React from "react";
import './sidenav.css'
import {NavLink} from "react-router-dom";

const SideNav = () => {
  return (
    <div className={'side-nav'}>
      <div className={'box-shadow sidenav-holder d-flex flex-column justify-content-between p-3'}>
        <ul>
          <NavLink to={'/dashboard'} activeClassName={'active-class'}
                   className={'d-flex sidebar-link justify-content-between align-items-center'}>
            <img className={'col-md-1'} alt={'not'} src={require('../../assets/icons/Frame.svg')}/>
            <div className={'col-md-10'}> Dashboard</div>
          </NavLink>
          <NavLink to={'/notifications'} activeClassName={'active-class'}
                   className={'d-flex sidebar-link justify-content-between  align-items-center'}>
            <img className={'col-md-1'} alt={'not'} src={require('../../assets/icons/notification.svg')}/>
            <div className={'col-md-10'}> Notification</div>
          </NavLink>
          <NavLink to={'/tickets'} activeClassName={'active-class'}
                   className={'d-flex sidebar-link justify-content-between  align-items-center'}>
            <img className={'col-md-1'} alt={'not'} src={require('../../assets/icons/grey-ticket.svg')}/>
            <div className={'col-md-10'}> Ticket</div>
          </NavLink>
          <NavLink to={'/history'} activeClassName={'active-class'}
                   className={'d-flex sidebar-link justify-content-between align-items-center'}>
            <img className={'col-md-1'} alt={'not'} src={require('../../assets/icons/history.svg')}/>
            <div className={'col-md-10'}> History</div>
          </NavLink>
          <NavLink to={'/payments'} activeClassName={'active-class'}
                   className={'d-flex sidebar-link justify-content-between align-items-center'}>
            <img className={'col-md-1'} alt={'not'} src={require('../../assets/icons/notification.svg')}/>
            <div className={'col-md-10'}> Payments</div>
          </NavLink>
          <NavLink to={'/referral'} activeClassName={'active-class'}
                   className={'d-flex sidebar-link justify-content-between align-items-center'}>
            <img className={'col-md-1'} alt={'not'} src={require('../../assets/icons/referrals.svg')}/>
            <div className={'col-md-10'}> Referrals</div>
          </NavLink>
          <NavLink to={'/profile'} activeClassName={'active-class'}
                   className={'d-flex sidebar-link justify-content-between align-items-center'}>
            <img className={'col-md-1'} alt={'not'} src={require('../../assets/icons/profile.svg')}/>
            <div className={'col-md-10'}> Profile</div>
          </NavLink>
        </ul>
        <div className={'log-out d-flex justify-content-between align-items-center pl-2'} onClick={()=> console.log('logout')}>
          <img className={'col-md-1'} alt={'not'} src={require('../../assets/icons/logout.svg')}/>
          <div className={'col-md-10'}> Logout</div>
        </div>
      </div>
    </div>
  )
}
export default SideNav