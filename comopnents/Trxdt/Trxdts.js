import { useEffect, useState } from 'react';

function Trxdts({id}) {
  const [detail, setDetail] = useState({})

  useEffect(() => {
    fetch("http://localhost:3000/trxdetail/"+id)
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
      <p>Agent email: {detail.doneBy.email}</p>
      <p>Agent phone: {detail.doneBy.phone}</p>
      <p>Agent store: {detail.doneBy.store}</p>
      <hr/>
      <p>Country: {detail.country.name}</p>
      <p>MNO: {detail.mobile.name}</p>
      <p>Service: {detail.service.name}</p>
    </div>
  );
}

export default Trxdts;