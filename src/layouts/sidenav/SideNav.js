import React from "react";
import './sidenav.css'
import {NavLink} from "react-router-dom";
import {logoutUser} from '../../redux/actions/authActions';
import {connect }from 'react-redux'

const SideNav = ({logoutUser}) => {
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
            <div className={'col-md-10'}> Token</div>
          </NavLink>
          <NavLink to={'/history'} activeClassName={'active-class'}
                   className={'d-flex sidebar-link justify-content-between align-items-center'}>
            <img className={'col-md-1'} alt={'not'} src={require('../../assets/icons/history.svg')}/>
            <div className={'col-md-10'}> History</div>
          </NavLink>
          <NavLink to={'/transactions'} activeClassName={'active-class'}
                   className={'d-flex sidebar-link justify-content-between align-items-center'}>
            <img className={'col-md-1'} alt={'not'} src={require('../../assets/icons/notification.svg')}/>
            <div className={'col-md-10'}> Transactions</div>
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
        <div className={'log-out d-flex justify-content-between align-items-center pl-2'} onClick={logoutUser}>
          <img className={'col-md-1'} alt={'not'} src={require('../../assets/icons/logout.svg')}/>
          <div className={'col-md-10'}> Logout</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    uiReducer: state.uiReducer
  };
};
export default connect(mapStateToProps, { logoutUser })(SideNav);