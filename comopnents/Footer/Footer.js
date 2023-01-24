import Link from 'next/link';
import React from 'react';
import {Col, Row} from 'reactstrap';
import classes from './footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer_socail_icon'>
            <ul className='clearfix reset-list'>
              <li><Link href='#'><i class="ri-facebook-fill"></i></Link></li>
              <li><Link href='#'><i class="ri-twitter-fill"></i></Link></li>
              <li><Link href='#'><i class="ri-linkedin-fill"></i></Link></li>
              <li><Link href='#'><i class="ri-youtube-fill"></i></Link></li>
            </ul>
          </div>
          <div className='footer_innr'>
            <p className='text-right'>© 2023 Admin Panel. All Rights Reserved</p>
          </div> 
      </footer>
    </>
  )
}

export default Footer
