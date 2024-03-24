import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { trxUserIdSet } from '../../state/actions/authActions';

function TransactionUserList() {

  const uid = localStorage.getItem("uid")
  const [table, setTable] =useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASE_URL+"all")
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
              <th>User Type</th>
              <th>Store</th>
            </tr>
          </thead>
          <tbody>
            {
              table.map((item, index) => (
                <tr key={index}>
                  <td><Link href={`/reporttrxuser/${item.phone}`} onClick={() =>dispatch(trxUserIdSet(item.phone))}>{item.uuid}</Link></td>
                  <td>{item.phone}</td>
                  <td>{item.usertype}</td>
                  <td>{item.store}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    </div>
  );
}

export default TransactionUserList;