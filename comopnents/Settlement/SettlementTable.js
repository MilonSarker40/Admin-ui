import Table from 'react-bootstrap/Table';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Link from 'next/link';

function AgReportTable() {

  const uid = localStorage.getItem("uid")


  const [table, setTable] =useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/agents")
      .then((res) => res.json())
      .then((data) => setTable(data.message))
  }, [])

  return (
    <div className='agent-report-tbl'>
       <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th> 
              <th>Agent</th>
              <th>Email</th>
              <th>Store</th>
            </tr>
          </thead>
          <tbody>
            {
              table.map((item) => (
                <tr key={item.id}>
                  <td><Link href={`/settlement/${item.id}`}>{item.id}</Link></td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.store}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    </div>
  );
}

export default AgReportTable;