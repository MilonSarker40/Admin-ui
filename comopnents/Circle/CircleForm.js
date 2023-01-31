import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CircleForm = () => {

  const [fname, setFname] = useState('');
  const [selectCountry, setSelectCountry] = useState('');
  const [opt, setOpt] = useState([]);

  // Call api for the country list
  const optd =[
    {'id': 1, 'name':'Bangladesh'},
    {'id':2, 'name':'India'},
    {'id':3, 'name':'Pak'}
  ]

  useEffect(()=>{
    setOpt();
  },[])

  const options = opt.map((value)=><option value={value.id}>{value.name}</option>)

  const [allValue,setAllValue] = useState([]);

  const formSubmit=(e)=>{
    e.preventDefault()

    const newValue ={fname:fname, selectCountry:selectCountry}
    setAllValue([...allValue, newValue])
    console.log(newValue)

    setFname('')
    setSelectCountry('')

  }

  return (
    <>
      <div className='contact-form-wrp'>
         <Form action='' onSubmit={formSubmit}>
           <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" value={fname} onChange={(e)=>setFname(e.target.value)} /> 
                </Form.Group>
                <Form.Group as={Col} controlId="formCountry">
                    <Form.Label>Select Country</Form.Label>
                    <Form.Select aria-label="Default select example" value={selectCountry} onChange={(e)=>setSelectCountry(e.target.value)}>
                        <option>Country Name</option>
                        {options}
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
          const { fname, selectCountry} = currentValue
          return (
            <>
              <div className='sign-box'>
                <h1>Send Successfully</h1>
                <h3>
                  Full Name : <span>{fname}</span>
                </h3>
                <h3>
                  Country : <span>{selectCountry}</span>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default CircleForm
