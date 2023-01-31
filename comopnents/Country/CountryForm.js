import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CountryForm = () => {
   
    const [countryName, setCountryName] = useState('');
    const [countryShortCode, setCountryShortCode] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [opt, setOpt] =useState([]);

    const optd=[
      {'id':1, 'name':'Bangladesh'},
      {'id':2, 'name':'India'},
      {'id':3, 'name':'Pak'}
    ]

    useEffect (()=>{
      setOpt(optd)
    },[])

    const options = opt.map((value)=><option value={value.id}>{value.name}</option>)

    const [allValue, setAllValue] = useState([]);

    const formSubmit=(e)=>{
        e.preventDefault()
        const newValue ={countryName:countryName, countryShortCode:countryShortCode, countryCode:countryCode}
        setAllValue([...allValue, newValue])
        console.log(newValue)

        setCountryName('')
        setCountryShortCode('') 
        setCountryCode('')
    }

  return (
    <>
     <div className='contact-form-wrp'>
         <Form action='' onSubmit={formSubmit}>
           <Row className="mb-3">
              <Form.Group as={Col} controlId="formCountry">
                    <Form.Label>Country Name</Form.Label>
                    <Form.Select aria-label="Default select example" value={countryName} onChange={(e)=>setCountryName(e.target.value)}>
                        <option>Country Name</option>
                        {options}
                    </Form.Select>
                </Form.Group> 
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Country Short Code</Form.Label>
                    <Form.Control type="text" placeholder="Country Short Code" value={countryShortCode} onChange={(e)=>setCountryShortCode(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Country Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter Country Code" value={countryCode} onChange={(e)=>setCountryCode(e.target.value)} />
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
          const { countryName, countryShortCode, countryCode } = currentValue
          return (
            <>
              <div className='sign-box'>
                <h1>Send Successfully</h1>
                <h3>
                  Country Name : <span>{countryName}</span>
                </h3>
                <h3>
                 Country ShortCode : <span>{countryShortCode}</span>
                </h3>
                <h3>
                 Country Code : <span>{countryCode}</span>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default CountryForm
