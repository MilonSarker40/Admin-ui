import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const SimulatorForm = () => {


    const [country, setCountry] = useState('');
    const [network, setNetwork] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [amount, setAmount] = useState('');

    const [allValue, setAllValue] = useState([]);

    const formSubmit=(e)=>{
        e.preventDefault()
        const newValue ={country:country, network:network, serviceType:serviceType, mobileNumber:mobileNumber, amount:amount}

        setAllValue([...allValue, newValue])
        console.log(newValue)

        setCountry('')
        setNetwork('') 
        setServiceType('') 
        setMobileNumber('')
        setAmount('')
    }

  return (
    <>
     <div className='contact-form-wrp'>
         <Form action='' onSubmit={formSubmit}>
           <Row className="mb-3">
               <Form.Group as={Col} controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Select aria-label="Default select example" value={country} onChange={(e)=>setCountry(e.target.value)}>
                        <option>Select Country</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Pak">Pak</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formNetwork">
                    <Form.Label>Network</Form.Label>
                    <Form.Select aria-label="Default select example" value={network} onChange={(e)=>setNetwork(e.target.value)}>
                        <option>Select Network</option>
                        <option value="Gp">Gp</option>
                        <option value="Airtel">Airtel</option>
                        <option value="Banglalink">Banglalink</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formCountry">
                    <Form.Label>Service Type</Form.Label>
                    <Form.Select aria-label="Default select example" value={serviceType} onChange={(e)=>setServiceType(e.target.value)}>
                        <option>Select Service</option>
                        <option value="Dataload">Dataload</option>
                        <option value="TopUp">TopUp</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formMobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className='mb-3'>
               <Form.Group as={Col} controlId="formAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" placeholder="Enter Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} />
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

          const { country, network, serviceType, mobileNumber, amount} = currentValue

          return (
            <>
              <div className='sign-box'>
                <h1>Send Successfully</h1>
                <h3>
                  Country : <span>{country}</span>
                </h3>
                <h3>
                  Network : <span>{network}</span>
                </h3>
                <h3>
                  Service Type : <span>{serviceType}</span>
                </h3>
                <h3>
                    Mobile Number : <span>{mobileNumber}</span>
                </h3>
                <h3>
                    Amount : <span>{amount}</span>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default SimulatorForm
