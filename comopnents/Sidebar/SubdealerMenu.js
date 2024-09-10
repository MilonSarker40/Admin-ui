import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SubdealerMenu = () => {
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
                        <li><Link href="/reportorg" className={asPath === '/reportorg' ? 'list active' : 'list'}>Main Report</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default SubdealerMenu;