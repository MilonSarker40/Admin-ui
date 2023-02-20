import React from 'react';
import { useRouter } from 'next/router';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../../comopnents/BreadCrumb/BreadCrumb';
import EarningTableId from '../../comopnents/AgentReport/EarningTableId';

const RechargeReport = () => {
  const router = useRouter()
  const {id} = router.query
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Agent Earning ' subtitle='Agent Earning' />
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="List" title="List">
                      <EarningTableId id={id}/>
                    </Tab>
                </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default RechargeReport