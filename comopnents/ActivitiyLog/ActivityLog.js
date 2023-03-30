import { useEffect, useState } from "react"
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

const ActivityLog = () => {
    const [data, setData] = useState([])

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
          prop: 'date',
          title: 'Date'
          },
          {
          isFilterable: false,
          isSortable: true,
          prop: 'type',
          title: 'Type'
          },
          {
          isFilterable: true,
          isSortable: false,
          prop: 'detail',
          title: 'Detail'
          },
    ]

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL+'systemlog/')
            .then((res) => res.json())
            .then((resdata) => setData(resdata.message))
    }, [])
    return (
    <>
    <div className=''>
        <h3>System Log History</h3>
        <DatatableWrapper
            body={data}
            headers={headerData}
            paginationOptionsProps={{
                initialState: {
                options: [5,10,15,20],
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
                <Col className="d-flex flex-col justify-content-end align-items-end" lg={6} xs={12}>
                    <Filter />
                </Col>

                <Col className="d-flex flex-col justify-content-lg-right align-items-right justify-content-sm-end mb-2 mb-sm-0" lg={6} sm={6} xs={12}>
                    <PaginationOptions alwaysShowPagination />
                </Col>
            </Row>
            <table className='table'>
                <TableHeader />
                <TableBody />
            </table>
            <Row>
                <Col className="d-flex flex-col justify-content-end align-items-end" lg={12} sm={12} xs={12}>
                    <Pagination alwaysShowPagination />
                </Col>
            </Row>
        </DatatableWrapper>
      </div>
    </>
    )
}

export default ActivityLog;