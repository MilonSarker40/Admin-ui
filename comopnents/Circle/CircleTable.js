import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import CircleData from './CircleTableData';

const CircleTable = () => {
  return (
    <>
      <div className='ad-table-list'>
            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Circle</th>
                        <th>Country</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {CircleData.map((value,index)=>{
                        return(
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.circle}</td>
                                <td>{value.ctry}</td>
                                <td><Button className='tblBtn' variant="primary"><i class="ri-edit-box-line"></i> {value.action}</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
     </div>
    </>
  )
}

export default CircleTable
