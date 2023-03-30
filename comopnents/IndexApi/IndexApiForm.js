import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const IndexApiForm = () => {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [info, setInfo] = useState("");
    const [type, setType] = useState(0);
    const [status, setStatus] = useState(0);
    const [credentials, setCredentials] = useState("");
    const [opt, setOpt] = useState([]);
    const [statusopt, setStatusopt] = useState([]);

    const optd = [
        { 'id': 1, 'name': "sync" },
        { 'id': 2, 'name': "async" }
    ]

    const stats = [
        { 'status': "active" },
        { 'status': "inactive" }
    ]

    useEffect(() => {
        setOpt(optd);
        setStatusopt(stats);
    }, [])

    const options = opt.map((value) => <option value={value.id}>{value.name}</option>)
    const statoptions = statusopt.map((value) => <option value={value.status}>{value.status}</option>)

    const nameVal = (event) => {
        setName(event.target.value);
    }

    const codeVal = (event) => {
        setCode(event.target.value);
    }

    const infoVal = (event) => {
        setInfo(event.target.value);
    }

    const typeVal = (event) => {
        setType(event.target.value);
    }
 
    const credVal = (event) => {
        setCredentials(event.target.value);
    }

    const statusVal = (event) => {
        setStatus(event.target.value);
    }


    let data = {
        'name': name,
        'code': code,
        "api": info,
        'status': status,
        "credentials": credentials,
        'type': type
    }

    const clearData = () => {
        // document.getElementById("name").value = "";
    }

    const saveData = () => {
        console.log(data);
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data.message);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        clearData();
    }

    const statusOptions = stats.map(function(row){
        return(
            <div className="form-check">
                <input class="form-check-input" 
                        type="radio" name="status" 
                        value={row.status}
                        checked={status == row.status}
                        onChange={statusVal}/>
                <label class="form-check-label" for="exampleRadios1">
                    {row.status}
                </label>
            </div>
        )
    }, this)

    return (
        <>
            <div className='contact-form-wrp'>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Your Name" onChange={nameVal} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>API Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Api Code" onChange={codeVal} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Info</Form.Label>
                            <Form.Control type="text" placeholder="Enter Info" onChange={infoVal} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Status</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={statusVal}>
                                <option>Select Status</option>
                                {statoptions}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col}>
                            <Form.Label>Request Type</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={typeVal}>
                                <option>Select Type</option>
                                {options}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <div className='contact-submit'>
                        <Button gap={3} variant="primary" onClick={saveData} type="button">
                            Save
                        </Button>
                        <Button variant="primary" onClick={clearData} type="button">
                            Clear
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default IndexApiForm
