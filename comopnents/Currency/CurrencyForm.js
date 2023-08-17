import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CurrencyForm = () => {

    const [title, setTitle] = useState("");
    const [creditCurrency, setCreditCurrency] = useState("");
    const [debitCurrency, setDebitCurrency] = useState("");
    const [conversionValue, setConversionValue] = useState("");

    let data = {
        title: title,
        credit_currency: creditCurrency,
        debit_currency: debitCurrency,
        conversionValue: conversionValue
    }

    const clearData = () => {
        console.log("clear");
    }

    const saveData = () => {
        console.log(data);
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'addcurrency', {
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
                        <Form.Group as={Col}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" id='title' placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Credit Currency</Form.Label>
                            <Form.Control type="text" id='credit_currency' placeholder="Credit Currency" onChange={(e) => setCreditCurrency(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Debit Currency</Form.Label>
                            <Form.Control type="text" id='debit_currency' placeholder="Debit Currency" onChange={(e) => setDebitCurrency(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Conversion Value</Form.Label>
                            <Form.Control type="text" id='conversionValue' placeholder="Conversion Value" onChange={(e) => setConversionValue(e.target.value)} />
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

export default CurrencyForm;

