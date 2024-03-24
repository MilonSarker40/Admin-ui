import React,{useEffect, useState} from 'react';
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

const OperatorSettingData = () => {

  const [data,setData]=useState([]);

  console.log(process.env.NEXT_PUBLIC_BASE_URL);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASE_URL+'mobilesettinglist')
        .then((res) => res.json())
        .then((data) => {
            console.log("operatorcodsetting listelist")
            console.log(data);
            setData(data);
        })
  }, [])

  const headerData=[
    {
      isFilterable: true,
      isSortable: true,
      prop: 'api_code',
      title: 'Api'
      },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'callingCode',
      title: 'Calling Code'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'denominationStep',
      title: 'DenominationStep'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'logo',
      title: 'Logo'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'mobileId',
      title: 'Mobile'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'regex',
      title: 'Regex'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'serviceCode',
      title: 'Service Code'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'startsWith',
      title: 'Starts With'
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

export default OperatorSettingData;