import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import DateTimeForm from '../comopnents/DateTime/DateTimeForm';

const DateTime = () => {
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Time & Date' subtitle='Time & Date' />
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                   <Tab eventKey="List" title="List">
                    </Tab>
                    <Tab eventKey="Add New" title="Add New">
                        <DateTimeForm />
                    </Tab>
                </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default DateTime
