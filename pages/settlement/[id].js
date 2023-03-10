import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../../comopnents/BreadCrumb/BreadCrumb';
import TransferForm from '../../comopnents/Transfer/TransferForm';
import WithdrawForm from '../../comopnents/Withdraw/WithdrawForm';
import ProfitForm from '../../comopnents/Profit/ProfitForm';
import Information from '../../comopnents/Information/Information';



const country = () => {
  return (
    <>
    <section className='main_content clearfix'>
         <div className='main_content-lft'>
            <Sidebar />
         </div>
         <div className='main_content-rgt'>
            <BreadCrumb title='Settlement' subtitle='Settlement' />
            <div className='tabsWarp'>
             <Tabs defaultActiveKey="Transfer" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Transfer" title="Transfer">
                        <TransferForm />
                    </Tab>
                    <Tab eventKey="Withdraw" title="Withdraw">
                       <WithdrawForm />
                    </Tab>
                    <Tab eventKey="Profit" title="Profit">
                       <ProfitForm />
                    </Tab>
                    <Tab eventKey="Information" title="Information">
                       <Information/>
                    </Tab>
              </Tabs>
           </div>
         </div>
      </section>
    </>
  )
}

export default country
