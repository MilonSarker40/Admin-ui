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
import { useSelector } from 'react-redux';


export const TransferTable = ({uid}) => {
    const sid = useSelector(state => state?.settlement?.userSettlementId);
    const [id, setId] = useState(uid);
    const [data,setData] = useState([]);

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
        prop: 'transferedAmount',
        title: 'Transfered Amount'
        },
        {
        isFilterable: true,
        isSortable: true,
        prop: 'deductedAmount',
        title: 'Recharged Amounts'
        },
        {
        isFilterable: false,
        isSortable: true,
        prop: 'createdAt',
        title: 'Date'
        }
    ]
  
    useEffect(() => {
      fetch(process.env.NEXT_PUBLIC_BASE_URL+"data/transfer/"+sid)
        .then((res) => res.json())
        .then((data) => setData(data.message));
    },[])

  return (
    <>
     <div className='transfer-table-wrp'>
        <h3>Transfer Amount</h3>
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
