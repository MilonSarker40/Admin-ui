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


export const ProfitTable = ({uid}) => {
    const [data,setData] = useState([]);
    console.log("profit uid : ", uid, typeof(uid));

    // {
    //   id: 1,
    //   userId: 11,
    //   percentage: 2,
    //   createdAt: 2023-02-12T07:42:57.986Z
    // }
    const bodyData=[
       {
        id: 1,
        name: 'Agent 1',
        percentage:'10%',
        date: 'March 02, 2023',
        }
    ]
  
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
        prop: 'userId',
        title: 'Name'
        },
       {
        isFilterable: true,
        isSortable: true,
        prop: 'percentage',
        title: 'Percentage'
        },
        {
        isFilterable: false,
        isSortable: true,
        prop: 'createdAt',
        title: 'Last Update'
        },
    ]
  
    useEffect(() => {
      fetch("http://localhost:3000/data/percent/"+uid)
        .then((res) => res.json())
        .then((data) => {
          console.log("profit data : ", data)
          setData(data.message)
        });
      // setData(bodyData);
    },[])

  return (
    <>
    <div className='transfer-table-wrp'>
      <h3>Profit History</h3>
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
