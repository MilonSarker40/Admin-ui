import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

const CommissionForm = () => {
    const [listTelco, setListTelco] = useState([])
    const [listDist, setListDist] = useState([])

    const [telco, setTelco] = useState("")
    const [dist, setDist] = useState("")
    const [com, setCom] = useState(0.0)
    const [locale, setLocale] = useState("")

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + 'apis')
            .then((res) => res.json())
            .then((data) => {
                setListDist(data.message);
            })

        fetch(process.env.NEXT_PUBLIC_BASE_URL+'networks')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setListTelco(data.message);
            })
    }, []);

    const apiList = listDist.map((value) => <option value={value.name}>{ value.name }</option>)
    const telcoList = listTelco.map((value) => <option value={value.name}>{ value.name } - { value.short }</option>)

    let data = {
        telco: telco,
        dist: dist,
        commission: com,
        locale: locale
    }

    const saveData = () => {
        console.log(data)
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'addpurchase', {
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
                        <Form.Group as={Col} controlId="formPurchase">
                            <Form.Label>Select Distributor</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setDist(e.target.value)}>
                                <option>Select Distributor</option>
                                {apiList}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formPurchase">
                            <Form.Label>Select Telco</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setTelco(e.target.value)}>
                                <option>Select Telco</option>
                                {telcoList}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formPurchase">
                            <Form.Label>Locale</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setLocale(e.target.value)}>
                                <option value="">Select Option</option>
                                <option value="local">Local</option>
                                <option value="international">International</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Commission</Form.Label>
                            <Form.Control type="text" id='credit_limit' placeholder="Commission" onChange={(e) => {setCom(e.target.value)}}/>
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

export default CommissionForm