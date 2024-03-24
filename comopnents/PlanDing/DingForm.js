import { faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons';
import React, { use, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const DingForm = () => {

    let d = {
        "operator": "Grameenphone",
        "type": "Top Up",
        "country": "BANGLADESH",
        "skucode": "BD_GE_TopUp_50.00",
        "providercode": "GNP_TOP",
        "send_amount": 1.90,
        "send_currency": "AED",
        "receive_amount": 50.00,
        "receive_currency": "BDT",
        "plan_id": "6ef9caa4-cd6e-4607-a9de-cf9c6cca51e5"
    }

    const [operator, setOperator] = useState("")
    const [type, setType] = useState("")
    const [country, setCountry] = useState("")
    const [skuCode, setSkuCode] = useState("")
    const [providerCode, setProviderCode] = useState("")
    const [sendAmount, setSendAmount] = useState(0.00)
    const [sendCurrency, setSendCurrency] = useState("")
    const [receiveAmount, setReceiveAmount] = useState(0.00)
    const [recieveCurrency, setReceiveCurrency] = useState("")
    const [countryList, setCountryList] = useState([])
    const [planList, setPlanList] = useState([])
    const [planId, setPlanId] = useState("")

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + 'country/list')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setCountryList(data.message);
            })

        fetch(process.env.NEXT_PUBLIC_BASE_URL + 'listplan')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setPlanList(data.message);
            })
    }, [])

    const countryOpt = countryList.map((value) => <option value={value.name}>{ value.name }</option>)
    const planOpt = planList.map((value) => <option value={value.uuid}>{ value.narration }</option>)

    let data = {
        operator: operator,
        type: type,
        country: country,
        skucode: skuCode,
        providercode: providerCode,
        send_amount: sendAmount,
        send_currency: sendCurrency,
        receive_amount: receiveAmount,
        receive_currency: recieveCurrency,
        plan_id: planId
    }

    const saveData = () => {
        console.log(data);
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'adddingplan', {
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
    
    const clearData = () => {
        alert("clear")
    } 

    return(
        <>
            <div className='contact-form-wrp'>
                <Form action=''>
                <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Operator</Form.Label>
                            <Form.Control type="text" id='operator_code' placeholder="Operator Code" onChange={e => setOperator(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Country</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setCountry(e.target.value)}>
                                <option>Select Country</option>
                                {countryOpt}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" id='rechargeType' placeholder="Type" onChange={e => setType(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Sku Code</Form.Label>
                            <Form.Control type="text" id='credit_amount' placeholder="Credit Amount" onChange={e => setSkuCode(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Provider Code</Form.Label>
                            <Form.Control type="text" id='credit_currency' placeholder="Credit Currency" onChange={e => setProviderCode(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Send Amount</Form.Label>
                            <Form.Control type="text" id='credit_amount' placeholder="Credit Amount" onChange={e => setSendAmount(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Send Currency</Form.Label>
                            <Form.Control type="text" id='credit_currency' placeholder="Credit Currency" onChange={e => setSendCurrency(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Receive Amount</Form.Label>
                            <Form.Control type="text" id='credit_amount' placeholder="Credit Amount" onChange={e => setReceiveAmount(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Receive Currency</Form.Label>
                            <Form.Control type="text" id='credit_currency' placeholder="Credit Currency" onChange={e => setReceiveCurrency(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Plan List</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setPlanId(e.target.value)}>
                                <option>Select Plan</option>
                                {planOpt}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <div className='contact-submit'>
                        <Button gap={3} variant="primary" type="button" onClick={saveData}>
                            Save
                        </Button>
                        <Button variant="primary" type="submit" onClick={clearData}>
                            Clear
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default DingForm;