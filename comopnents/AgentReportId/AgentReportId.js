import Table from 'react-bootstrap/Table';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Link from 'next/link';

function AgentReportId() {

  const [table, setTable] =useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/agentreport')
      .then(res => res.json())
      .then(data => setTable(data.message))
  },[])

  return (
    <div className='agent-report-tbl'>
       <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Agent Report</th>
              <th>Recharge</th>
              <th>Dues</th>
              <th>Earing</th>
              <th>Balance </th>
              <th>Sale</th>
            </tr>
          </thead>
          <tbody>
            {
              table.map((item) => (
                <tr key={item.id}>
                  <td>{item.email}</td>
                  <td><Link href={`/recharge/${item.id}`}>{item.data.recharge}</Link></td>
                  <td><Link href={`/due/${item.id}`}>{item.data.dues}</Link></td>
                  <td><Link href={`/earning/${item.id}`}>{item.data.earning}</Link></td>
                  <td><Link href={`/balance/${item.id}`}>{item.data.balance}</Link></td>
                  <td><Link href={`/sale/${item.id}`}>{item.data.sale}</Link></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    </div>
  );
}

export default AgentReportId;