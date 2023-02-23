import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CountryForm = () => {
   
  const [name, setName] = useState("");
  const [short, setShort] = useState("");
  const [code, setCode] = useState("");






  const nameVal = (event) => {
      setName(event.target.value);
  }

  const shortVal = (event) => {
      setShort(event.target.value);
  }

  const codeVal = (event) => {
      setCode(event.target.value);
  }

  let data = {
      'name' : name,
      'short': short,
      'code': code
  }

  const clearData = () => {
      document.getElementById("name").value = "";
      document.getElementById("short").value = "";
      document.getElementById("code").value = "";
  }

  const saveData = () => {
      console.log("data Saving : ", data);
      fetch('http://localhost:3000/country', {
          method: 'POST',
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
                <Form.Group as={Col}>
                    <Form.Label>Country Name</Form.Label>
                    <Form.Control type="text" id='name' placeholder="Country Name.." onChange={nameVal} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Country Short Code</Form.Label>
                    <Form.Control type="text" id='short' placeholder="Country Short Code" onChange={shortVal} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Country Code</Form.Label>
                    <Form.Control type="text" id='code' placeholder="Enter Country Code" onChange={codeVal} />
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

export default CountryForm
