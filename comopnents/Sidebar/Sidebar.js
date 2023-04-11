import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { use, useState } from 'react';
import { useSelector } from 'react-redux';

import AgentMenu from './AgentMenu';
import AdminMenu from './AdminMenu';

const Sidebar = () => {
    const { asPath } = useRouter();
    const [toggle, setToggle] = useState(false)
    const [userToggle, setUserToggle] = useState(false)
    const [nationalToggle, setNationaToggle] = useState(false)
    const [networkToggle, setNetworkToggle] = useState(false)
    const [reportToggle, setReportToggle] = useState(false)

    const userType = useSelector(state => state?.auth?.loginData.type)

    // TODO
    // DYNAMIC MENU 
    const menu = (type) => {
        if(type == "admin"){
            return <AdminMenu />
        }else if (type == "agent"){
            return <AdminMenu />
        }
    }

    const userMenu = menu(userType);

    return (
        <>
            {userMenu}
        </>
    )
}

export default Sidebar
