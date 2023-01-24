import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import IndexApiData from './IndexApiTableData';

const IndexApiTable = () => {
  return (
    <>
     <div className='ad-table-list'>
        <Table striped bordered hover size="lg">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mobile Network</th>
                    <th>Data</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {IndexApiData.map((value,index)=>{
                    return(
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.api}</td>
                            <td>{value.code}</td>
                            <td>{value.status}</td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </Table>
     </div>
    </>
  )
}

export default IndexApiTable
