import Table from 'react-bootstrap/Table';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { settlementIdSet } from '../../state/actions/authActions';

function AgReportTable() {

  const uid = localStorage.getItem("uid")
  const [table, setTable] =useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASE_URL+"agents")
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
                  <td><Link href={`/settlement/${item.uuid}`} onClick={() =>dispatch(settlementIdSet(item.uuid))}>{item.uuid}</Link></td>
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