import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

const Information = ({uid}) => {
  const [data, setData] = useState({})

  const sid = useSelector(state => state?.settlement?.userSettlementId);

  useEffect(() => {
    console.log("infomration ", sid);
    fetch(process.env.NEXT_PUBLIC_BASE_URL+"user/information/"+sid)
      .then(res => res.json())
      .then(data => setData(data.message))
  }, [])

  return (
    <>
     <div className=''>
      <h1>Information</h1>
      <hr/>
      <p>Debt Remaing to withdraw : {data.dues}</p>
      <p>Total Transactions Made : {data.total_trx}</p>
      <p>Total Amount Recharged : {data.total_recharged}</p>
      <p>Current Balance : {data.balance}</p>
      <p>Current Commision Percentage: {data.percent}%</p>
      </div>
    </>
  )
}

export default Information
