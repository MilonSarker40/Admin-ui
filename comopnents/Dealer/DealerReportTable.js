import Table from 'react-bootstrap/Table';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Link from 'next/link';

function DealerReportTable() {

  const [table, setTable] =useState([
    {
      id: '1',
      agent: 'Dealer1',
      recharge: '500',
      dues: '200',
      earning: '2000',
      balance: '2400',
      sale: '5000'
    },
    {
      id: '2',
      agent: 'Dealer2',
      recharge: '600',
      dues: '300',
      earning: '2100',
      balance: '2400',
      sale: '5100'
    },
    {
      id: '3',
      agent: 'Dealer3',
      recharge: '700',
      dues: '400',
      earning: '2200',
      balance: '2400',
      sale: '5200'
    },
    {
      id: '4',
      agent: 'Dealer4',
      recharge: '800',
      dues: '500',
      earning: '2300',
      balance: '2400',
      sale: '5300'
    },
    {
      id: '5',
      agent: 'Dealer5',
      recharge: '900',
      dues: '600',
      earning: '2400',
      balance: '2400',
      sale: '5400'
    }
  ]);

  return (
    <div className='agent-report-tbl'>
       <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Dealer</th>
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
                  <td><Link href={`/dealerreportid/${item.id}`}>{item.agent}</Link></td>
                  <td><Link href={`/dealerreportid/${item.id}`}>{item.recharge}</Link></td>
                  <td><Link href={`/dealerreportid/${item.id}`}>{item.dues}</Link></td>
                  <td><Link href={`/dealerreportid/${item.id}`}>{item.earning}</Link></td>
                  <td><Link href={`/dealerreportid/${item.id}`}>{item.balance}</Link></td>
                  <td><Link href={`/dealerreportid/${item.id}`}>{item.sale}</Link></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    </div>
  );
}

export default DealerReportTable;