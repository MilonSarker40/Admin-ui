import React from 'react';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import Breadcrumb from '../comopnents/BreadCrumb/BreadCrumb';
import TableTest from '../comopnents/TableTest/TableTest';

const testcomponents = () => {
  return (
    <>
     <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
           <Breadcrumb title='Test Components' subtitle='Test Components' />
           <div className='data_table'>
             <TableTest />
           </div>
         </div>
      </section>
    </>
  )
}

export default testcomponents;
