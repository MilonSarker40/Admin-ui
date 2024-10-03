import React, {useEffect} from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import PurchaseTable from "../comopnents/ReportOrg/PurchaseTable";
import CommissionTable from "../comopnents/ReportOrg/CommissionTable";
import PurchaseHistoryTable from "../comopnents/ReportOrg/PurchaseHistoryTable";
import PurchaseForm from "../comopnents/ReportOrg/PurchaseForm";
import PurchaseApiForm from "../comopnents/ReportOrg/PurchaseApiForm";


const reportpurchase = () => {
    return (
        <>
        <section className='main_content clearfix'>
            <div className='main_content-lft'>
                <Sidebar />
            </div>
            <div className='main_content-rgt'>
                <BreadCrumb title='Organization report' subtitle='Report' />
                <div className='tabsWarp'>
                    <Tabs defaultActiveKey="Purchase" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Purchase" title="Purchase Report">
                            <PurchaseTable />
                            <PurchaseHistoryTable />
                            <CommissionTable />
                        </Tab>
                        <Tab eventKey="AddCommission" title="Commission Entry">
                            <PurchaseForm />
                        </Tab>
                        <Tab eventKey="AddPurchase" title="Purchase Entry">    
                            <PurchaseApiForm />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </section>
        </>
    )
}

export default reportpurchase