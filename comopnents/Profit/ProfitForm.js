import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ProfitTable } from './ProfitTable';

const ProfitForm = ({ uid }) => {

    const [Profit, setProfit] = useState("");
    const [agent, setAgent] = useState(0);
    const [opt, setOpt] = useState([]);
    const [apiList, setApiList] = useState([]);

    let apiArray = [
        {
            name: "International",
            code: "INT"
        },
        {
            name: "Voucher",
            code: "Voucher"
        }
    ]


    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + 'country/list')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setOpt(data.message);
            })
        //   setOpt(optd);

        fetch(process.env.NEXT_PUBLIC_BASE_URL + 'apis')
            .then((res) => res.json())
            .then((data) => {
                console.log("apis : ", data.message);
                setApiList(data.message);
            })
    }, [])
    
    for(let api of apiList){
        if(api.code == "ETS" || api.code == "DU"){
            let obj = {
                name: api.name,
                code: api.code
            }
            apiArray.push(obj)
        }
    }

    const options = opt.map((value) => <option value={value.id}>{value.name}</option>)


    const agentVal = (event) => {
        setAgent(event.target.value);
    }

    const ProfitVal = (event) => {
        setProfit(parseFloat(event.target.value));
    }

    let data = {
        percent: Profit,
        uid: uid
    }

    const clearData = () => {
        document.getElementById("Profit").value = 0.00;
    }

    const saveData = () => {
        event.preventDefault();
        let input = document.getElementsByName('percentage[]');
        console.log("percentage", input);
        let values = []
        for (var i = 0; i < input.length; i++) {
            if (!isNaN(parseFloat(input[i].value))){
                let keyVariable = input[i].id
                // let val = {apiCode: input[i].id, percentage: parseFloat(input[i].value)}
                let val = {[keyVariable]: parseFloat(input[i].value)}
                values.push(val);
            }
        }
        let data = values

        console.log(data)
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}assignpercent/${uid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data);
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        clearData();
    }



    return (
        <>
            <div className='contact-form-wrp'>
                <Form action=''>
                    {/* <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Select Agent</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={agentVal}>
                                <option>Select Agent</option>
                                {options}
                            </Form.Select>
                        </Form.Group>
                    </Row> */}
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Profit</Form.Label>
                            <Form.Control type="number" step="2" id="Profit" placeholder="Profit" onChange={ProfitVal} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        {
                            apiArray && apiArray.map((item, index) => (
                                <>
                                    <Row className="mb-3">
                                        <Col lg='2'>
                                            <label>{item.name}</label>
                                        </Col>
                                        <Col lg='4'>
                                            <Form.Control key={index} id={item.code} type="number" name='percentage[]' placeholder="Enter Value" />
                                        </Col>
                                    </Row>
                                </>
                            ))
                        }

                    </Form.Group>
                    <div className='contact-submit'>
                        <Button gap={3} variant="primary" type="submit" onClick={saveData}>
                            Save
                        </Button>
                        <Button variant="primary" type="submit" onClick={clearData}>
                            Clear
                        </Button>
                    </div>
                </Form>
                <ProfitTable uid={uid} />
            </div>
        </>
    )
}

export default ProfitForm
