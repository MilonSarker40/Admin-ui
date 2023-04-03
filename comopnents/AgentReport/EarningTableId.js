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
import TrxLink from '../Trxdt/TrxLink';
import { useSelector } from 'react-redux';

const EarningTableId = ({id}) => {
  const rid = parseInt(useSelector(state => state?.report?.agentId));
  const [data,setData] =useState([]);
  const [earn, setEarn] = useState(0);

  for(let i = 0; i<data.length;i++){
    let comp = <TrxLink trxId={data[i].transactionId} />
    data[i].link = comp
  }
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
      prop: 'transactionId',
      title: 'Trx No'
      },
      {
        isFilterable: true,
        isSortable: true,
        prop: 'link',
        title: 'Trx Detail'
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
      prop: 'createdAt',
      title: 'Last Update'
      },
  ]

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BASE_URL + "agentearning/"+rid)
      .then((res) => res.json())
      .then((data) => {
        setData(data.message)
        setEarn(data.earn)
      });
  },[])
  return (
    <>
      <p>Total Earned : {earn}</p>
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

export default EarningTableId
