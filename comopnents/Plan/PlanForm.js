import React, { use, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const PlanForm = () => {
    const [operatorCode, setOperatorCode] = useState("");
    const [circleCode, setCircleCode] = useState("");
    const [rechargeType, setRechargeType] = useState("");
    const [creditAmount, setCreditAmount] = useState("");
    const [creditCurrency, setCreditCurrency] = useState("");
    const [debitAmount, setDebitAmount] = useState("");
    const [debitCurrency, setDebitCurrency] = useState("");
    const [validity, setValidity] = useState(0);
    const [narration, setNarration] = useState("");
    const [isRange, setIsRange] = useState(false);
    const [apiPlanId, setApiPlanId] = useState("");
    const [code, setCode] = useState("");
    const [statusopt, setStatusopt] = useState([]);
    const [apiList, setApiList] = useState([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'apis')
            .then((res) => res.json())
            .then((data) => {
                console.log("apis : ", data.message);
                setApiList(data.message);
            })
    }, [])

    const apiOpt = apiList.map((value) => <option value={value.uuid}>{ value.name }</option>)

    const stats = [
        { 'status': "True" },
        { 'status': "False" }
    ]
    useEffect(() => {
        setStatusopt(stats);
    }, [])
    const statoptions = statusopt.map((value) => <option value={value.status}>{value.status}</option>)

    const clearData = () => {
        console.log("CLEAR")
    }

    const saveData = () => {
        console.log("Submitting");
        let input = document.getElementsByName('priority[]');
        console.log("priorities", input);
        let values = []
        for (var i = 0; i < input.length; i++) {
            if (!isNaN(parseInt(input[i].value))){
                let val = {apiId: input[i].id, priority: parseInt(input[i].value)}
                values.push(val);
            }
        }

        let data = {
            operator_code: operatorCode,
            circle_code: circleCode,
            rechargeType: rechargeType,
            credit_amount: creditAmount,
            credit_currency: creditCurrency,
            debit_amount: debitAmount,
            debit_currency: debitCurrency,
            validity: validity,
            narration: narration,
            is_range: isRange,
            productCode: code,
            tags: [],
            api_plan_id: apiPlanId,
            values: values
        }


        console.log("FULL PLAN DATA : ", data)
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'dummyplan', {
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
            <div className='contact-form-wrp'>
                <Form action=''>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formCountry">
                            <Form.Label>API ID For plan</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setApiPlanId(e.target.value)}>
                                <option>Select Api</option>
                                {apiOpt}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Operator Code</Form.Label>
                            <Form.Control type="text" id='operator_code' placeholder="Operator Code" onChange={e => setOperatorCode(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Circle Code</Form.Label>
                            <Form.Control type="text" id='circle_code' placeholder="Circle Code" onChange={e => setCircleCode(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Recharge Type</Form.Label>
                            <Form.Control type="text" id='rechargeType' placeholder="Recharge Type" onChange={e => setRechargeType(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Credit Amount</Form.Label>
                            <Form.Control type="text" id='credit_amount' placeholder="Credit Amount" onChange={e => setCreditAmount(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Credit Currency</Form.Label>
                            <Form.Control type="text" id='credit_currency' placeholder="Credit Currency" onChange={e => setCreditCurrency(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Debit Amount</Form.Label>
                            <Form.Control type="text" id='debit_amount' placeholder="Debit Amount" onChange={e => setDebitAmount(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Debit Currency</Form.Label>
                            <Form.Control type="text" id='debit_currency' placeholder="Debit Currency" onChange={e => setDebitCurrency(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Validity</Form.Label>
                            <Form.Control type="text" id='validity' placeholder="Validity" onChange={e => setValidity(e.target.value)} />
                        </Form.Group>
                        {/* <Form.Group as={Col}>
                            <Form.Label>Is Range</Form.Label>
                            <Form.Control type="text" id='is_range' placeholder="Is Range" onChange={e => setIsRange(e.target.value)} />
                        </Form.Group> */}
                        <Form.Group as={Col}>
                            <Form.Label>Is Range</Form.Label>
                            <Form.Select aria-label="Status" id="is_range" onChange={e => setIsRange(e.target.value)} >
                                <option>Select Is Range</option>
                                {statoptions}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Narration</Form.Label>
                            <Form.Control type="text" id='narration' placeholder="Narration" onChange={e => setNarration(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Product Code</Form.Label>
                            <Form.Control type="text" id='prodcode' placeholder="Product Code" onChange={e => setCode(e.target.value)} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>SET API PRIORITY</Form.Label>
                        {
                        apiList && apiList.map((item,index) => (
                            <>
                            <Row className="mb-3">
                            <Col lg='2'>
                                <label>{item.name}</label>
                            </Col>
                            <Col lg='4'>
                                <Form.Control key={index} id={item.name} type="number" name='priority[]' placeholder="Enter Value" />
                            </Col>
                            </Row>
                            </>
                        ))
                        }
                        
                    </Form.Group>
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

export default PlanForm;

