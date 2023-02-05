import Table from 'react-bootstrap/Table';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Link from 'next/link';

function AgReportTable() {

  const [table, setTable] =useState([
    {
      id: '1',
      agent: 'Agent1',
      recharge: '500',
      dues: '200',
      earning: '2000',
      balance: '2400',
      sale: '5000'
    },
    {
      id: '2',
      agent: 'Agent2',
      recharge: '600',
      dues: '300',
      earning: '2100',
      balance: '2400',
      sale: '5100'
    },
    {
      id: '3',
      agent: 'Agent3',
      recharge: '700',
      dues: '400',
      earning: '2200',
      sale: '5200'
    },
    {
      id: '4',
      agent: 'Agent4',
      recharge: '800',
      dues: '500',
      earning: '2300',
      balance: '2400',
      sale: '5300'
    },
    {
      id: '5',
      agent: 'Agent5',
      recharge: '900',
      dues: '600',
      earning: '2400',
      balance: '2400',
      sale: '5400'
    }
  ]);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Agent</th>
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
              <Link href={`/agentreport/${item.id}`}> <td>{item.agent}</td></Link>
              <td>{item.recharge}</td>
              <td>{item.dues}</td>
              <td>{item.earning}</td>
              <td>{item.balance}</td>
              <td>{item.sale}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default AgReportTable;