import React from 'react';
import {Row, Col} from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar';
import Breadcrumb from '../BreadCrumb/BreadCrumb';
import chartGraph from '../ChartGraph/chartGraph';

const MainContent = () => {

  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
           <Breadcrumb title='Home Page' subtitle='Home' />
           <chartGraph />
         </div>
      </section>
    </>
  )
}

export default MainContent
