import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import SimulatorForm from '../comopnents/Simulator/SimulatorForm';
import SimulatorTable from '../comopnents/Simulator/SimulatorTable';
import SimulatorData from '../comopnents/Simulator/SimulatorData';

const simulator = () => {
   return (
      <>
         <section className='main_content clearfix'>
            <div className='main_content-lft'>
               <Sidebar />
            </div>
            <div className='main_content-rgt'>
               <BreadCrumb title='Simulator' subtitle='Simulator' />
               <div className='tabsWarp'>
                  <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                     <Tab eventKey="List" title="List">
                        <SimulatorTable />
                     </Tab>
                     <Tab eventKey="Add New" title="Add New">
                        <SimulatorData />
                        <SimulatorForm />
                     </Tab>
                  </Tabs>
               </div>
            </div>
         </section>
      </>
   )
}

export default simulator
