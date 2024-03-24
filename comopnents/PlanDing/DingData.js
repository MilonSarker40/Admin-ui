import React, { useEffect, useState } from 'react';
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

const DingData = () => {
  const [data, setData] = useState([]);

  console.log(process.env.NEXT_PUBLIC_BASE_URL);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASE_URL + 'listdingplan')
      .then((res) => res.json())
      .then((data) => {
        console.log("plan dings")
        console.log(data);
        setData(data);
      })
  }, [])
  const headerData = [
    {
      isFilterable: true,
      isSortable: true,
      prop: 'country',
      title: 'Country'
    },
    {
      isFilterable: true,
      isSortable: true,
      prop: 'operator',
      title: 'Operator'
    },
    {
      isFilterable: true,
      isSortable: false,
      prop: 'plan_id',
      title: 'Plan'
    },
    {
      isFilterable: false,
      isSortable: true,
      prop: 'providercode',
      title: 'Provider COde'
    },
    {
      isFilterable: true,
      isSortable: true,
      prop: 'receive_amount',
      title: 'Recieve Amount'
    },
    {
      isFilterable: true,
      isSortable: true,
      prop: 'receive_currency',
      title: 'Receive Currency'
    },
    {
      isFilterable: true,
      isSortable: false,
      prop: 'send_amount',
      title: 'Send Amount'
    },
    {
      isFilterable: false,
      isSortable: true,
      prop: 'send_currency',
      title: 'Send Currency'
    },
    {
      isFilterable: true,
      isSortable: true,
      prop: 'skucode',
      title: 'Sku Code'
    },
    {
      isFilterable: true,
      isSortable: true,
      prop: 'type',
      title: 'Type'
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

export default DingData;