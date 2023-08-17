import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import PlanTypeForm from '../comopnents/PlanType/PlanTypeForm';
import PlanTypeData from '../comopnents/PlanType/PlanTypeData';

const plantype = () => {
    return (
        <>
            <section className='main_content clearfix'>
                <div className='main_content-lft'>
                    <Sidebar />
                </div>
                <div className='main_content-rgt'>
                    <BreadCrumb title='Plantype' subtitle='Plantype' />
                    <div className='tabsWarp'>
                        <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="List" title="List">
                                <PlanTypeData />
                            </Tab>
                            <Tab eventKey="Add New" title="Add New">
                                <PlanTypeForm />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )

}

export default plantype;