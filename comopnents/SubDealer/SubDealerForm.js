import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const selectOption=[
  {
   Label:'Bangladesh',
   value:'Bangladesh', 
  },
  {
    Label:'India',
    value:'India', 
   },
   {
    Label:'Pak',
    value:'Pak', 
   },
   {
    Label:'Srilanka',
    value:'Srilanka', 
   },

]
const subDlrOption=[
  {
    label:'Dealer',
    value:'Dealer', 
   },
  {
   label:'Agent',
   value:'Agent', 
  },
  {
    label:'Marchent',
    value:'Marchent', 
   },


]

const SubDealerForm = () => {
    const [fname, setfName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [verifiCode, setVerifiCode] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [area, setArea] = useState('');
    const [dealer,setDealer] = useState('');

    const [allValue, setAllValue] = useState([]);

    const formSubmit = (e) =>{
        e.preventDefault()
        const newValue ={fname:fname, number:number, email:email, verifiCode:verifiCode, address:address, city:city, country:country, area:area, dealer:dealer}
        setAllValue([...allValue, newValue])
        console.log(newValue)

        setfName('')  
        setNumber('')  
        setEmail('')  
        setVerifiCode('')  
        setAddress('')  
        setCity('')  
        setCountry('')  
        setArea('')
        setDealer('')  
    }
  return (
    <>
      <div className='contact-form-wrp'>
         <Form action='' onSubmit={formSubmit}>
           <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Your Name" value={fname} onChange={(e)=>setfName(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Number" value={number} onChange={(e)=>setNumber(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formVerification">
                    <Form.Label>Verification Code</Form.Label>
                    <Form.Control type="text" placeholder="Verification Code" value={verifiCode} onChange={(e)=>setVerifiCode(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type='text' placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)} />
                </Form.Group> 
                <Form.Group as={Col} controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type='text' placeholder="Enter City" value={city} onChange={(e)=>setCity(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Select aria-label="Default select example" value={country} onChange={(e)=>setCountry(e.target.value)}>
                        <option>Country</option>
                        {selectOption.map((option)=>(
                          <option value={option.value}>{option.Label}</option>
                        ))}
                    </Form.Select>
                </Form.Group> 
                <Form.Group as={Col} controlId="formDealer">
                    <Form.Label>Dealer</Form.Label>
                    <Form.Select aria-label="Default select example" value={dealer} onChange={(e)=>setDealer(e.target.value)}>
                        {subDlrOption.map((option)=>(
                          <option value={option.value}>{option.label}</option>
                        ))}
                    </Form.Select>
                </Form.Group> 
            </Row>
            <Row className='mb-3'>
                 <Form.Group as={Col} lg={6} controlId="formArea">
                    <Form.Label>Area</Form.Label>
                    <Form.Control type='text' placeholder="Enter Area" value={area} onChange={(e)=>setArea(e.target.value)} />
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
          const { fname, number, email, verifiCode, address, city, country, dealer, area } = currentValue
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
                 verifi Code : <span>{verifiCode}</span>
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
                  Area : <span>{area}</span>
                </h3>
                <h3>
                  Area : <span>{dealer}</span>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default SubDealerForm
