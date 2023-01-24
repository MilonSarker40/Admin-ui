import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MobileNetworkForm from '../comopnents/MobileNetwork/MobileNetworkFrom';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import MobileNetworkTable from '../comopnents/MobileNetwork/MobileNetworkTable';


const mobilenetwork = () => {
  return (
    <>
     <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Mobile Network' subtitle='Mobile Network' />
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="List" title="List">
                       <MobileNetworkTable />
                    </Tab>
                    <Tab eventKey="Add New" title="Add New">
                       <MobileNetworkForm />
                    </Tab>
                </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default mobilenetwork

