import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import CountryForm from '../comopnents/Country/CountryForm';
import CountryTable from '../comopnents/Country/CountryTable';


const country = () => {
  return (
    <>
    <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
<<<<<<< HEAD
            <BreadCrumb title='Country' subtitle='Country Index' />
=======
            <BreadCrumb title='Country' subtitle='Country' />
>>>>>>> 1b1164e815e7ee1c1882428a65e0ed3f410e85d7
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="List" title="List">
                       <CountryTable />
                    </Tab>
                    <Tab eventKey="Add New" title="Add New">
                        <CountryForm />
                    </Tab>
              </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default country
