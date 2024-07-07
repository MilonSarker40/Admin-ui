import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import DeviceData from '../comopnents/Device/DeviceData';

const device = () => {
    return (
        <>
            <section className='main_content clearfix'>
                <div className='main_content-lft'>
                    <Sidebar />
                </div>
                <div className='main_content-rgt'>
                    <BreadCrumb title='Device' subtitle='Device' />
                    <div className='tabsWarp'>
                        <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="List" title="List">
                                <DeviceData />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )

}

export default device;