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

const RechargeTable = () => {

  const [data,setData] =useState([]);

  const bodyData =[
    {
      id: 1,
      nambuer: '01745698745',
      date: 'March 04, 2022',
      location: 'Dhaka',
      },
      {
      id: 2,
      nambuer: '01745698745',
      date: 'March 08, 2022',
      location: 'Dhaka',
      },
      {
      id: 3,
      nambuer: '01745698745',
      date: 'February 18, 2022',
      location: 'Dhaka',
      },
      {
      id: 4,
      nambuer: '01745698745',
      date: 'February 15, 2022',
      location: 'Dhaka',
      },
      {
      id: 5,
      nambuer: '01745698745',
      date: 'February 26, 2022',
      location: 'Dhaka',
      },
      {
      id: 6,
      nambuer: '01745698745',
      date: 'February 09, 2022',
      location: 'Dhaka',
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
      prop: 'nambuer',
      title: 'Nambuer'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'date',
      title: 'Last Update'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'location',
      title: 'Location'
      },
  ]
  useEffect(() => {
    fetch("url")
      .then((res) => res.json())
      .then((data) => setData(data));
    setData(bodyData);
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
          className="d-flex flex-col justify-content-end align-items-end firstletter1"
          lg={6}
          xs={12}
        >
          <Filter />
        </Col>

        <Col
            className="d-flex flex-col justify-content-lg-right align-items-right justify-content-sm-end mb-2 mb-sm-0 firstletter1"
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
            className="d-flex flex-col justify-content-end align-items-end tablePagi"
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

export default RechargeTable
