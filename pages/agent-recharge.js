import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import RechargeTable from '../comopnents/AgentRecharge/RechargeTable';
import RechargeId from '../comopnents/AgentRecharge/RechargeId';

const agent = () => {
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Agent Recharge' subtitle='Agent Recharge' />
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="List" title="List">
                        <RechargeId />
                    </Tab>
                </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default agent
