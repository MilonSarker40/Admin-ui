import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const OperatorCodeForm = () => {
    const [apiProviderId, setApiProviderId] = useState("");
    const [mobileId, setMobileId] = useState("");
    const [countryId, setCountryId] = useState("");
    const [operatorShort, setOperatorShort] = useState("");
    const [operatorCode, setOperatorCode] = useState("");
    const [country, setCountry] = useState([]);
    const [apiList, setApiList] = useState([]);
    const [networkList, setNetworkList] = useState([]);

    let data = {
        apiProviderId: apiProviderId,
        mobileId: mobileId,
        countryId: countryId,
        operatorShort: operatorShort,
        operatorCode: operatorCode
    }

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + 'country/list')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setCountry(data.message);
            })
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'network/list')
            .then((res) => res.json())
            .then((data) => {
                console.log("network : ", data.message);
                setNetworkList(data.message);
            })

        fetch(process.env.NEXT_PUBLIC_BASE_URL+'apis')
            .then((res) => res.json())
            .then((data) => {
                console.log("apis : ", data.message);
                setApiList(data.message);
            })
    }, [])

    const countryOpt = country.map((value) => <option value={value.uuid}>{value.name}</option>)
    const apiOpt = apiList.map((value) => <option value={value.uuid}>{ value.name }</option>)
    const networkOpt = networkList.map((value) => <option value={value.uuid}>{ value.name }</option>)

    const clearData = () => {
        console.log("CLEAR")
    }

    const saveData = () => {
        console.log(data)
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'setoperatorcode', {
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
                            <Form.Label>Select Api</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setApiProviderId(e.target.value)}>
                                <option>Select Api</option>
                                {apiOpt}
                            </Form.Select>
                        </Form.Group> 
                        <Form.Group as={Col}>
                            <Form.Label>Select Country</Form.Label>
                            <Form.Select aria-label="country" id="countryId" onChange={(e) => setCountryId(e.target.value)}>
                                <option>Select Country</option>
                                {countryOpt}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formCountry">
                            <Form.Label>Select Network</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setMobileId(e.target.value)}>
                                <option>Network</option>
                                {networkOpt}
                            </Form.Select>
                        </Form.Group> 
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Operator Short Code </Form.Label>
                            <Form.Control type="text" id='operatorShort' placeholder="Operator Short Code" onChange={(e) => setOperatorShort(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Operator Code</Form.Label>
                            <Form.Control type="text" id='operatorCode' placeholder="Operator" onChange={(e) => setOperatorCode(e.target.value)} />
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

export default OperatorCodeForm;

