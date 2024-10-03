import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

const PurchaseApiForm = () => {
    const [listDist, setListDist] = useState([])

    const [dist, setDist] = useState("")
    const [purchase, setPurchase] = useState(0.0)
    const [payable, setPayable] = useState(0.0)
    const [entryDate, setEntryDate] = useState("")

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + 'apis')
            .then((res) => res.json())
            .then((data) => {
                setListDist(data.message);
            })
    }, []);

    const apiList = listDist.map((value) => <option value={value.name}>{ value.name }</option>)

    let data = {
        api: dist,
        purchase: purchase,
        payable: payable,
        entryDate: entryDate
    }

    const saveData = () => {
        console.log(data)
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'addpurchaseapi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.data)
        })
        .catch(error => {
            alert(error)
        })
    }

    return(
        <>
            <p>Purchase Form</p>
            <div className='contact-form-wrp'>
                <Form action=''>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formCountry">
                            <Form.Label>Select Distributor</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setDist(e.target.value)}>
                                <option>Select Distributor</option>
                                {apiList}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Purchase Amount</Form.Label>
                            <Form.Control type="text" id='credit' placeholder="Purchase Amount" onChange={(e) => setPurchase(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Payable Amount</Form.Label>
                            <Form.Control type="text" id='credit_limit' placeholder="Payable Amount" onChange={(e) => {setPayable(e.target.value)}} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Entry Date</Form.Label>
                            <Form.Control type="date" placeholder="Entry Date" onChange={(e) => setEntryDate(e.target.value)}/>
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

export default PurchaseApiForm