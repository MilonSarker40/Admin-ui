import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { WithdrawTable } from './WithdrawTable';

const WithdrawForm = ({uid}) => {
  const [withdraw, setWithdraw] = useState("");
  const [agent, setAgent] = useState(0);
  const [opt, setOpt] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/country/list')
          .then((res) => res.json())
          .then((data) => {
              console.log(data.message);
              setOpt(data.message);
          })
  }, [])

  const options = opt.map((value) => <option value={value.id}>{ value.name }</option>)


  const agentVal = (event) => {
      setAgent(event.target.value);
  }
  const withdrawVal = (event) => {
    setWithdraw(parseFloat(event.target.value));
  }

  const clearData = () => {
      document.getElementById("withdraw").value = 0.00;
  }

  let data = {
    amount: withdraw,
    uid: uid
  }

  const saveData = () => {
    event.preventDefault();
    fetch(`http://localhost:3000/settledebt/${uid}`, {
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
                <Button gap={3} variant="primary" type="submit" onClick={saveData}>
                    Save
                </Button>
                <Button variant="primary" type="submit" onClick={clearData}>
                    Clear
                </Button>
            </div>
          </Form>
          <WithdrawTable uid={uid}/>
      </div>
    </>
  )
}

export default WithdrawForm
