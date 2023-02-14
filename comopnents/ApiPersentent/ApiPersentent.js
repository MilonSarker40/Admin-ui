import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const ApiPersentent = () => {

    const [persent, setPersent] = useState("");
    const [network, setNetwork] = useState(0);
    const [api, setApi] = useState(0);
    const [opt, setOpt] = useState([]);
    const [opt1, setOpt1] = useState([]);

    // Call api for the country list
    const optd = [
        {'id': 1, 'name': "Api 1"},
        {'id': 2, 'name': "Api 2"}
    ]
    
    const optd1 = [
        {'id': 1, 'name': "GP"},
        {'id': 2, 'name': "BL"}
    ]

    useEffect(() => {
        setOpt(optd);
    }, [])

    useEffect(() => {
        setOpt1(optd1);
    }, [])

    const options = opt.map((value) => <option value={value.id}>{ value.name }</option>)
    const options1 = opt1.map((value) => <option value={value.id}>{ value.name }</option>)

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
        'persent': persent,
        'api': api,
        'network': network,
    }

    const clearData = () => {
        document.getElementById("persent").value = "";
    }

    const saveData = () => {
        console.log(data);
        fetch('http://localhost:3000/', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        clearData();
    }

  return (
    <>
     <div className='contact-form-wrp'>
         <Form action=''>
           <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Percentage</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Percentage" onChange={persentVal}/> 
                </Form.Group>
            </Row>
            <Row className="mb-3">
               <Form.Group as={Col} controlId="formCountry">
                    <Form.Label>Select Api</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={apiVal}>
                        <option>Select Api</option>
                        {options}
                    </Form.Select>
                 </Form.Group> 
            </Row>
            <Row className="mb-3">
               <Form.Group as={Col} controlId="formCountry">
                    <Form.Label>Select Network</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={networkVal}>
                        <option>Network</option>
                        {options1}
                    </Form.Select>
                 </Form.Group> 
            </Row>
            <div className='contact-submit'>
                <Button gap={3} variant="primary" type="submit" onClick={saveData}>
                    Save
                </Button>
                <Button variant="primary" type="submit" onClick={clearData}>
                    Clear
                </Button>
            </div>
            </Form>
      </div>
    </>
  )
}
