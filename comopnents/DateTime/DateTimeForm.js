import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const DateTimeForm = () => {
  const [startDate, setStartDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endDate, setEndDate] = useState('')
  const [endTime, setEndTime] = useState('')

  const filterTime = () => {
    const data = {
      start_date : startDate,
      start_time: startTime,
      end_date: endDate,
      end_time: endTime
    }

    fetch('http://localhost:3000/filtertrx', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <>
      <div className='contact-form-wrp'>
         <Form action=''>
           <Row className="mb-3">
              <Form.Group as={Col}>
                    <Form.Label>Date Form</Form.Label>
                    <Form.Control type="date" placeholder="Start Date" onChange={(e) => setStartDate(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Date To</Form.Label>
                    <Form.Control type="date" placeholder="End Date"  onChange={(e) => setEndDate(e.target.value)}/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
               <Form.Group as={Col}>
                    <Form.Label>Time Form</Form.Label>
                    <Form.Control type="time" placeholder="Start Time"  onChange={(e) => setStartTime(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Time To</Form.Label>
                    <Form.Control type="time" placeholder="End Time"  onChange={(e) => setEndTime(e.target.value)}/>
                </Form.Group>
            </Row>
            <div className='contact-submit'>
                <Button gap={3} variant="primary" type="button" onClick={filterTime}>
                    Filter
                </Button>
                <Button variant="primary" type="button">
                    Clear
                </Button>
            </div>
            </Form>
      </div>
    </>
  )
}

export default DateTimeForm
