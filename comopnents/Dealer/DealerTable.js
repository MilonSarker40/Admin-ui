import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import DealerData from './DealerData';

const DataTable = () => {
  return (
    <>
      <div className='ad-table-list'>
        <Table striped bordered hover size="lg">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Number</th>
                    <th>Amount</th>
                    <th>By</th>
                    <th>API</th>
                </tr>
            </thead>
            <tbody>
                {DealerData.map((value,index)=>{
                    return(
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.number}</td>
                            <td>{value.amount}</td>
                            <td>{value.by}</td>
                            <td>{value.api}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
     </div>
    </>
  )
}

export default DataTable
