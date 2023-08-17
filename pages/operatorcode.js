import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../comopnents/BreadCrumb/BreadCrumb';
import OperatorCodeForm from '../comopnents/OperatorCode/OperatorCodeForm';
import OperatorCodeData from '../comopnents/OperatorCode/OperatorCodeData';

const operatorcode = () => {
    return (
        <>
            <section className='main_content clearfix'>
                <div className='main_content-lft'>
                    <Sidebar />
                </div>
                <div className='main_content-rgt'>
                    <BreadCrumb title='Operator Code' subtitle='Operator Code' />
                    <div className='tabsWarp'>
                        <Tabs defaultActiveKey="List" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="List" title="List">
                                <OperatorCodeData />
                            </Tab>
                            <Tab eventKey="Add New" title="Add New">
                                <OperatorCodeForm />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )

}

export default operatorcode;