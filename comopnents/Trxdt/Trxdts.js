import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Trxdts({id}) {
  const [detail, setDetail] = useState({})
  const tid = parseInt(useSelector(state => state?.trx?.trxId));
  useEffect(() => {
    fetch("http://localhost:3000/trxdetail/"+tid)
      .then(res => res.json())
      .then(data => {
        console.log(data.message)
        setDetail(data.message)
        console.log(detail)
      })
  }, [])

  return (
    <div className='agent-report-tbl'>
      <h5>Transaction Details for {id}</h5>
      <p>Trnsaction Id: {detail.id}</p> 
      <p>Phone: {detail.phone}</p>
      <p>Amount: {detail.amount}</p>
      <p>Status: {detail.rechargeStatus}</p>
      <hr/>
      <p>Agent email: {detail.agent_email}</p>
      <p>Agent phone: {detail.agent_phone}</p>
      <p>Agent store: {detail.store}</p>
      <hr/>
      <p>Country: {detail.ctry}</p>
      <p>MNO: {detail.mno}</p>
      <p>Service: {detail.service}</p>
    </div>
  );
}

export default Trxdts;