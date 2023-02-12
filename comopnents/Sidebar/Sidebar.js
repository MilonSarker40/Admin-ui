import Link from 'next/link';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';






const Sidebar = () => {


  return (
    <>
      <div className='left_sidebar clearfix'>
       {/* <div className='sidebar-head'>
          <h1><i class="ri-dashboard-fill"></i>dashboard</h1>
        </div> */}
        <nav className='navbarMenu'>
           <Link href="/sample" active><i class="ri-settings-3-fill"></i>Sample</Link>
          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic">
            <i class="ri-user-line"></i>User<span><i class="ri-arrow-right-s-line"></i></span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/dealer">Dealer</Dropdown.Item>
              <Dropdown.Item href="/subdealer">Sub Dealer</Dropdown.Item>
              <Dropdown.Item href="/agent">Agent</Dropdown.Item>
              <Dropdown.Item href="/report">Report</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic">
              <i class="ri-profile-line"></i>National<span><i class="ri-arrow-right-s-line"></i></span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/country">Country</Dropdown.Item>
              <Dropdown.Item href="/circle">Circle</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic">
            <i class="ri-router-line"></i>Network<span><i class="ri-arrow-right-s-line"></i></span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/service">Service</Dropdown.Item>
              <Dropdown.Item href="/mobilenetwork">Mobile Network</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic">
            <i class="ri-file-text-fill"></i>Report<span><i class="ri-arrow-right-s-line"></i></span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/agent-earning">Agent Earning</Dropdown.Item>
              <Dropdown.Item href="/agent-due">Agent Due</Dropdown.Item>
              <Dropdown.Item href="/agent-recharge">Agent Recharge</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link href="/settlement" active><i class="ri-radar-line"></i>Settlement</Link>
          <Link href="/agent-report" active><i class="ri-file-text-line"></i>Agent Report</Link>
          <Link href="/indexapi" active><i class="ri-file-text-line"></i>Api Index</Link>
          <Link href="/simulator" active><i class="ri-pages-fill"></i>Simulator</Link>
          <Link href="/testcomponents" active><i class="ri-settings-3-fill"></i>Test Component</Link> 
        </nav>
      </div>
    </>
  )
}

export default Sidebar
