import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../../comopnents/BreadCrumb/BreadCrumb';
import TrxdtTableId from '../../comopnents/Trxdt/TrxdtTableId';



const AgentReportId = () => {
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Transaction Details' subtitle='Transaction Details' />
            <div className='tabsWarp'>
              <TrxdtTableId />
           </div>
         </div>
      </section>
    </>
  )
}

export default AgentReportId