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

const AdjustmentTable = () => {
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/alladjustments")
            .then(res => res.json())
            .then(data => setData(data.message))
    }, [])

    const headerData=[
        {
        isFilterable: false,
        isSortable: true,
        prop: 'id',
        title: 'ID'
        },
        {
        isFilterable: true,
        isSortable: true,
        prop: 'adjusted_profit',
        title: ' Adjusted Profit'
        },
        {
        isFilterable: true,
        isSortable: true,
        prop: 'refund_note',
        title: 'Refund Note'
        },
        {
        isFilterable: false,
        isSortable: true,
        prop: 'createdAt',
        title: 'Date'
        },
        {
        isFilterable: false,
        isSortable: true,
        prop: 'trxId',
        title: 'TRX Id'
        },
        {
        isFilterable: false,
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
        prop: 'agent',
        title: 'Agent'
        }
    ]

    return (
        <>
        <div className='transfer-table-wrp'>
        <h3>Adjustments</h3>
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
         </div>
        </>
      )
}

export default AdjustmentTable