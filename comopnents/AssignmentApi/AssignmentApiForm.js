import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DynamicCheckBox from '../DynamicCheckBox/DynamicCheckBox';

const AssignmentApiForm = () => {



    const [opt, setOpt] = useState([]);
    const [cities,setCities] = useState([])
    const [api,setApi] = useState()


    const optd =[
      {
        id:1,
        name:'Bangladesh',
      },
      {
        id:2,
        name:'India',
      },
      {
        id:3,
        name:'Pak',
      }
    ]

    useEffect(()=>{
      setOpt(optd)
      let apiData = JSON.parse(localStorage.getItem('apiData'))
      setCities(apiData?.cities)
      setApi(apiData?.api)
    },[])

    

    const options =opt.map((value)=><option value={value.name}>{value.name}</option>)

  return (
    <>
      <div className='contact-form-wrp'>
         <Form action=''>
            <div className='contact-form-check'>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Status</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select Status</option>
                        {options}
                    </Form.Select>
                </Form.Group> 
             </Row>

              <Form.Group className="mb-3">
                {
                  cities && cities.map((selectItem,index) => (
                    <>
                    <Row className="mb-3">
                      <Col lg='2'>
                        <label>{selectItem}</label>
                      </Col>
                      <Col lg='4'>
                        <Form.Control key={index} type="text" placeholder="Enter Value" />
                      </Col>
                      </Row>
                    </>
                  ))
                }
                
              </Form.Group>
            </div>
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

export default AssignmentApiForm
