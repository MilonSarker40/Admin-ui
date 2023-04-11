import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import AgentReportId from '../comopnents/AgentReportId/AgentReportId';
import AgentProfileReportComponent from '../comopnents/AgentProfileReport/AgentProfileReport';




const AgentProfileReport = () => {
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Agent Profile' subtitle='Report' />
            <div className='trxWrap'>
                <AgentProfileReportComponent />
           </div>
         </div>
      </section>
    </>
  )
}

export default AgentProfileReport
