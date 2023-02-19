import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const SimulatorForm = () => {
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState(0.00);
  const [country, setCountry] = useState(0);
  const [network, setNetwork] = useState(0);
  const [service, setService] = useState(0);
  const [countries, setCountries] = useState([]);
  const [networks, setNetworks] = useState([]);
  const [services, setServices] = useState([]);
  const [networklist, setNetworklist] = useState([]);
  const [servicelist, setServicelist] = useState([]);

  // const loginData = useSelector(state => state?.auth.loginData);

  useEffect(() => {
      fetch('http://localhost:3000/country/list')
          .then((res) => res.json())
          .then((data) => {
              console.log("country : ", data.message);
              setCountries(data.message);
          })
      fetch('http://localhost:3000/network/list')
          .then((res) => res.json())
          .then((data) => {
              console.log("network : ", data.message);
              setNetworks(data.message);
          })
      fetch('http://localhost:3000/service/list')
          .then((res) => res.json())
          .then((data) => {
              console.log("service : ", data.message);
              setServices(data.message);
          })
  }, [])

  const ctry = countries.map((value) => <option value={value.id}>{value.name}</option>)
  const net = networklist.map((value) => <option value={value.id}>{value.name}</option>)
  const serv = servicelist.map((value) => <option value={value.id}>{value.name}</option>)

  const mobileVal = (event) => {
      setMobile(event.target.value);
  }

  const amountVal = (event) => {
      setAmount(event.target.value);
  }

  const countryVal = (event) => {
      console.log(event.target.value);
      setCountry(event.target.value);
      let ctry = event.target.value;
      const filterdNetwork = networks.filter((data) => {
          return data ? data.nationId == parseInt(ctry) : {}
      });
      console.log(filterdNetwork);

      setNetworklist(filterdNetwork);
  }

  const networkVal = (event) => {
      console.log(event.target.value);
      setNetwork(event.target.value);
      let net = event.target.value;
      const filteredService = services.filter((data) => {
          return data ? data.mobileId === parseInt(net) : {}
      });
      console.log(filteredService);
      setServicelist(filteredService);
  }

  const serviceVal = (event) => {
      setService(event.target.value);
  }

  let data = {
      'mobile': mobile,
      'amount': amount,
      'country': parseInt(country),
      'network': parseInt(network),
      'service': parseInt(service),
      'userId': parseInt(localStorage.getItem("uid"))
  }

  const clearData = () => {
      document.getElementById("mobile").value = "";
      document.getElementById("amount").value = null;
      document.getElementById("country").selectedIndex = "0";
      document.getElementById("network").selectedIndex = "0";
      document.getElementById("service").selectedIndex = "0";
  }

  const saveData = () => {
      console.log(data);
      if (mobile.length == 11){
          fetch('http://localhost:3000/submitdata', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          })
          .then((response) => response.json())
          .then((data) => {
              console.log('Success:', data);
              alert(data.message.msg);
          })
          .catch((error) => {
              console.error('Error:', error);
              alert(error.message.msg);
          });
          clearData();
      }else{
          alert(`you have entered a number with the lenth of ${mobile.length}`);
      }
      
  }

  return (
    <>
     <div className='contact-form-wrp'>
         <Form action=''>
           <Row className="mb-3">
               <Form.Group as={Col} controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Select aria-label="Default select example" id="country" onChange={countryVal}>
                        <option value='0'>Select Country</option>
                        {ctry}
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formNetwork">
                    <Form.Label>Network</Form.Label>
                    <Form.Select aria-label="Default select example" id="network" onChange={networkVal}>
                        <option value="0">Select Network</option>
                        {net}
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formCountry">
                    <Form.Label>Service Type</Form.Label>
                    <Form.Select aria-label="Default select example" id="service" onChange={serviceVal}>
                        <option value="0">Select Service</option>
                        {serv}
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formMobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Mobile Number" id="mobile" onChange={mobileVal} />
                </Form.Group>
            </Row>
            <Row className='mb-3'>
               <Form.Group as={Col} controlId="formAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" placeholder="Enter Amount" step="0.01" id="amount" onChange={amountVal} />
                </Form.Group>
            </Row>
            <div className='contact-submit'>
                <Button gap={3} variant="primary" type="button" id="btn_save" onClick={saveData}>
                  Recharge
                </Button>
                <Button variant="primary" type="button" id="btn_clear" onClick={clearData}>
                    Clear
                </Button>
            </div>
            </Form>
      </div>
    </>
  )
}

export default SimulatorForm
