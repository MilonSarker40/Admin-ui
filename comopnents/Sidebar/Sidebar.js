import Link from 'next/link';
import { useRouter} from 'next/router';
import React,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';







const Sidebar = () => {
  const {asPath} =useRouter();

  return (
    <>
      <div className='left_sidebar clearfix'>
        <nav className='navbarMenu'>
           <Link href="/sample" className={asPath==='/sample' ? 'list active' : 'list'}><i class="ri-settings-3-fill"></i>Sample</Link>
           <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic">
            <i class="ri-user-line"></i>User<span><i class="ri-arrow-right-s-line"></i></span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/dealer" className={asPath==='/dealer' ? 'list active' : 'list'}>Dealer</Dropdown.Item>
              <Dropdown.Item href="/subdealer" className={asPath==='/subdealer' ? 'list active' : 'list'}>Sub Dealer</Dropdown.Item>
              <Dropdown.Item href="/agent" className={asPath==='/agent' ? 'list active' : 'list'}>Agent</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic">
              <i class="ri-profile-line"></i>National<span><i class="ri-arrow-right-s-line"></i></span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/country" className={asPath==='/country' ? 'list active' : 'list'}>Country</Dropdown.Item>
              <Dropdown.Item href="/circle" className={asPath==='/circle' ? 'list active' : 'list'}>Circle</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic">
            <i class="ri-router-line"></i>Network<span><i class="ri-arrow-right-s-line"></i></span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/service" className={asPath==='/service' ? 'list active' : 'list'}>Service</Dropdown.Item>
              <Dropdown.Item href="/mobilenetwork" className={asPath==='/mobilenetwork' ? 'list active' : 'list'}>Mobile Network</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic">
            <i class="ri-file-text-fill"></i>Reports<span><i class="ri-arrow-right-s-line"></i></span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/agent-report" className={asPath==='/agent-report' ? 'list active' : 'list'}>Agent Report</Dropdown.Item>
              <Dropdown.Item href="/dealer-report" className={asPath==='/dealer-report' ? 'list active' : 'list'}>Dealer Report</Dropdown.Item>
              <Dropdown.Item href="/subdealer-report" className={asPath==='/subdealer-report' ? 'list active' : 'list'}>SubDealer Report</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic">
            <i class="ri-file-text-fill"></i>Report<span><i class="ri-arrow-right-s-line"></i></span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/agent-earning" className={asPath==='/agent-earning' ? 'list active' : 'list'}>Agent Earning</Dropdown.Item>
              <Dropdown.Item href="/agent-due" className={asPath==='/agent-due' ? 'list active' : 'list'}>Agent Due</Dropdown.Item>
              <Dropdown.Item href="/agent-recharge" className={asPath==='/agent-recharge' ? 'list active' : 'list'}>Agent Recharge</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link href="/settlement" className={asPath==='/settlement' ? 'list active' : 'list'}><i class="ri-radar-line"></i>Settlement</Link>
          <Link href="/indexapi" className={asPath==='/indexapi' ? 'list active' : 'list'}><i class="ri-file-text-line"></i>Api Index</Link>
          <Link href="/simulator" className={asPath==='/simulator' ? 'list active' : 'list'}><i class="ri-pages-fill"></i>Simulator</Link>
          <Link href="/organization" className={asPath==='/organization' ? 'list active' : 'list'}><i class="ri-pages-fill"></i>Organization</Link>
          <Link href="/testcomponents" className={asPath==='/testcomponents' ? 'list active' : 'list'}><i class="ri-settings-3-fill"></i>Test Component</Link> 
        </nav>
      </div>
    </>
  )
}

export default Sidebar
