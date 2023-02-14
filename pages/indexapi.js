import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import IndexApiForm from '../comopnents/IndexApi/IndexApiForm';
import IndexApiTable from '../comopnents/IndexApi/IndexApiTable';
import AvailableApiForm from '../comopnents/IndexApi/AvailableApiForm';
import AssignmentApiForm from '../comopnents/AssignmentApi/AssignmentApiForm';
import { ApiPersentent } from '../comopnents/ApiPersentent/ApiPersentent';

const indexapi = () => {
   const[count,setCount] = useState(10)
   

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
                       <IndexApiTable />
                    </Tab>
                    <Tab eventKey="Add New" title="Add New">
                       <IndexApiForm />
                    </Tab>
                    <Tab eventKey="Available Api" title="Available Api">
                       <AvailableApiForm/>
                    </Tab>
                    <Tab eventKey="Assignment Api" title="Assignment Api">
                       <AssignmentApiForm/>
                    </Tab>
                    <Tab eventKey="Percentage Api" title="Percentage Api">
                       <ApiPersentent />
                    </Tab>
                </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default indexapi
