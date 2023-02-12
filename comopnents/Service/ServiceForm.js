import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ServiceForm = () => {

  const [service, setService] = useState("");
  const [mno, setMno] = useState(0);
  const [opt, setOpt] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/network/list')
          .then((res) => res.json())
          .then((data) => {
              console.log(data.message);
              setOpt(data.message);
          })
      // setOpt(optd);
  }, [])

  const options = opt.map((value) => <option value={value.id}>{ value.name }</option>)

  const serviceVal = (event) => {
      setService(event.target.value);
  }

  const mnoVal = (event) => {
      setMno(event.target.value);
  }

  let data = {
      'service': service,
      'mno': mno
  }

  const clearData = () => {
      document.getElementById("name").value = "";
  }

  const saveData = () => {
      console.log(data);
      fetch('http://localhost:3000/service', {
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
               <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Service Name" onChange={serviceVal} />
                </Form.Group>
                <Form.Group as={Col} controlId="formCountry">
                    <Form.Label>Select Mobile Network</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={mnoVal}>
                        <option>Select Network</option>
                        {options}
                    </Form.Select>
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

export default ServiceForm
