import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import PercentInfo from './PercentInfo';

export const ApiPersentent = () => {

    const [apiList, setApiList] = useState([]);
    const [networkList, setNetworkList] = useState([]);

    const [persent, setPersent] = useState(0.0);
    const [network, setNetwork] = useState(0);
    const [api, setApi] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/network/list')
            .then((res) => res.json())
            .then((data) => {
                console.log("network : ", data.message);
                setNetworkList(data.message);
            })

        fetch('http://localhost:3000/apis')
            .then((res) => res.json())
            .then((data) => {
                console.log("apis : ", data.message);
                setApiList(data.message);
            })

    }, [])

    const apiOpt = apiList.map((value) => <option value={value.id}>{ value.name }</option>)
    const networkOpt = networkList.map((value) => <option value={value.id}>{ value.name }</option>)

    const persentVal = (event) => {
        setPersent(event.target.value);
    }

    const apiVal = (event) => {
        setApi(event.target.value);
    }

    const networkVal = (event) => {
        setNetwork(event.target.value);
    }

    let data = {
        percentage: parseFloat(persent),
        api: parseInt(api),
        network: parseInt(network),
    }

    const clearData = () => {
        document.getElementById("persent").value = "";
    }

    const saveData = () => {
        console.log(data);
        fetch('http://localhost:3000/assign/percent',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.message);
        })

        .catch((error) => {
            console.error('Error: ', error)
        });
    }

  return (
    <>
     <div className='contact-form-wrp'>
         <Form action=''>
            <Row className="mb-3">
               <Form.Group as={Col} controlId="formCountry">
                    <Form.Label>Select Api</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={apiVal}>
                        <option>Select Api</option>
                        {apiOpt}
                    </Form.Select>
                 </Form.Group> 
            </Row>
            <Row className="mb-3">
               <Form.Group as={Col} controlId="formCountry">
                    <Form.Label>Select Network</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={networkVal}>
                        <option>Network</option>
                        {networkOpt}
                    </Form.Select>
                 </Form.Group> 
            </Row>
            <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Percentage</Form.Label>
                    <Form.Control type="number" step={2} placeholder="Enter Your Percentage" onChange={persentVal}/> 
                </Form.Group>
            </Row>
            
            <div className='contact-submit'>
                <Button gap={3} variant="primary" type="button" onClick={saveData}>
                    Save
                </Button>
                <Button variant="primary" type="submit" onClick={clearData}>
                    Clear
                </Button>
            </div>
            </Form>
      </div>

      <hr />

      <PercentInfo/>
    </>
  )
}
