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
import TrxLink from '../Trxdt/TrxLink';
import DateFilter from './DateFilter';
import Summary from './Summary';


const OrganizationTable = () => {
  const [data,setData] =useState([]);
  const [total, setTotal] = useState(0);
  const [success, setSuccess] = useState(0);
  const [failed, setFailed] = useState(0);
  const [sales, setSales] = useState(0);

  for(let i = 0; i<data.length;i++){
    let comp = <TrxLink trxId={data[i].transactionId} />
    data[i].link = comp
  }

  const headerData =[
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
      prop: 'transactionId',
      title: 'Trx'
      },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'link',
      title: 'Trx Detail'
      },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'rechargeAmount',
      title: 'Recharge Amount'
      },
      {
      isFilterable: true,
      isSortable: false,
      prop: 'api',
      title: 'Api'
      },
      {
      isFilterable: true,
      isSortable: true,
      prop: 'cutAmount',
      title: 'Amount'
      },
      {
      isFilterable: false,
      isSortable: true,
      prop: 'createdAt',
      title: 'Date'
      },
  ]

  useEffect(() => {
    fetch("http://localhost:3000/orgreports")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message)
        setTotal(data.total_earned)
        setSuccess(data.success_recharge_count)
        setFailed(data.failed_recharge_count)
        setSales(data.total_sales)
      });
  },[])

  const filteredData = (data) => {
    setData(data.message);
    setTotal(data.total_earned)
    setSuccess(data.success_recharge_count)
    setFailed(data.failed_recharge_count)
    setSales(data.total_sales)
  }

  return (
    <>
      <DateFilter func={filteredData} />
      <hr/>
      <Summary total={total} success={success} failed={failed} sales={sales}/>
      <hr/>
      <h4>Data</h4>
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

export default OrganizationTable;

