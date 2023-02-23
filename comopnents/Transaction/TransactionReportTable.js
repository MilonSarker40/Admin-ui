import React, { useState ,useEffect} from 'react';
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
import TrxLink from '../Trxdt/TrxLink';

const TransactionReportId = () => {
  const [data,setData] =useState([]);

  for(let i = 0; i<data.length;i++){
    let comp = <TrxLink trxId={data[i].trxId} />

    data[i].link = comp
  }

  const headerData=[
    {
      cellProps: {
          style: function noRefCheck(){}
      },
      isFilterable: false,
      isSortable: true,
      prop: 'trxId',
      title: 'Trx ID'
      },
      {
        isFilterable: true,
        isSortable: true,
        prop: 'link',
        title: 'Link'
      },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'phone',
      title: 'Phone'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'amount',
      title: 'Amount'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'rechargeStatus',
      title: 'Status'
      },
      {
        isFilterable: false,
        isSortable: true,
        prop: 'doneBy',
        title: 'Agent'
      },
      {
        isFilterable: false,
        isSortable: true,
        prop: 'store',
        title: 'Agent Store'
      },
      {
        isFilterable: false,
        isSortable: true,
        prop: 'country',
        title: 'Country'
      },
      {
        isFilterable: false,
        isSortable: true,
        prop: 'network',
        title: 'Network'
      },
      {
        isFilterable: false,
        isSortable: true,
        prop: 'service',
        title: 'Service'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'createdAt',
      title: 'Date'
      },
  ]

  useEffect(() => {
    fetch("http://localhost:3000/alltransactions")
      .then((res) => res.json())
      .then((data) => setData(data.message));
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

export default TransactionReportId
