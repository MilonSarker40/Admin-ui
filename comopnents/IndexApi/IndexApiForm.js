import React, { useEffect, useState } from 'react';
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
    const [opt, setOpt] = useState([]);
    const [opt1, setOpt1] = useState([]);

    const optd =[
      {
        id:1,
        name:'select1',
      },
      {
        id:2,
        name:'select2',
      },
      {
        id:3,
        name:'select3',
      }
    ]


    useEffect(()=>{
      setOpt(optd)
    },[])

    const options =opt.map((value)=><option value={value.id}>{value.name}</option>)

    const optd1 =[
      {
        id:1,
        name:'Type 1',
      },
      {
        id:2,
        name:'Type 2',
      },
      {
        id:3,
        name:'Type 3',
      }
    ]

    useEffect(()=>{
      setOpt1(optd1)
    },[])

    const options1 =opt1.map((value)=><option value={value.id}>{value.name}</option>)

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
              <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Your Name" value={fname} onChange={(e)=>setFname(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>API Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Api Code" value={apiCode} onChange={(e)=>setApiCode(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Info</Form.Label>
                    <Form.Control type="text" placeholder="Enter Info" value={info} onChange={(e)=>setInfo(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Status</Form.Label>
                    <Form.Select aria-label="Default select example" value={status} onChange={(e)=>setStatus(e.target.value)}>
                        <option>Select Status</option>
                        {options}
                    </Form.Select>
                </Form.Group> 
            </Row>
            <Row className='mb-3'>
               <Form.Group as={Col}>
                    <Form.Label>Request Type</Form.Label>
                    <Form.Select aria-label="Default select example" value={requestType} onChange={(e)=>SetRequestType(e.target.value)}>
                        <option>Select Type</option>
                         {options1}
                    </Form.Select>
                </Form.Group> 
                <Form.Group as={Col}>
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
