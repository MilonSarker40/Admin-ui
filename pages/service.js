import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import ServiceForm from '../comopnents/Service/ServiceForm';
import ServiceTable from '../comopnents/Service/ServiceTable';

const service = () => {
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
<<<<<<< HEAD
            <BreadCrumb title='Service' subtitle='Service Index' />
=======
            <BreadCrumb title='Service' subtitle='Service' />
>>>>>>> 1b1164e815e7ee1c1882428a65e0ed3f410e85d7
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="List" title="List">
                       <ServiceTable />
                    </Tab>
                    <Tab eventKey="Add New" title="Add New">
                        <ServiceForm />
                    </Tab>
                </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default service
