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

const DealerReportId = () => {
  const [data,setData] =useState([]);

  const bodyData=[
    {
      id: 1,
      taix: '2',
      amount: '200',
      number:'01745698745',
      date: 'March 08, 2022',
      },
      {
      id: 2,
      taix: '2',
      amount: '200',
      number:'01745698745',
      date: 'March 08, 2022',
      },
      {
      id: 3,
      taix: '2',
      amount: '200',
      number:'01745698745',
      date: 'March 08, 2022',
      },
      {
      id: 4,
      taix: '2',
      amount: '200',
      number:'01745698745',
      date: 'March 08, 2022',
      },
      {
      id: 5,
      taix: '2',
      amount: '200',
      number:'01745698745',
      date: 'March 08, 2022',
      },
      {
      id: 6,
      taix: '2',
      amount: '200',
      number:'01745698745',
      date: 'March 08, 2022',
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
      title: 'Agent ID'
      },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'taix',
      title: 'Taix'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'amount',
      title: 'Anount'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'number',
      title: 'Number'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'date',
      title: 'Last Update'
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

export default DealerReportId
