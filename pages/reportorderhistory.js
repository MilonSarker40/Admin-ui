import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import OrderHistoryUserTable from '../comopnents/ReportOrderHistory/OrderHistoryUserTable';


const reportorderhistory = () => {
  return (
    <>
    <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Order History' subtitle='Report' />
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
               <Tab eventKey="List" title="Report">
                <OrderHistoryUserTable />
               </Tab>
              </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default reportorderhistory
