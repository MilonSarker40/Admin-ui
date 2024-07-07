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
import Badge from 'react-bootstrap/Badge';
import Papa from 'papaparse';
import DateFilter from './DateFilter';

const SalesTable = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "salesreport")
            .then((res) => res.json())
            .then((data) => setData(data.data))
    }, [])

    const url = "filtersalesreport"
    const filteredData = (data) => {
        setData(data.data)
    }

    const exportToCSV = () => {
        const csvData = data.map(row => ({
            Balance: row.balance,
            Amount: row.amount,
            Agent: row.agent,
            Number: row.number,
            Operator: row.operator,
            Api: row.api,
            Time: row.time
        }));

        const csv = Papa.unparse(csvData)
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        if (link.download != undefined) {
            const url = URL.createObjectURL(blob)
            link.setAttribute('href', url)
            link.setAttribute('download', 'sales.csv')
            link.style.visibility = 'hidden'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }

    const headerData = [
        {
            cellProps: {
                style: function noRefCheck() { }
            },
            isFilterable: true,
            isSortable: true,
            prop: 'balance',
            title: 'Balance'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'amount',
            title: 'Amount'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'agent',
            title: 'Agent'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'number',
            title: 'Number'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'operator',
            title: 'Operator'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'api',
            title: 'Api'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'time',
            title: 'Time'
        },
    ]

    // return(
    //     <Table striped bordered hover size="sm">
    //         <thead>
    //             <tr>
    //                 <th>Api Balance</th> 
    //                 <th>Recharge Amoun t</th>
    //                 <th>Agent</th>
    //                 <th>Number</th>
    //                 <th>Operator</th>
    //                 <th>Api</th>
    //                 <th>Time</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //         {
    //                 data.map((item, index) => (
    //                     <tr key={index}>
    //                         <td>{item.balance}</td>
    //                         <td>{item.amount}</td>
    //                         <td>{item.agent}</td>
    //                         <td>{item.number}</td>
    //                         <td>{item.operator}</td>
    //                         <td>{item.api}</td>
    //                         <td>{item.time}</td>
    //                     </tr>
    //                 ))
    //             }
    //         </tbody>
    //     </Table>
    // )

    return (
        <>
            <Row>
                <Badge className='' bg="light" text="dark" as={Col}>
                    <p className='fs-6 text-start'>SALES TABLE</p>
                </Badge>{' '}
                <Badge className='' bg="light" text="dark" as={Col}>
                    <button className='fs-6 text-start' onClick={exportToCSV}>Export to CSV</button>
                </Badge>{' '}
            </Row>
            <DateFilter func={filteredData} url={url} />
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
        </>

    )
}

export default SalesTable