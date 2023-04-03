import React, { useState, useEffect } from 'react';
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

const SimulatorTable = () => {
    const [data, setData] = useState([]);
    const [agent, setAgent] = useState([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + 'alltrx')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.message);
                setData(data.message);
            })
        // fetch(process.env.NEXT_PUBLIC_BASE_URL + 'allagenttrx/')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data.message);
        //         setAgent(data.message);
        //     })
    }, []);

    let balance = 0.00

    for (let i = 0; i < agent.length; i++) {
        balance = balance + agent[i].transferedAmount - agent[i].deductedAmount;
    }

    const headerAgent = [
        {
            isFilterable: true,
            isSortable: true,
            prop: 'id',
            title: 'Id'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'transferedAmount',
            title: 'credit'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'deductedAmount',
            title: 'debit'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'createdAt',
            title: 'date'
        },
    ]

    const headerData = [
        {
            isFilterable: true,
            isSortable: true,
            prop: 'id',
            title: 'Id'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'phone',
            title: 'Phone'
        },
        {
            isFilterable: true,
            isSortable: false,
            prop: 'amount',
            title: 'Amount'
        },
        {
            isFilterable: false,
            isSortable: true,
            prop: 'agent',
            title: 'Agent'
        },
        {
            isFilterable: false,
            isSortable: true,
            prop: 'api',
            title: 'Api'
        }
        ,
        {
            isFilterable: false,
            isSortable: true,
            prop: 'createdAt',
            title: 'Date'
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
                        date: function noRefCheck() { }
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



            {/* <DatatableWrapper
                body={agent}
                headers={headerAgent}

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
                        date: function noRefCheck() { }
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
            </DatatableWrapper> */}
        </>
    )
}

export default SimulatorTable
