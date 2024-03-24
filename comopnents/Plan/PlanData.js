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

const PlanData = () => {
  const [data, setData] = useState([]);

  console.log(process.env.NEXT_PUBLIC_BASE_URL);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASE_URL + 'listplan')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        setData(data.message);
      })
  }, [])

  const headerData = [
    {
      isFilterable: true,
      isSortable: true,
      prop: 'api_plan',
      title: 'Api Plan'
    },
    {
      isFilterable: true,
      isSortable: true,
      prop: 'circle_code',
      title: 'Circle Code'
    },
    {
      isFilterable: true,
      isSortable: false,
      prop: 'credit_amount',
      title: 'Credit Amount'
    },
    {
      isFilterable: false,
      isSortable: true,
      prop: 'credit_currency',
      title: 'Credit Currency'
    },
    {
      isFilterable: true,
      isSortable: true,
      prop: 'debit_amount',
      title: 'Debit Amount'
    },
    {
      isFilterable: true,
      isSortable: true,
      prop: 'debit_currency',
      title: 'Debit Currency'
    },
    {
      isFilterable: true,
      isSortable: false,
      prop: 'is_range',
      title: 'is_range'
    },
    {
      isFilterable: false,
      isSortable: true,
      prop: 'narration',
      title: 'Narration'
    },
    {
      isFilterable: true,
      isSortable: true,
      prop: 'operator_code',
      title: 'Operator Code'
    },
    {
      isFilterable: true,
      isSortable: true,
      prop: 'rechargeType',
      title: 'Recharge Type'
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

export default PlanData;