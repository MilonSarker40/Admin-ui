import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ModalUpdate=({id})=> {
  const [show, setShow] = useState(false);
  const [priority, setPriority] = useState(0);

  const updatePriority = () => {
    setPriority(event.target.value);
  }

  const handleClose = () => {
    console.log(id);
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const data = {
    id: id,
    priority: parseInt(priority)
  }
  const submitHandle = () => {
    console.log("submitting for ", id);

    fetch('http://localhost:3000/update/priority', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data.message);
    })
    .catch((error) => {
        console.error('Error: ', error)
    });
    setShow(false);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update Priority
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
        <h3>Update Priority for {id}</h3>
        <Form action=''>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Priority Option</Form.Label>
                    <Form.Control type="number" onChange={updatePriority} placeholder="Update Priority"/>
                </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitHandle}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdate