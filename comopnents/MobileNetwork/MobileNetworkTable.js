import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import MobileNetworkData from './MobileNetworkData';




const MobileNetworkTable = () => {
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
                {MobileNetworkData.map((value,index)=>{
                    return(
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.mno}</td>
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
export default MobileNetworkTable
