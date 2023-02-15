import React from 'react';
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

const DueId = () => {
  return (
    <>
      <DatatableWrapper
        body={[
            
            {
            id: 1,
            due: '200',
            // date: 'March 04, 2022',
            },
            {
            id: 2,
            due: '300',
            // date: 'March 04, 2022',
            },
            {
            id: 3,
            due: '300',
            // date: 'March 04, 2022',
            },
        ]}
        headers={[
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
            prop: 'due',
            title: 'Due'
            },
        ]}
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

export default DueId
