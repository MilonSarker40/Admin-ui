import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import Breadcrumb from '../comopnents/BreadCrumb/BreadCrumb';
import SubDealerForm from '../comopnents/SubDealer/SubDealerForm';
import SubDealerTable from '../comopnents/SubDealer/SubDealerTable';

const subdealer = () => {
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
           <Breadcrumb title='Sub Dealer' subtitle='Subdealer' />
           <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="List" title="List">
                        <SubDealerTable />
                    </Tab>
                    <Tab eventKey="Add New" title="Add New">
                        <SubDealerForm />
                    </Tab>
                </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default subdealer
