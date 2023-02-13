import React from 'react';
import { useRouter } from 'next/router';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../../comopnents/BreadCrumb/BreadCrumb';
import SaleTableId from '../../comopnents/SaleTableId/SaleTableId';

const RechargeReport = () => {
  const router = useRouter()
  const id = router.query
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Agent Sale' subtitle='Agent Sale' />
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="List" title="List">
                      <SaleTableId uid={id} />
                    </Tab>
                </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default RechargeReport