import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../../comopnents/BreadCrumb/BreadCrumb';
import TransferForm from '../../comopnents/Transfer/TransferForm';
import WithdrawForm from '../../comopnents/Withdraw/WithdrawForm';
import ProfitForm from '../../comopnents/Profit/ProfitForm';
import Information from '../../comopnents/Information/Information';
import TransactionRefund from '../../comopnents/TransactionRefund';

const country = () => {
    const router = useRouter();
    const {id} = router.query;
    const [uid, setUid] = useState(id);
    useEffect(() => {
        setUid(id);
    }, [id])
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
                            <TransferForm uid={uid} />
                        </Tab>
                        <Tab eventKey="Withdraw" title="Payment">
                            <WithdrawForm uid={uid} />
                        </Tab>
                        <Tab eventKey="Profit" title="Profit">
                            <ProfitForm uid={uid}/>
                        </Tab>
                        <Tab eventKey="Information" title="Information">
                            <Information uid={uid}/>
                        </Tab>
                        <Tab eventKey="Refund" title="Refund">
                            <TransactionRefund uid={uid}/>
                        </Tab>
                </Tabs>
            </div>
            </div>
        </section>
    </>
  )
}

export default country
