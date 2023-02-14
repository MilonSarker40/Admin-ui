import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PriorityData from './PriorityData';


const ApiInfo = () => {
    const [apiList, setApiList] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:3000/apis')
            .then((res) => res.json())
            .then((data) => {
                console.log("apis : ", data.message);
                setApiList(data.message);
            })
    },[])

    const apiTab = apiList.map((values) => 
        <Tab eventKey={values.name} title={values.name}>
            <PriorityData id={values.id} />
        </Tab>
    )

    return(
        <>
        <p>Api Priority Info</p>
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            >
                {apiTab}
            {/* <Tab eventKey="home" title="Home">
                <PriorityData id={2} />
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <PriorityData id={1} />
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <PriorityData id={3} />
            </Tab> */}
        </Tabs>
        </>
        
    )
}

export default ApiInfo;