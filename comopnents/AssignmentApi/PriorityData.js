import { useEffect, useState } from "react";
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

const PriorityData = ({id}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        // fetch('http://localhost:3000/api/priority')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log("priorities : ", data.message);
        //         setData(data.message);
        //     })

        setData(bodyData);
    },[])

    const bodyData=[
        {
        score: 1,
        country: 'Bangladesh',
        priority: '1.2',
        },
        {
        score: 2,
        country: 'Bangladesh',
        priority: '1.2',
        },
        {
        score: 3,
        country: 'Bangladesh',
        priority: '1.2',
        },
        {
        score:4,
        country: 'Bangladesh',
        priority: '1.2',
        },
        {
        score: 5,
        country: 'Bangladesh',
        priority: '1.2',
        },
        {
        score: 6,
        country: 'Bangladesh',
        priority: '1.2',
        },
    ]
    const headerData=[
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
          isFilterable: true,
          isSortable: true,
          prop: 'country',
          title: 'Country'
          },
          {
          isFilterable: true,
          isSortable: true,
          prop: 'priority',
          title: 'Priority'
          },
      
       ]

    return(
        <>
        <p>Data is : {id}</p>
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

export default PriorityData;