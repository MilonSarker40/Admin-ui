import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const AgentMenu = () => {
    const { asPath } = useRouter();
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
                        <li>
                            <Link onClick={() => setToggle(!toggle)} href='#'><i class="ri-file-text-fill"></i>Self Report<span><i class="ri-arrow-right-s-line"></i></span></Link>
                            {toggle && (
                                <ul className='clearfix reset-list'>
                                    <li><Link href="/agent-earning" className={asPath === '/agent-earning' ? 'list active' : 'list'}>Agent Earning</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link href="/simulator" className={asPath === '/simulator' ? 'list active' : 'list'}><i class="ri-pages-fill"></i>Simulator</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default AgentMenu;