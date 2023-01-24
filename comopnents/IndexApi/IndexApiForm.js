import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const IndexApiForm = () => {

    const [fname, setFname] = useState('');
    const [apiCode, setApiCode] = useState('');
    const [info, setInfo] = useState('');
    const [status, setStatus] = useState('');
    const [requestType, SetRequestType] = useState('');
    const [credentials, setCredentials] = useState('');

    const [allValue,setAllValue] = useState([]);

    const formSubmit =(e)=>{
        e.preventDefault()
        const newValue ={fname:fname, apiCode:apiCode, info:info, status:status, requestType:requestType, credentials:credentials}

        setAllValue([...allValue, newValue])
        console.log(newValue)

        setFname('')
        setApiCode('')
        setInfo('')
        setStatus('')
        SetRequestType('')
        setCredentials('')
    }

  return (
    <>
      <div className='contact-form-wrp'>
         <Form action='' onSubmit={formSubmit}>
           <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Your Name" value={fname} onChange={(e)=>setFname(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>API Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Api Code" value={apiCode} onChange={(e)=>setApiCode(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formInfo">
                    <Form.Label>Info</Form.Label>
                    <Form.Control type="text" placeholder="Enter Info" value={info} onChange={(e)=>setInfo(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Select aria-label="Default select example" value={status} onChange={(e)=>setStatus(e.target.value)}>
                        <option>Select Status</option>
                        <option value="Select1">Select1</option>
                        <option value="Select2">Select2</option>
                        <option value="Select3">Select3</option>
                    </Form.Select>
                </Form.Group> 
            </Row>
            <Row className='mb-3'>
               <Form.Group as={Col} controlId="formStatus">
                    <Form.Label>Request Type</Form.Label>
                    <Form.Select aria-label="Default select example" value={requestType} onChange={(e)=>SetRequestType(e.target.value)}>
                        <option>Select Type</option>
                        <option value="Select1">Select1</option>
                        <option value="Select2">Select2</option>
                        <option value="Select3">Select3</option>
                    </Form.Select>
                </Form.Group> 
                <Form.Group as={Col} controlId="formCredentials">
                    <Form.Label>Credentials</Form.Label>
                    <Form.Control type='text' placeholder="Enter Credentials" value={credentials}  onChange={(e)=>setCredentials(e.target.value)}/>
                </Form.Group>
            </Row>
            <div className='contact-submit'>
                <Button gap={3} variant="primary" type="submit">
                    Save
                </Button>
                <Button variant="primary" type="submit">
                    Clear
                </Button>
            </div>
            </Form>
      </div>
      <section className='show-data'>
       {allValue.map((currentValue) => {

          const { fname, apiCode, info, status, requestType, credentials} = currentValue

          return (
            <>
              <div className='sign-box'>
                <h1>Send Successfully</h1>
                <h3>
                  Full Name : <span>{fname}</span>
                </h3>
                <h3>
                  API Code : <span>{apiCode}</span>
                </h3>
                <h3>
                    Info : <span>{info}</span>
                </h3>
                <h3>
                    Status : <span>{status}</span>
                </h3>
                <h3>
                    Request Type : <span>{requestType}</span>
                </h3>
                <h3>
                    Credentials : <span>{credentials}</span>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default IndexApiForm
