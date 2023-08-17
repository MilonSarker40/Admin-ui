import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const PlanTypeForm = () => {
    const [type, setType] = useState("");
    const [operatorCode, setOperatorCode] = useState("");
    const [operator, setOperator] = useState("");
    const [mobileId, setMobileId] = useState("");
    const [networkList, setNetworkList] = useState([]);

    let data = {
        type: type,
        operator_code: operatorCode,
        operator: operator,
        mobileId: mobileId
    }

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'network/list')
            .then((res) => res.json())
            .then((data) => {
                console.log("network : ", data.message);
                setNetworkList(data.message);
            })
    }, [])

    const networkOpt = networkList.map((value) => <option value={value.uuid}>{ value.name }</option>)

    const clearData = () => {
        console.log("CLEAR")
    }
    
    const saveData = () => {
        console.log(data)
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'createplantype', {
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
                        <Form.Group as={Col}>
                            <Form.Label>Type Name</Form.Label>
                            <Form.Control type="text" id='type' placeholder="Type Name" onChange={(e) => setType(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Operator Code</Form.Label>
                            <Form.Control type="text" id='operator_code' placeholder="Operator Code" onChange={(e) => setOperatorCode(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Operator Name</Form.Label>
                            <Form.Control type="text" id='operator' placeholder="Operator Name" onChange={(e) => setOperator(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formCountry">
                            <Form.Label>Select Network</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setMobileId(e.target.value)}>
                                <option>Network</option>
                                {networkOpt}
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

export default PlanTypeForm;

