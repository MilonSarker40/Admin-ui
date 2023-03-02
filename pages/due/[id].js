import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../../comopnents/BreadCrumb/BreadCrumb';
import DueTable from '../../comopnents/Due/DueTable';


const Due = () => {
  const [id, setId] = useState(0);
  const router = useRouter()
  // const {id} = router.query

  useEffect(() => {
    if (router.isReady) {
      // Do your stuff
      // for example: assign query param to a state
      console.log("setting id : ",router.query.id);
      setId(router.query.id);
    }
  }, [router.isReady]);
  return (
    <>
      <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Due' subtitle='Due' />
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="List" title="List">
                      <DueTable id={id}/>
                    </Tab>
                </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default Due
