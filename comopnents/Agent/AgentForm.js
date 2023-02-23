import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const AgentForm = () => {


    const [fname, setFname] = useState('');
    const [number, setNumber] = useState('');
    const [verificCode, setVerificCode] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [areaManager, setAreaManager] = useState('');
    const [opt, setOpt] = useState([]);

    // Call api for the country list
    const optd =[
      {'id':1, 'name': 'Bangladesh'},
      {'id':2, 'name': 'India'},
      {'id':3, 'name': 'Pak'}
    ]

    useEffect(()=>{
      setOpt(optd);
    },[])

    const options = opt.map((value)=><option value={value.id}>{value.name}</option>)


    const [allValue,setAllValue] =useState([]);

    const formSubmit=(e)=>{
        e.preventDefault()
        const newValue ={fname:fname, number:number, verificCode:verificCode, email:email, address:address, city:city, country:country, areaManager:areaManager}
        setAllValue([...allValue, newValue])
        console.log(newValue)

        setFname('') 
        setNumber('')
        setVerificCode('')
        setEmail('')
        setAddress('')
        setCity('')
        setCountry('')
        setAreaManager('')

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
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Number" value={number} onChange={(e)=>setNumber(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Verification Code</Form.Label>
                    <Form.Control type="text" placeholder="Verification Code" value={verificCode} onChange={(e)=>setVerificCode(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </Form.Group> 
                <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='text' placeholder="Enter City" value={city} onChange={(e)=>setCity(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col}>
                    <Form.Label>Country</Form.Label>
                    <Form.Select aria-label="Default select example" value={country} onChange={(e)=>setCountry(e.target.value)}>
                        <option>Country</option>
                        {options}
                    </Form.Select>
                </Form.Group> 
                <Form.Group as={Col}>
                    <Form.Label>Area manager</Form.Label>
                    <Form.Select aria-label="Default select example" value={areaManager} onChange={(e)=>setAreaManager(e.target.value)}>
                        <option>Area manager</option>
                        <option value="Agent">Agent</option>
                        <option value="Marchent">Marchent</option>
                        <option value="Dealer">Dealer</option>
                    </Form.Select>
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
          const { fname, number, email, verificCode, address, city, country,  areaManager } = currentValue
          return (
            <>
              <div className='sign-box'>
                <h1>Send Successfully</h1>
                <h3>
                  Full Name : <span>{fname}</span>
                </h3>
                <h3>
                  Number : <span>{number}</span>
                </h3>
                <h3>
                  Email : <span>{email}</span>
                </h3>
                <h3>
                 verifi Code : <span>{verificCode}</span>
                </h3>
                <h3>
                   Address : <span>{address}</span>
                </h3>
                <h3>
                  City: <span>{city}</span>
                </h3>
                <h3>
                  Country : <span>{country}</span>
                </h3>
                <h3>
                  Area : <span>{areaManager}</span>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default AgentForm
