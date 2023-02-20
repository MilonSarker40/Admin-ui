import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DynamicCheckBox from '../DynamicCheckBox/DynamicCheckBox';
import ApiInfo from './ApiInfo';

const AssignmentApiForm = () => {
    const [ctry, setCtry] = useState(0);
    const [ctryList, setCtryList] = useState([]);
    const [apiList, setApiList] = useState([]);
    const [apiPriority, setApiPriority] = useState([]);

    const [opt, setOpt] = useState([]);



    useEffect(()=>{
        fetch('http://localhost:3000/country/list')
            .then((res) => res.json())
            .then((data) => {
                console.log("country : ", data.message);
                setCtryList(data.message);
            })
        fetch('http://localhost:3000/apis')
            .then((res) => res.json())
            .then((data) => {
                console.log("apis : ", data.message);
                setApiList(data.message);
            })
    },[])

    const handleSubmit = () => {
        console.log("Submitting");
        let input = document.getElementsByName('priority[]');
        let values = []
        for (var i = 0; i < input.length; i++) {
            if (!isNaN(parseInt(input[i].value))){
                let val = {apiId: parseInt(input[i].id), priority: parseInt(input[i].value)}
                values.push(val);
            }
        }

        let data = {
            ctry: parseInt(ctry),
            apiPriority: values
        }
        console.log(data);
        fetch('http://localhost:3000/assign/priority',{
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

    const ctryOptions = ctryList.map((value) => <option value={value.id}>{value.name}</option>)

    const countryVal = (event) => {
        setCtry(event.target.value);
    }

  return (
    <>
      <div className='contact-form-wrp'>
         <Form action=''>
            <div className='contact-form-check'>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formStatus">
                    <Form.Label>Api Priority Assignment</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={countryVal}>
                        <option>Select Country</option>
                        {ctryOptions}
                    </Form.Select>
                </Form.Group> 
             </Row>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                {
                  apiList && apiList.map((item,index) => (
                    <>
                    <Row className="mb-3">
                      <Col lg='2'>
                        <label>{item.name}</label>
                      </Col>
                      <Col lg='4'>
                        <Form.Control key={index} id={item.id} type="number" name='priority[]' placeholder="Enter Value" />
                      </Col>
                      </Row>
                    </>
                  ))
                }
                
              </Form.Group>
            </div>
            <div className='contact-submit'>
                <Button gap={3} variant="primary" onClick={handleSubmit} type="button">
                    Save
                </Button>
                <Button variant="primary" type="submit">
                    Clear
                </Button>
            </div>
            </Form>
      </div>    

      <hr/>

      <ApiInfo/>
    </>
  )
}

export default AssignmentApiForm
