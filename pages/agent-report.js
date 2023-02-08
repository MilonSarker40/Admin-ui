import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import AgReportTable from '../comopnents/AgentReport/AgReportTable';



const AgentReport = () => {
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Agent REPORT' subtitle='Agent REPORT' />
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="List" title="List">
                        <AgReportTable />
                    </Tab>
                </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default AgentReport
