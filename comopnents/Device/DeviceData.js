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
import UpdateDevice from './UpdateDevice';

const DeviceData = () => {
  const [data, setData] = useState([]);

  for (let i = 0; i<data.length; i++){
    console.log(data[i].uuid)
    data[i].func = <UpdateDevice uuid={data[i].uuid}/>
  }


  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASE_URL + 'devicelist')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        setData(data.devicelist);
      })
  }, [])

  const headerData=[
      {
      isFilterable: true,
      isSortable: true,
      prop: 'uuid',
      title: 'ID'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'currentDevice',
      title: 'Current Device'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'prevDevice',
      title: 'Previous Devcie'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'userId',
      title: 'User'
      }
      ,
      {
      isFilterable: false,
      isSortable: true,
      prop: 'createdAt',
      title: 'Date'
      } ,
      {
      isFilterable: false,
      isSortable: true,
      prop: 'func',
      title: 'Change'
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

export default DeviceData;