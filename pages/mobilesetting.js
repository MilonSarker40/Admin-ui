import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import OperatorSettingForm from '../comopnents/OperatorSetting/OperatorSettingForm';
import OperatorSettingData from '../comopnents/OperatorSetting/OperatorSettingData';

const mobilesetting = () => {
    return (
        <>
            <section className='main_content clearfix'>
                <div className='main_content-lft'>
                    <Sidebar />
                </div>
                <div className='main_content-rgt'>
                    <BreadCrumb title='Operator Setting' subtitle='Operator Setting' />
                    <div className='tabsWarp'>
                        <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="List" title="List">
                                <OperatorSettingData />
                            </Tab>
                            <Tab eventKey="Add New" title="Add New">
                                <OperatorSettingForm />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )

}

export default mobilesetting;