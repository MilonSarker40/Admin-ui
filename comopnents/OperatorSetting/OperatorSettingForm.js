import React, { use, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const OperatorSettingForm = () => {
    const [mobileId, setMobileId] = useState("");
    const [logo, setLogo] = useState("");
    const [serviceCode, setServiceCode] = useState("");
    const [callingCode, setCallingCode] = useState("");
    const [startsWith, setStartsWith] = useState("");
    const [maxLength, setMaxLength] = useState("");
    const [apiCode, setApiCode] = useState("");
    const [regex, setRegex] = useState("");
    const [denominationStep, setDenominationStep] = useState("");
    const [networkList, setNetworkList] = useState([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'network/list')
            .then((res) => res.json())
            .then((data) => {
                console.log("network : ", data.message);
                setNetworkList(data.message);
            })
    }, [])

    const networkOpt = networkList.map((value) => <option value={value.uuid}>{ value.name }</option>)

    let data = {
        mobileId: mobileId,
        logo: logo,
        serviceCode: serviceCode,
        callingCode: callingCode,
        startsWith: startsWith,
        max_length: parseInt(maxLength),
        api_code: apiCode,
        regex: regex,
        denominationStep, denominationStep
    }

    const clearData = () => {
        console.log("CLEAR");
    }

    const saveData = () => {
        console.log(data)
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'mobilesetting', {
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
                            <Form.Label>Select Operator Network</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setMobileId(e.target.value)}>
                                <option>Network</option>
                                {networkOpt}
                            </Form.Select>
                        </Form.Group> 
                        <Form.Group as={Col}>
                            <Form.Label>Logo</Form.Label>
                            <Form.Control type="text" id='logo' placeholder="Logo" onChange={(e) => setLogo(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Service Code</Form.Label>
                            <Form.Control type="text" id='serviceCode' placeholder="Service Code" onChange={(e) => setServiceCode(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Calling Code</Form.Label>
                            <Form.Control type="text" id='callingCode' placeholder="Calling Code" onChange={(e) => setCallingCode(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Starts With</Form.Label>
                            <Form.Control type="text" id='startsWith' placeholder="Starts With" onChange={(e) => setStartsWith(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Max Length</Form.Label>
                            <Form.Control type="text" id='max_length' placeholder="Max Length" onChange={(e) => setMaxLength(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Api Code</Form.Label>
                            <Form.Control type="text" id='api_code' placeholder="Api Code" onChange={(e) => setApiCode(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Denomination Step</Form.Label>
                            <Form.Control type="text" id='denominationStep' placeholder="Denomination Step" onChange={(e) => setDenominationStep(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Regex</Form.Label>
                            <Form.Control type="text" id='regex' placeholder="Regex" onChange={(e) => setRegex(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <div className='contact-submit'>
                        <Button gap={3} variant="primary" type="button" onClick={saveData}>
                            Save
                        </Button>
                        <Button variant="primary" type="submit" onClick={console.log("clear")}>
                            Clear
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default OperatorSettingForm;

