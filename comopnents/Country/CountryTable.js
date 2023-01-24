import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import CountryData from './CountryTableData';

const CountryTable = () => {
  return (
    <>
        <div className='ad-table-list'>
            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>Short Code</th>
                        <th>Country Code</th>
                        <th>Action</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {CountryData.map((value,index)=>{
                        return(
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.short}</td>
                                <td>{value.code}</td>
                                <td><Button className='tblBtn' variant="primary"><i class="ri-edit-box-line"></i> {value.action}</Button></td>
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

export default CountryTable
