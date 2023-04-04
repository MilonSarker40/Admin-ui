import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../../comopnents/BreadCrumb/BreadCrumb';
import DealerSubDealerAgentReport from '../../comopnents/Dealer/DealerSubDealerAgentReport';

const DealerSubDealerAgent = () => {
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Dealer Report' subtitle='Agent List for the Sub Dealer of the dealer info' />
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="List" title="List">
                    <DealerSubDealerAgentReport />
                  </Tab>
                </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default DealerSubDealerAgent
