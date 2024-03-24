import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import DingForm from '../comopnents/PlanDing/DingForm';
import DingData from '../comopnents/PlanDing/DingData'

const planding = () => {
    return (
        <>
            <section className='main_content clearfix'>
                <div className='main_content-lft'>
                    <Sidebar />
                </div>
                <div className='main_content-rgt'>
                    <BreadCrumb title='Ding' subtitle='PLans' />
                    <div className='tabsWarp'>
                        <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="List" title="List">
                                <DingData />
                            </Tab>
                            <Tab eventKey="Add New" title="Add New">
                                <DingForm />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )
}

export default planding;