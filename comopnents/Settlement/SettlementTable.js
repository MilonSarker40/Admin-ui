import Table from 'react-bootstrap/Table';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Link from 'next/link';

function AgReportTable() {

  const [table, setTable] =useState([
    {
      id: '1',
      agent: 'Agent1',
    },
    {
      id: '2',
      agent: 'Agent2',
    },
    {
      id: '3',
      agent: 'Agent3',
    },
    {
      id: '4',
      agent: 'Agent4',
    },
    {
      id: '5',
      agent: 'Agent5',
    }
  ]);

  return (
    <div className='agent-report-tbl'>
       <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Agent</th>
            </tr>
          </thead>
          <tbody>
            {
              table.map((item) => (
                <tr key={item.id}>
                  <td><Link href={`/settlement/${item.id}`}>{item.agent}</Link></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    </div>
  );
}

export default AgReportTable;