import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const LoginFrom = () => {


    const [number, setNumber]= useState('');
    const [password, setPassword]= useState('');
    const [isloggedIn, setIsloggedIn] = useState(false)
  
    const [recValue,setRecValue] = useState({number:number,password:password});
  
    const submitForm =((e)=>{
      e.preventDefault()
      const newValue ={number:number, password:password}
      setRecValue(newValue)
      console.log(newValue)
  
      setNumber("")
      setPassword("")
      setIsloggedIn(true)
     })
  
  
      const phoneNumber=useRef();
      const userPassword=useRef();
  
      const handleClick=()=>{
         console.log(phoneNumber.current.value,"initial Number value")
         localStorage.setItem("phone_number",phoneNumber.current.value)
  
          console.log(userPassword.current.value,"initial Password value")
          localStorage.setItem("password",userPassword.current.value)
  
          setIsloggedIn(true);
          localStorage.setItem("isLoggedIn", true);
          setIsloggedIn(true);
          window.location.reload();
     }

    return (
        <section className='login-form-sec-wrp'>
          <Container>
            <Row>
                <Col lg='12'>
                  <div className='login-form'>
                  <Form action='' onSubmit={submitForm}>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formNumber">
                            <Form.Label>Number</Form.Label>
                            <Form.Control type="text" id='formNumber' ref={phoneNumber}  value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Number"/>
                        </Form.Group> 
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" id='formPassword' ref={userPassword} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
                            </Form.Group>
                        </Row>
                        <div className='contact-submit'>
                            <Button gap={3} onClick={handleClick} variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                        </Form>
                    </div>
                </Col>
            </Row>
          </Container>
      </section>
    )
}

export default LoginFrom;