import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



const MobileNetworkFrom = () => {


  const [mobileService, setMobileService] =useState('');
  const [mobileServiceNet, SetMobileServiceNet] =useState('');

  const [allValue, setAllValue] = useState([]);

  const formSubmit=(e)=>{
      e.preventDefault()

      const newValue ={mobileService:mobileService, mobileServiceNet:mobileServiceNet}

      setAllValue([...allValue, newValue])
      console.log(newValue)

      setMobileService('') 
      SetMobileServiceNet('') 
  }

  return (
    <>
      <div className='contact-form-wrp'>
         <Form action='' onSubmit={formSubmit}>
           <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Service Name" value={mobileService} onChange={(e)=>setMobileService(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col} controlId="formCountry">
                    <Form.Label>Select Mobile Network</Form.Label>
                    <Form.Select aria-label="Default select example" value={mobileServiceNet} onChange={(e)=>SetMobileServiceNet(e.target.value)}>
                        <option>Select Network</option>
                        <option value="GP">GP</option>
                        <option value="Banglanik">Banglanik</option>
                        <option value="Teletalk">Teletalk</option>
                        <option value="Airtel">Airtel</option>
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
          const { mobileService, mobileServiceNet} = currentValue
          return (
            <>
              <div className='sign-box'>
                <h1>Send Successfully</h1>
                <h3>
                  Full Name : <span>{mobileService}</span>
                </h3>
                <h3>
                  Country : <span>{mobileServiceNet}</span>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default MobileNetworkFrom