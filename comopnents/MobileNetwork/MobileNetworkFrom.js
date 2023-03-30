import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



const MobileNetworkFrom = () => {


  const [mno, setMno] = useState("");
  const [country, setCountry] = useState(0);
  const [opt, setOpt] = useState([]);

  // Call api for the country list
  const optd = [
      {'id': 1, 'name': "BD"},
      {'id': 2, 'name': "IND"}
  ] 

  useEffect(() => {
      fetch(process.env.NEXT_PUBLIC_BASE_URL+'country/list')
          .then((res) => res.json())
          .then((data) => {
              console.log(data.message);
              setOpt(data.message);
          })
      // setOpt(optd);
  }, [])

  const options = opt.map((value) => <option value={value.id}>{ value.name }</option>)

  const mnoVal = (event) => {
      setMno(event.target.value);
  }

  const countryVal = (event) => {
      setCountry(event.target.value);
  }

  let data = {
      'mno': mno,
      'country': country
  }

  const clearData = () => {
      document.getElementById("mno").value = "";
  }

  const saveData = () => {
      console.log(data);
      fetch('http://localhost:3000/network', {
          method: 'POST', // or 'PUT'
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
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Service Name" onChange={mnoVal} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Select Country</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={countryVal}>
                        <option>Select Country</option>
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

export default MobileNetworkFrom