import React from 'react';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import Breadcrumb from '../comopnents/BreadCrumb/BreadCrumb';


const Sample = () => {
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
           <Breadcrumb title='Sample' subtitle='Sample' />
         </div>
      </section>
    </>
  )
}

export default Sample