import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const SubmitForm = ({func}) => {
    const [trx, setTrx] = useState([]);
    const [trxId, setTrxId] = useState("");
    const [trxCheck, setTrxCheck] = useState(0);
    const [note, setNote] = useState("");


    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL+"alltransactions")
            .then((res) => res.json())
            .then((data) => setTrx(data.message));
    }, [])

    const data = {  
        tid: trxId,
        note: note

    }

    const options = trx.map((value) => <option value={value.uuid}>{value.trxId} - Amount - {value.amount}</option>)

    const checkData = () => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL+"trxdetail/"+trxId)
            .then(res => res.json())
            .then(data => {
                console.log(data.message);
                func(data.message);
            })
    }

    const refundData = () => {
        console.log("refund data : ", data)
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'trxrefund/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
            alert(error.message.msg);
        });
    }

    return (
        <>
            <h5>Select Transaction</h5>
            <Form>
            <Form.Group as={Col}>
                <Form.Label>Country</Form.Label>
                <Form.Select aria-label="" id="trxId" onChange={(e) => setTrxId(e.target.value)}>
                    <option value='0'>Select Transaction</option>
                    {options}
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Refund Note</Form.Label>
                <Form.Control type="text" placeholder="Refund Note" id="note" onChange={(e) => setNote(e.target.value)}/>
            </Form.Group>
            <div className='contact-submit mt-2'>
                <Button gap={3} variant="primary" type="button" id="btn_save" onClick={checkData}>
                  Check Data
                </Button>
                <Button variant="primary" type="button" id="btn_clear" onClick={refundData}>
                    Refund
                </Button>
            </div>
            </Form>
        </>
    )
}

export default SubmitForm;