import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const TransferForm = () => {


  const [withdraw, setWithdraw] = useState("");


  const withdrawVal = (event) => {
    setWithdraw(event.target.value);
  }

  const clearData = () => {
      document.getElementById("withdraw").value = 0.00;
  }

  const saveData = () => {
      // fetch('http://localhost:3000/network', {
      //     method: 'POST', // or 'PUT'
      //     headers: {
      //         'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(data),
      // })
      // .then((response) => response.json())
      // .then((data) => {
      //     console.log('Success:', data);
      // })
      // .catch((error) => {
      //     console.error('Error:', error);
      // });
      console.log(withdraw);
      
      clearData();

  }
   


  return (
    <>
     <div className='contact-form-wrp'>
         <Form action=''>
           <Row className="mb-3"> 
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Balance Withdraw</Form.Label>
                    <Form.Control type="number" step="2" id="withdraw" placeholder="Balance Withdraw" onChange={withdrawVal} />
                </Form.Group>
            </Row>
            <div className='contact-submit'>
                <Button gap={3} variant="primary" type="submit" onChange={saveData}>
                    Save
                </Button>
                <Button variant="primary" type="submit" onChange={clearData}>
                    Clear
                </Button>
            </div>
            </Form>
      </div>
    </>
  )
}

export default TransferForm