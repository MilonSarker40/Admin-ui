import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PriorityData from './PriorityData';


const ApiInfo = () => {
    const [apiList, setApiList] = useState([]);
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'apis')
            .then((res) => res.json())
            .then((data) => {
                // console.log("apis : ", data.message);
                setApiList(data.message);
            })
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'apipriority')
            .then((res) => res.json())
            .then((data) => {
                // console.log("APi Datas : ", data.message);
                setData(data.message);
            })
        
    },[])

    const apiTab = apiList.map((values) => 
        <Tab eventKey={values.name} title={values.name}>
            <PriorityData id={values.id} dataOpt={data} />
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
        </Tabs>
        </>
        
    )
}

export default ApiInfo;