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
import { Col, Modal, Row, Table } from 'react-bootstrap';
import ModalUpdate from "./ModalUpdate";

const PriorityData = ({id, dataOpt}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        console.log(dataOpt);
        let filtered = dataOpt.filter((data) => {
          return data ? data.apiId == id : []
        });

        for (let i = 0; i<filtered.length; i++){
          filtered[i].button = <ModalUpdate id={filtered[i].uuid}  />
        }
        console.log("filtered data priority : ", filtered);
        setData(filtered);
    },[])


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
          prop: 'ctry',
          title: 'Country'
          },
          {
          isFilterable: true,
          isSortable: true,
          prop: 'priority',
          title: 'Priority'
          },
          {
            prop: 'button',
            title: 'Button'
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