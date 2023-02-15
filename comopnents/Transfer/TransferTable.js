import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  paginationOptionsProps,
  TableBody,
  TableHeader
} from 'react-bs-datatable';
import { Col, Row, Table } from 'react-bootstrap';


export const TransferTable = ({uid}) => {
    const [data,setData] = useState([]);

    const bodyData=[
       {
        id: 1,
        name: 'Agent 1',
        amount:'200',
        date: 'March 02, 2023',
        },
        {
        id: 2,
        name: 'Agent 2',
        amount:'300',
        date: 'March 02, 2023',
        },
        {
        id: 3,
        name: 'Agent 3',
        amount:'400',
        date: 'March 02, 2023',
        },
        {
        id: 4,
        name: 'Agent 4',
        amount:'500',
        date: 'March 02, 2023',
        },
        {
        id: 5,
        name: 'Agent 5',
        amount:'600',
        date: 'March 02, 2023',
        },
  
    ]
  
    const headerData=[
        {
        cellProps: {
            style: function noRefCheck(){}
        },
        isFilterable: false,
        isSortable: true,
        prop: 'id',
        title: 'ID'
        },
        {
        isFilterable: true,
        isSortable: true,
        prop: 'name',
        title: 'Name'
        },
       {
        isFilterable: true,
        isSortable: true,
        prop: 'amount',
        title: 'Amount'
        },
        {
        isFilterable: false,
        isSortable: true,
        prop: 'date',
        title: 'Last Update'
        },
    ]
  
    useEffect(() => {
      // fetch(`http://localhost:3000/data/transfer/${uid}`)
      //   .then((res) => res.json())
      //   .then((data) => setData(data));
      setData(bodyData);
    },[])

  return (
    <>
     <div className='transfer-table-wrp'>
        <h3>Transfer Amount</h3>
     <DatatableWrapper
       body={data}
       headers={headerData}
        paginationOptionsProps={{
            initialState: {
            options: [
                5,
                10,
                15,
                20
            ],
            rowsPerPage: 10
            }
        }}
        sortProps={{
            sortValueObj: {
            date: function noRefCheck(){}
            }
        }}
        >
      <Row className="mb-4">
        <Col
          className="d-flex flex-col justify-content-end align-items-end"
          lg={6}
          xs={12}
        >
          <Filter />
        </Col>

        <Col
            className="d-flex flex-col justify-content-lg-right align-items-right justify-content-sm-end mb-2 mb-sm-0"
            lg={6}
            sm={6}
            xs={12}
          >
            <PaginationOptions alwaysShowPagination />
        </Col>
      </Row>
        <table className='table'>
            <TableHeader />
            <TableBody />
        </table>
        <Row>
          <Col
            className="d-flex flex-col justify-content-end align-items-end"
            lg={12}
            sm={12}
            xs={12}
          >
            <Pagination alwaysShowPagination />
          </Col>
        </Row>
      </DatatableWrapper>
     </div>
    </>
  )
}
