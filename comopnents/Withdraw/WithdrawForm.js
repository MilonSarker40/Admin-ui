import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { WithdrawTable } from './WithdrawTable';

const TransferForm = () => {


  const [withdraw, setWithdraw] = useState("");
  const [agent, setAgent] = useState(0);
  const [opt, setOpt] = useState([]);

  // Call api for the country list
  const optd = [
      {'id': 1, 'name': "Agent 1"},
      {'id': 2, 'name': "Agent 2"},
      {'id': 3, 'name': "Agent 3"}
  ] 

  useEffect(() => {
      fetch('http://localhost:3000/country/list')
          .then((res) => res.json())
          .then((data) => {
              console.log(data.message);
              setOpt(data.message);
          })
      setOpt(optd);
  }, [])

  const options = opt.map((value) => <option value={value.id}>{ value.name }</option>)


  const agentVal = (event) => {
      setAgent(event.target.value);
  }

  let data = {
      'agent': agent
  }


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
              <Form.Group as={Col}>
                <Form.Label>Select Agent</Form.Label>
                <Form.Select aria-label="Default select example" onChange={agentVal}>
                    <option>Select Agent</option>
                    {options}
                </Form.Select>
              </Form.Group>
           </Row>
           <Row className="mb-3"> 
                <Form.Group as={Col}>
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
          <WithdrawTable />
      </div>

    </>
  )
}

export default TransferForm
