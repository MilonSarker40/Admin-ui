import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DynamicCheckBox from '../DynamicCheckBox/DynamicCheckBox';

const IndexApiForm = ({selected}) => {

    console.log(selected)

    // const [opt, setOpt] = useState([]);

    // const optd =[
    //   {
    //     id:1,
    //     name:'select1',
    //   },
    //   {
    //     id:2,
    //     name:'select2',
    //   },
    //   {
    //     id:3,
    //     name:'select3',
    //   }
    // ]

    // useEffect(()=>{
    //   setOpt(optd)
    // },[])

    // const options =opt.map((value)=><option value={value.id}>{value.name}</option>)

  return (
    <>
      <div className='contact-form-wrp'>
         <Form action=''>
            <Row className="mb-3">
              <Col lg='6'>
                <div className='contact-form-check'>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    {
                      selected && selected.map((selectItem,index) => (
                        <>
                        <Row className="mb-3">
                          <Col lg='3'>
                            <label>{selectItem}</label>
                          </Col>
                          <Col lg='9'>
                            <Form.Control key={index} type="text" placeholder="Enter Value" />
                          </Col>
                          </Row>
                        </>
                      ))
                    }
                    
                  </Form.Group>
                </div>
              </Col>
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
