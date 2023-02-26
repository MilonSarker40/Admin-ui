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
import ApiButton from './ApiButton';


const IndexApiTable = () => {

  const [data,setData] =useState([]);
  for(let i = 0; i<data.length;i++){
    let btn = <ApiButton id={data[i].id} status={data[i].status} />
    data[i].btn = btn
  }

  useEffect(() => {
    fetch('http://localhost:3000/apis')
        .then((res) => res.json())
        .then((data) => {
            setData(data.message);
        })
}, []);

  const headerData=[
    {
      isFilterable: true,
      isSortable: true,
      prop: 'id',
      title: 'Id'
      },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'name',
      title: 'Api'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'code',
      title: 'Code'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'status',
      title: 'Status'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'btn',
      title: 'Toggle'
      }
  ]

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

export default IndexApiTable
