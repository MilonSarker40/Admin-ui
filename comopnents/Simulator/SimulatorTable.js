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

const SimulatorTable = () => {
  return (
    <>
    <DatatableWrapper
    body={[
        
        {
        date: 'March 04, 2022',
        location: 'Dhaka',
        name: 'Gertrud',
        score: 60,
        status: 'Eidt',
        nambuer: '01745698745'
        },
        {
        date: 'March 08, 2022',
        location: 'Dhaka',
        name: 'Gui',
        score: 73,
        status: 'Eidt',
        nambuer: '01745698745'
        },
        {
        date: 'February 18, 2022',
        location: 'Dhaka',
        name: 'Hannis',
        score: 17,
        status: 'Eidt',
        nambuer: '01745698745'
        },
        {
        date: 'February 15, 2022',
        location: 'Dhaka',
        name: 'Hyacinthe',
        score: 1,
        status: 'Eidt',
        nambuer: '01745698745'
        },
        {
        date: 'February 26, 2022',
        location: 'Dhaka',
        name: 'Jacquetta',
        score: 54,
        status: 'Eidt',
        nambuer: '01745698745'
        },
        {
        date: 'February 09, 2022',
        location: 'Dhaka',
        name: 'Jany',
        score: 44,
        status: 'Eidt',
        nambuer: '01745698745'
        },
   
       
    ]}
    headers={[
        {
        isFilterable: true,
        isSortable: true,
        prop: 'name',
        title: 'Name'
        },
        {
        isFilterable: true,
        isSortable: true,
        prop: 'nambuer',
        title: 'Nambuer'
        },
        {
        isFilterable: true,
        isSortable: false,
        prop: 'location',
        title: 'Location'
        },
        {
        isFilterable: false,
        isSortable: true,
        prop: 'date',
        title: 'Last Update'
        },
        {
        cellProps: {
            style: function noRefCheck(){}
        },
        isFilterable: false,
        isSortable: true,
        prop: 'score',
        title: 'ID'
        },
        {
        alignment: {
            horizontal: 'center'
        },
         checkbox: {
            className: 'table-checkbox',
             idProp: 'name'
         },
         prop: 'checkbox'
         }
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
      lg={4}
      xs={12}
    >
      <Filter />
    </Col>
    <Col
      className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
      lg={4}
      sm={6}
      xs={12}
    >
      <PaginationOptions alwaysShowPagination />
    </Col>
    <Col
      className="d-flex flex-col justify-content-end align-items-end"
      lg={4}
      sm={6}
      xs={12}
    >
      <Pagination alwaysShowPagination />
    </Col>
    <Col
      className="mt-2"
      xs={12}
    >
      {/* <BulkCheckboxControl /> */}
    </Col>
  </Row>
    <table className='table'>
        <TableHeader />
        <TableBody />
    </table>
  </DatatableWrapper>
    </>
  )
}

export default SimulatorTable
