import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const DateTimeForm = () => {



  return (
    <>
      <div className='contact-form-wrp'>
         <Form action=''>
           <Row className="mb-3">
              <Form.Group as={Col}>
                    <Form.Label>Date Form</Form.Label>
                    <Form.Control type="date" placeholder="Enter Your Name"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Date To</Form.Label>
                    <Form.Control type="date" placeholder="Enter Your Number" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
               <Form.Group as={Col}>
                    <Form.Label>Time Form</Form.Label>
                    <Form.Control type="time" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Time To</Form.Label>
                    <Form.Control type="time" placeholder="Enter Your Name"/>
                </Form.Group>
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

export default DateTimeForm
