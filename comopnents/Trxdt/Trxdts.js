import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DataStatus from '../DataStatus/DataStatus';

function Trxdts({id}) {
  const [detail, setDetail] = useState({})
  const tid = useSelector(state => state?.trx?.trxId);
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASE_URL+"trxdetail/"+tid)
      .then(res => res.json())
      .then(data => {
        console.log(data.message)
        setDetail(data.message)
        console.log(detail)
      })
  }, [])
  console.log("recharge Status ", detail.status)
  console.log("trx_stat ", detail.trx_stat)
  const recharge_status = <DataStatus status={detail.status}/>
  const trx_status = <DataStatus status={detail.trx_stat}/>

  return (
    <div className='agent-report-tbl'>
      <h5>Transaction Details for {id}</h5>
      <p>Trnsaction Id: {detail.id}</p> 
      <p>Phone: {detail.phone}</p>
      <p>Amount: {detail.amount}</p>
      <p>Status: {recharge_status}</p>  
      <hr/>
      <p>Agent email: {detail.agent_email}</p>
      <p>Agent phone: {detail.agent_phone}</p>
      <p>Agent store: {detail.store}</p>
      <hr/>
      <p>Country: {detail.ctry}</p>
      <p>MNO: {detail.mno}</p>
      <p>Service: {detail.service}</p>
      <hr/>
      <p>Device: {detail.device}</p>
      <p>Ip Addr: {detail.ip_addr}</p>
      <p>Response: {detail.trx_resp}</p>
      <p>Status: {trx_status}</p>
    </div>
  );
}

export default Trxdts;