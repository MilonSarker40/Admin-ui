import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ServiceData from './ServiceTableData';

const ServiceTable = () => {
  return (
    <>
     <div className='ad-table-list'>
        <Table striped bordered hover size="lg">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Service</th>
                    <th>MNO</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {ServiceData.map((value,index)=>{
                    return(
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.service}</td>
                            <td>{value.mno}</td>
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

export default ServiceTable
