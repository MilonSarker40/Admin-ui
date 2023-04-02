import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const SubDealerForm = () => {
    const [fname, setFName] = useState('');
    const [lname, setLname] = useState('');
    const [number, setNumber] = useState('');
    const [pasword, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [store, setStore] = useState('');

    const [verifiCode, setVerifiCode] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [area, setArea] = useState('');
    const [type, setType] = useState('');
    const [dealer, setDealer] = useState('');
    const [age, setAge] = useState(0);
    const [ref, setRef] = useState(0);
    const [users, setUsers] = useState([]);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + 'users')
            .then(res => res.json())
            .then(data => setUsers(data.message))
    }, [])

    const optd1 = [
        {
            id: 0,
            name: 'Select',
            value: 'N/A'
        },
        {
            id: 1,
            name: 'Dealer',
            value: 'dealer'
        },
        {
            id: 2,
            name: 'SubDealer',
            value: 'subdealer',
        },
        {
            id: 3,
            name: 'Agent',
            value: 'agent'
        },
    ]

    const options1 = optd1.map((value) => <option value={value.value}>{value.name}</option>)
    const userOpt = userData.map((value) => <option value={value.id}>{value.email} - {value.store}</option>)

    const typeSelect = (e) => {
        setType(e.target.value);

        if (e.target.value == "dealer") {
            let uData = users.filter((data) => {
                return data ? data.type == "admin" : {}
            });

            setUserData(uData)
        } else if (e.target.value == "subdealer") {
            let uData = users.filter((data) => {
                return data ? data.type == "dealer" : {}
            });

            setUserData(uData)

        } else if (e.target.value == "agent") {
            let uData = users.filter((data) => {
                return data ? data.type == "subdealer" : {}
            });

            setUserData(uData)

        }
        document.getElementById("refer_user").selectedIndex = "0";
    }

    const data = {
        fname: fname,
        lname: lname,
        email: email,
        store: store,
        phone: number,
        password: pasword,
        type: type,
        address: address,
        ref: parseInt(ref),
        age: age
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(data);

        setFName('')
        setNumber('')
        setEmail('')
        setVerifiCode('')
        setAddress('')
        setCity('')
        setCountry('')
        setArea('')
        setDealer('')

        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
    return (
        <>
            <div className='contact-form-wrp'>
                <Form action='' onSubmit={formSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" placeholder="First Name" onChange={(e) => setFName(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" placeholder="Last Name" onChange={(e) => setLname(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Number" onChange={(e) => setNumber(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Set Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Store Name</Form.Label>
                            <Form.Control type='text' placeholder="Enter Store Name" onChange={(e) => setStore(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formVerification">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type='text' placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formDealer">
                            <Form.Label>User Type</Form.Label>
                            <Form.Select aria-label="User Type" onChange={typeSelect}>
                                {options1}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formDealer">
                            <Form.Label>Refer User</Form.Label>
                            <Form.Select aria-label="Refer user" id="refer_user" onChange={(e) => setRef(e.target.value)}>
                                <option value={0}>Select Refer User</option>
                                {userOpt}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <div className='contact-submit'>
                        <Button gap={3} variant="primary" type="submit">
                            Save
                        </Button>
                        <Button variant="primary" type="button">
                            Clear
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default SubDealerForm
