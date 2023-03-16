import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import ActivityLog from '../comopnents/ActivitiyLog/ActivityLog';

const activityLog = () => {
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Activity Log' subtitle='Activity Log' />
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="List" title="System Logs">
                        <ActivityLog />
                    </Tab>
                </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default activityLog
