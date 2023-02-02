import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DynamicCheckBox from '../DynamicCheckBox/DynamicCheckBox';

const IndexApiForm = () => {


    const [opt, setOpt] = useState([]);

    const optd =[
      {
        id:1,
        name:'select1',
      },
      {
        id:2,
        name:'select2',
      },
      {
        id:3,
        name:'select3',
      }
    ]

    useEffect(()=>{
      setOpt(optd)
    })

    const options =opt.map((value)=><option value={value.id}>{value.name}</option>)

  return (
    <>
      <div className='contact-form-wrp'>
         <Form action=''>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Select aria-label="Default select example" value={status} onChange={(e)=>setStatus(e.target.value)}>
                        <option>Select Status</option>
                        {options}
                    </Form.Select>
                </Form.Group> 
            </Row>
            <Row className='mb-3'>
              <DynamicCheckBox />
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
    </>
  )
}

export default IndexApiForm
