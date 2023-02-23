import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import Trxdts from '../comopnents/Trxdt/Trxdts';



const DealerReport = () => {
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Transaction Detalis' subtitle='Transaction Detalis' />
            <div className='tabsWarp'>
              <Trxdts />
           </div>
         </div>
      </section>
    </>
  )
}

export default DealerReport
