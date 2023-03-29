import Table from 'react-bootstrap/Table';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

function DealerSubDealerReportTable() {
  const did = parseInt(useSelector(state => state?.dealer?.dealerId));
  console.log("did is ", did);
  const [table, setTable] =useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dealersubdealerreport/"+did)
      .then(res => res.json())
      .then(data => setTable(data.message))
  }, [])

  return (
    <div className='agent-report-tbl'>
       <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Dealer</th>
              <th>Phone</th>
              <th>store</th>
              <th>Date </th>
            </tr>
          </thead>
          <tbody>
            {
              table.map((item) => (
                <tr key={item.id}>
                  <td><Link href={`/`}>{item.id}</Link></td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.store}</td>
                  <td>{item.createdAt}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    </div>
  );
}

export default DealerSubDealerReportTable;