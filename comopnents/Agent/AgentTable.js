import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import AgentData from './AgentTableData';

const AgentTable = () => {
  return (
    <>
        <div className='ad-table-list'>
            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Area</th>
                        <th>Edit</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {AgentData.map((value,index)=>{
                        return(
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.number}</td>
                                <td>{value.area}</td>
                                <td><Button className='tblBtn' variant="primary"><i class="ri-edit-box-line"></i> {value.edit}</Button></td>
                                <td><Button className='tblBtn' variant="btn btn-primary"><i class="ri-eye-fill"></i> {value.view}</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
     </div>
    </>
  )
}

export default AgentTable
