import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CreditForm = () => {

    const [customer, setCustomer] = useState("");
    const [credit, setCredit] = useState(0.00);
    const [creditLimit, setCreditLimit] = useState(0.00);
    const [maxCredit, setMaxCredit] = useState(0.00);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'agents')
            .then((res) => res.json())
            .then((data) => {
                setUserList(data.message);
            })
    }, [])

    const userOpt = userList.map((value) => <option value={value.uuid}>{ value.phone } - { value.store }</option>)

    let data = {
        userId: customer,
        credit: credit,
        credit_limit: creditLimit,
        max_credit: maxCredit
    }

    const clearData = () => {
        console.log("clear");
    }

    const saveData = () => {
        console.log(data);
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'add-credit-info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            alert(error);
        })
    }
    return (
        <>
            <p>FORM</p>
            <div className='contact-form-wrp'>
                <Form action=''>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formCountry">
                            <Form.Label>Select Customer</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setCustomer(e.target.value)}>
                                <option>Select Customer</option>
                                {userOpt}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Credit</Form.Label>
                            <Form.Control type="text" id='credit' placeholder="Credit" onChange={(e) => setCredit(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Credit Limit</Form.Label>
                            <Form.Control type="text" id='credit_limit' placeholder="Credit Limit" onChange={(e) => setCreditLimit(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Max Credit</Form.Label>
                            <Form.Control type="text" id='max_credit' placeholder="Max Credit" onChange={(e) => setMaxCredit(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <div className='contact-submit'>
                        <Button gap={3} variant="primary" type="button" onClick={saveData}>
                            Save
                        </Button>
                        <Button variant="primary" type="button" onClick={console.log("clear")}>
                            Clear
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default CreditForm;

