import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../../comopnents/BreadCrumb/BreadCrumb';
import SubReseller from '../../comopnents/ReportUserList/SubReseller';
import Customer from '../../comopnents/ReportUserList/Customer';
import { useSelector } from 'react-redux';
import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableHeader
  } from 'react-bs-datatable';
import { Col, Row, Table } from 'react-bootstrap';


const Reportuserlist = async() => {
    const phone = useSelector(state => state?.appReport?.userListId);
    const [table, setTable] = useState({})

    console.log(phone)

    const data = {
        username_reseller: phone,
    }

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "get-all-users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setTable(data)
            });
    }, [])


    return (
    <>
        <section className='main_content clearfix'>
            <div className='main_content-lft'>
                <Sidebar />
            </div>
            <div className='main_content-rgt'>
                <BreadCrumb title='REPORT' subtitle='User Report' />
                <div className='tabsWarp'>
                <Tabs defaultActiveKey="Transfer" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Transfer" title="Sub Reseller List">
                        <SubReseller data={table.sub_reseller_info}/>
                    </Tab>
                    <Tab eventKey="Transfer" title="Customer List">
                        <Customer data={table.customer_info}/>
                    </Tab>
                </Tabs>
            </div>
            </div>
        </section>
    </>
  )
}

export default Reportuserlist
