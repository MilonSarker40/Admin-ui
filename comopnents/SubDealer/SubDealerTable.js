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

const SubDealerTable = () => {

  const [data,setData] = useState([]);

  const test= {
    "id": 9,
    "email": "test@test.com",
    "phone": "01797568609",
    "password": "$2b$12$VZ03b5FiGy.37FtIaBK6YeWmw6jsqlDYE1qmS49xYXXIp.UwDEXWG",
    "createdAt": "2023-02-02T09:43:08.730Z",
    "updatedAt": "2023-02-02T09:43:08.730Z",
    "type": "agent",
    "status": true
}

  const bodyData=[]

  const headerData =[
    {
      isFilterable: true,
      isSortable: true,
      prop: 'id',
      title: 'Id'
      },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'phone',
      title: 'Phone'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'email',
      title: 'Email'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'store',
      title: 'Store'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'type',
      title: 'Type'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'createdAt',
      title: 'Date Joined'
      }
  ]

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASE_URL+"all")
      .then((res) => res.json())
      .then((data) => setData(data.message));
    // setData(bodyData);
  },[])

  return (
    <>
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
    </>
  )
}

export default SubDealerTable
