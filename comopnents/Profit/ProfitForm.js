import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ProfitTable } from './ProfitTable';

const TransferForm = () => {

  const [Profit, setProfit] = useState("");
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





  const ProfitVal = (event) => {
    setProfit(event.target.value);
  }

  const clearData = () => {
      document.getElementById("Profit").value = 0.00;
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
      console.log(Profit);
      
      clearData();

  }

   


  return (
    <>
     <div className='contact-form-wrp'>
         <Form action=''>
           <Row className="mb-3">
               <Form.Group as={Col} controlId="formCountry">
                  <Form.Label>Select Agent</Form.Label>
                  <Form.Select aria-label="Default select example" onChange={agentVal}>
                      <option>Select Agent</option>
                      {options}
                  </Form.Select>
                </Form.Group>
           </Row>
           <Row className="mb-3"> 
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Profit</Form.Label>
                    <Form.Control type="number" step="2" id="Profit" placeholder="Profit" onChange={ProfitVal} />
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
          <ProfitTable />
      </div>
    </>
  )
}

export default TransferForm
