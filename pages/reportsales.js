import React, {useEffect} from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import Summary from "../comopnents/ReportOrg/Summary";
import SalesTable from "../comopnents/ReportOrg/SalesTable";
import RevenueTable from "../comopnents/ReportOrg/RevenueTable";
import CollectionTable from "../comopnents/ReportOrg/CollectionTable";

const reportsales = () => {
    return (
        <>
        <section className='main_content clearfix'>
            <div className='main_content-lft'>
                <Sidebar />
            </div>
            <div className='main_content-rgt'>
                <BreadCrumb title='Organization report' subtitle='Report' />
                <div className='tabsWarp'>
                    <Tabs defaultActiveKey="Summary" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Summary" title="Summary Report">
                            <Summary />
                        </Tab>
                        <Tab eventKey="Sales" title="Sales Report">
                            <SalesTable />
                        </Tab>
                        <Tab eventKey="Revenue" title="Revenue Report">
                            <RevenueTable />
                        </Tab>
                        <Tab eventKey="Collection" title="Collection Report">
                            <CollectionTable />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </section>
        </>
    )
}

export default reportsales