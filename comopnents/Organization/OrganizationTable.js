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




const OrganizationTable = () => {


  const [data,setData] =useState([]);

  const bodyData=[
     {
      id: 1,
      transition: '200',
      api: 'Api 1',
      amount:'300',
      date: 'March 04, 2022',
      },
      {
      id: 2,
      transition: '200',
      api: 'Api 2',
      amount:'300',
      date: 'March 04, 2022',
      },
      {
      id: 3,
      transition: '200',
      api: 'Api 3',
      amount:'300',
      date: 'March 04, 2022',
      },
      {
      id: 4,
      transition: '200',
      api: 'Api 4',
      amount:'300',
      date: 'March 04, 2022',
      },
      {
      id: 5,
      transition: '200',
      api: 'Api 5',
      amount:'300',
      date: 'March 04, 2022',
      },
      {
      id: 6,
      transition: '200',
      api: 'Api 6',
      amount:'300',
      date: 'March 04, 2022',
      },
  ]

  const headerData =[
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
      prop: 'transition',
      title: 'Transition'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'api',
      title: 'Api'
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
    // fetch("url")
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
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

export default OrganizationTable;

