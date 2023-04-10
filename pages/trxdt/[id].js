import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../../comopnents/BreadCrumb/BreadCrumb';
import Trxdts from '../../comopnents/Trxdt/Trxdts';
import { useRouter } from 'next/router';



const TransactionDetail = () => {
  const router = useRouter();
  const {id} = router.query;
  console.log("inside transaction report : ", id);
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Transaction Details' subtitle='Transaction Details' />
            <div className='trxWrap'>
              <Trxdts id={id}/>
           </div>
         </div>
      </section>
    </>
  )
}

export default TransactionDetail