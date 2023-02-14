import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PercentData from './PercentData';


const PercentInfo = () => {
    const [apiList, setApiList] = useState([]);
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:3000/apis')
            .then((res) => res.json())
            .then((data) => {
                console.log("apis : ", data.message);
                setApiList(data.message);
            })
        fetch('http://localhost:3000/apipercentage')
            .then((res) => res.json())
            .then((data) => {
                console.log("Datas : ", data.message);
                setData(data.message);
            })
    },[])

    const apiTab = apiList.map((values) => 
        <Tab eventKey={values.name} title={values.name}>
            <PercentData id={values.id} />
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

export default PercentInfo;