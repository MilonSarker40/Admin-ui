import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CircleForm = () => {

    const [fname, setFname] = useState('');
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [selectCountry, setSelectCountry] = useState('');
    const [opt, setOpt] = useState([]);

    let dummy = {
        "name": "National",
        "code": "PK"
    }

    // Call api for the country list
    const optd = [
        { 'id': 1, 'name': 'Bangladesh' },
        { 'id': 2, 'name': 'India' },
        { 'id': 3, 'name': 'Pak' },
    ]

    useEffect(() => {
        setOpt(optd);
    }, [])

    const options = opt.map((value) => <option value={value.id}>{value.name}</option>)


    const formSubmit = (e) => {
        e.preventDefault()

        const newValue = { name: name, code: code }

        fetch(process.env.NEXT_PUBLIC_BASE_URL+'addcircle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newValue)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            alert(error);
        })

        setName('')
        setCode('')
    }

    return (
        <>
            <div className='contact-form-wrp'>
                <Form action='' onSubmit={formSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Circle Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Code</Form.Label>
                            <Form.Control type="text" placeholder="Circle Code" value={code} onChange={(e) => setCode(e.target.value)} />
                        </Form.Group>  
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Select Country</Form.Label>
                            <Form.Select aria-label="Default select example" value={selectCountry} onChange={(e) => setSelectCountry(e.target.value)}>
                                <option>Country Name</option>
                                {options}
                            </Form.Select>
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

export default CircleForm
