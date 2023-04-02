import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { agentReportIdSet } from '../../state/actions/authActions';

function DealerAgentReport() {
  const dispatch = useDispatch();

  const did = parseInt(useSelector(state => state?.dealer?.subDealerId));
  const [table, setTable] =useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dealersubdealeragentreport/"+did)
      .then(res => res.json())
      .then(data => setTable(data.message))
  }, [])

  console.log(table)

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
                <tr key={item.user.id}>
                  <td>{item.user.email}</td>
                  <td><Link href={`/recharge/${item.user.id}`} onClick={() => dispatch(agentReportIdSet(item.user.id))}>{item.data.recharge}</Link></td>
                  <td><Link href={`/due/${item.user.id}`} onClick={() => dispatch(agentReportIdSet(item.user.id))}>{item.data.dues}</Link></td>
                  <td><Link href={`/earning/${item.user.id}`} onClick={() => dispatch(agentReportIdSet(item.user.id))}>{item.data.earning}</Link></td>
                  <td><Link href={`/balance/${item.user.id}`} onClick={() => dispatch(agentReportIdSet(item.user.id))}>{item.data.balance}</Link></td>
                  <td><Link href={`/sale/${item.user.id}`} onClick={() => dispatch(agentReportIdSet(item.user.id))}>{item.data.sale}</Link></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    </div>
  );
}

export default DealerAgentReport;