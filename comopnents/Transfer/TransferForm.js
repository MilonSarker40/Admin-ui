import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { TransferTable } from './TransferTable';

const TransferForm = ({uid}) => {

  const [transfer, setTransfer] = useState(0.00);

  const transferVal = (event) => {
    setTransfer(parseFloat(event.target.value));
  }

  const clearData = () => {
      document.getElementById("transf").value = 0.00;
  }

  const agentVal = (event) => {
    console.log(event.target.value);
  }

  console.log(uid);

  let data = {
    amount: transfer,
    uid: uid
  }

  const saveData = () => {
      event.preventDefault();
      fetch("http://localhost:3000/balancetransfer/"+uid, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
          alert(data);
          console.log('Success:', data);
      })
      .catch((error) => {
          console.error('Error:', error);
      });
      console.log(transfer);
      
      clearData();
  }

  return (
    <>
     <div className='contact-form-wrp'>
       <Form action=''>
         <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Select Agent</Form.Label>
                <Form.Select aria-label="Default select example" onChange={agentVal}>
                    <option>Select Agent</option>
                    {/* {options} */}
                </Form.Select>
              </Form.Group>
           </Row>
           <Row className="mb-3"> 
                <Form.Group as={Col}>
                    <Form.Label>Balance Transfer</Form.Label>
                    <Form.Control type="number" step="2" id="transf" placeholder="Balance Transfer" onChange={transferVal} />
                </Form.Group>
            </Row>
            <div className='contact-submit'>
                <Button gap={3} variant="primary" type="button" onClick={saveData}>
                    Save
                </Button>
                <Button variant="primary" type="button" onClick={clearData}>
                    Clear
                </Button>
            </div>
          </Form>
          <TransferTable uid={uid}/>
      </div>
    </>
  )
}

export default TransferForm
