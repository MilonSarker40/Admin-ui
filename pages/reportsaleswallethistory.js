import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import SalesWalletUserTable from '../comopnents/ReportSalesWalletHistory/SalesWalletUserTable';


const reportsaleswallethistory = () => {
  return (
    <>
    <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Salesmen Wallet History' subtitle='Report' />
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
               <Tab eventKey="List" title="Report">
                  <SalesWalletUserTable />
               </Tab>
              </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default reportsaleswallethistory
