import React from "react";
import {FormButton} from "../components/forms/Button";
import {Link, NavLink} from "react-router-dom";


export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={"footer"}>
      <div className={""}
           style={{
             backgroundImage: `url(${require('../assets/—Pngtree.png')})`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
             minHeight: '620px'
           }}
      >
        <div className={"d-flex flex-column align-items-center col-md-12 justify-content-center p-4"}>
          <div className={'sub-footer-holder'}>
            <div className={"footer-info d-flex flex-column justify-content-center align-items-center"}
                 style={{
                   backgroundImage: `url(${require('../assets/—Pngtree.png')})`,
                   backgroundPosition: 'center',
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat',
                 }}
            >
              <div className={'bigTitle m-fs-24 '}>
                Get started entering various <br/> raffles and winning
              </div>
              <div className={' mt-4'}>
                <FormButton title={"Start bidding to enter raffle"} className={"pr-3 pl-3 m-fs-36 "}/>
              </div>
            
            </div>
          </div>
          <div
            className={'title2 d-flex flex-column align-items-center justify-content-center col-md-12 mt-5 col-md-90'}>
            <div>Trust & security</div>
            <div className={'grid-container grid-column-gap col-md-3 mt-4'}>
              <img alt={'image'} className={'grid-item'} src={require('../assets/security-images/image 34.png')}
                   height={30} width={50}/>
              <img alt={'image'} className={'grid-item'} src={require('../assets/security-images/Group 5671.png')}
                   height={30} width={50}/>
              <img alt={'image'} className={'grid-item'} src={require('../assets/security-images/image 36.png')}
                   height={30} width={50}/>
            </div>
            <div className={'col-md-12 mt-5 mb-5'}>
              <hr/>
            </div>
            <div className={'footer-links-holder'}>
              <Link to="/">
                <img alt={'logo'} src={require('../assets/Elivate9ja_Logo_On Black.png')} 
                     height={'120px'}/>
              </Link>
              <div className={'footer-links white-color'}>
                <ul className="paragraph">
                  <li>
                    <Link to="/about">Raffles</Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/faq">Help & FAQs</Link>
                  </li>
                  <li>
                    <Link to="/charity">Charity</Link>
                  </li>
                  <li>
                    <Link to="/winners">Winners</Link>
                  </li>
                  <li>
                    <Link to="/tickets">Tokens</Link>
                  </li>
                </ul>
              
              </div>
              <div className={' mt-3'}>
                <div className={'socials-holder'}>
                  <img alt={'social icon'} src={require('../assets/icons/Frame.png')} className={'m-2'}/>
                  <img alt={'social icon'} src={require('../assets/icons/Frame (1).png')} className={'m-2'}/>
                  <img alt={'social icon'} src={require('../assets/icons/Frame (2).png')} className={'m-2'}/>
                  <img alt={'social icon'} src={require('../assets/icons/Frame (3).png')} className={'m-2'}/>
                </div>
              </div>
            </div>
          </div>
          <div className={'paragraph text-align-center col-md-4 mt-2'}>
            &copy; Copyright {date} Elivate9ja Ltd. All rights reserved. Company No. 12345567
            123 Lekki express way. support@elivate9ja.com
           <NavLink to='/privacy' className={"pointer"}> Privacy Policy</NavLink><NavLink className={"pointer"} to='/terms'> Terms & Condition</NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}