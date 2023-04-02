import Link from 'next/link';
import { useRouter} from 'next/router';
import React,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Sidebar = () => {

  const {asPath} =useRouter();
  const [toggle, setToggle] = useState(false)
  const [userToggle, setUserToggle] = useState(false)
  const [nationalToggle, setNationaToggle] = useState(false)
  const [networkToggle, setNetworkToggle] = useState(false)
  const [reportToggle, setReportToggle] = useState(false)

  return (
    <>
      <div className='left_sidebar clearfix'>
        <nav className='navbarMenu'>
           <ul className='clearfix reset-list'>
              <li><Link href="/sample" className={asPath==='/sample' ? 'list active' : 'list'}><i class="ri-settings-3-fill"></i>Sample</Link></li>
              <li>
                <Link onClick={() => setUserToggle(!userToggle)} href='#'><i class="ri-user-line"></i>User<span><i class="ri-arrow-right-s-line"></i></span></Link>
                {userToggle && (
                  <ul className='clearfix reset-list'>
                    <li><Link href="/subdealer" className={asPath==='/subdealer' ? 'list active' : 'list'}>Create User</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setNationaToggle(!nationalToggle)} href='#'><i class="ri-profile-line"></i>National<span><i class="ri-arrow-right-s-line"></i></span></Link>
                {nationalToggle && (
                <ul className='clearfix reset-list'>
                  <li><Link href="/country" className={asPath==='/country' ? 'list active' : 'list'}>Country</Link></li>
                  <li><Link href="/circle" className={asPath==='/circle' ? 'list active' : 'list'}>Circle</Link></li>
                </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setNetworkToggle(!networkToggle)} href='#'><i class="ri-router-line"></i>Network<span><i class="ri-arrow-right-s-line"></i></span></Link>
                {networkToggle && (
                  <ul className='clearfix reset-list'>
                    <li><Link href="/service" className={asPath==='/service' ? 'list active' : 'list'}>Service</Link></li>
                    <li><Link href="/mobilenetwork" className={asPath==='/mobilenetwork' ? 'list active' : 'list'}>Mobile Network</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setReportToggle(!reportToggle)} href='#'><i class="ri-file-text-fill"></i>Reports<span><i class="ri-arrow-right-s-line"></i></span></Link>
                {reportToggle && (
                  <ul className='clearfix reset-list'>
                    <li><Link href="/agent-report" className={asPath==='/agent-report' ? 'list active' : 'list'}>Agent</Link></li>
                    <li><Link href="/dealer-report" className={asPath==='/dealer-report' ? 'list active' : 'list'}>Dealer</Link></li>
                    {/* <li><Link href="/subdealer-report" className={asPath==='/subdealer-report' ? 'list active' : 'list'}>SubDealer</Link></li> */}
                    <li><Link href="/organization" className={asPath==='/organization' ? 'list active' : 'list'}>Organization</Link></li>
                    <li><Link href="/transaction" className={asPath==='/transaction' ? 'list active' : 'list'}>Transaction</Link></li>

                  </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setToggle(!toggle)} href='#'><i class="ri-file-text-fill"></i>Report<span><i class="ri-arrow-right-s-line"></i></span></Link>
                {toggle &&(
                  <ul className='clearfix reset-list'>
                    <li><Link href="/agent-earning" className={asPath==='/agent-earning' ? 'list active' : 'list'}>Agent Earning</Link></li>
                    <li><Link href="/agent-due" className={asPath==='/agent-due' ? 'list active' : 'list'}>Agent Due</Link></li>
                    <li><Link href="/agent-recharge" className={asPath==='/agent-recharge' ? 'list active' : 'list'}>Agent Recharge</Link></li>
                  </ul>
                )}
              </li>
              <li><Link href="/datetime" className={asPath==='/datetime' ? 'list active' : 'list'}><i class="ri-radar-line"></i>DateTime</Link></li>
              <li><Link href="/settlement" className={asPath==='/settlement' ? 'list active' : 'list'}><i class="ri-radar-line"></i>Settlement</Link></li>
              <li><Link href="/indexapi" className={asPath==='/indexapi' ? 'list active' : 'list'}><i class="ri-file-text-line"></i>Api Index</Link></li>
              <li><Link href="/simulator" className={asPath==='/simulator' ? 'list active' : 'list'}><i class="ri-pages-fill"></i>Simulator</Link></li>
              <li><Link href="/activityLog" className={asPath==='/activityLog' ? 'list active' : 'list'}><i class="ri-pages-fill"></i>Actvity Log</Link></li>
              <li><Link href="/testcomponents" className={asPath==='/testcomponents' ? 'list active' : 'list'}><i class="ri-settings-3-fill"></i>Testcomponents</Link></li>
           </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
