// import Table from 'react-bootstrap/Table';
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

const PurchaseTable = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "purchaseapireport")
            .then((res) => res.json())
            .then((data) => setData(data.data))
    }, [])

    const url = "filterpurchasereport"
    const filteredData = (data) => {
        setData(data.data)
    }

    const exportToCSV = () => {
        const csvData = data.map(row => ({
            Date: row.date,
            Distributor: row.dist,
            Amount: row.purchase,
            Payable: row.payable,
            Entry: row.entrydate,
        }));

        const csv = Papa.unparse(csvData)
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        if (link.download != undefined) {
            const url = URL.createObjectURL(blob)
            link.setAttribute('href', url)
            link.setAttribute('download', 'purchase.csv')
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
            isFilterable: false,
            isSortable: true,
            prop: 'date',
            title: 'Date'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'api',
            title: 'Distributor'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'purchase',
            title: 'Amount'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'payable',
            title: 'Payable'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'entrydate',
            title: 'Entry Date'
        }
    ]

    return (
        <>
            <Row>
                <Badge className='' bg="light" text="dark" as={Col}>
                    <p className='fs-6 text-start'>API BALANCE TABLE</p>
                </Badge>{' '}
                <Badge className='' bg="light" text="dark" as={Col}>
                    <button className='fs-6 text-start' onClick={exportToCSV}>Export to CSV</button>
                </Badge>{' '}
            </Row>
            {/* <DateFilter func={filteredData} url={url} /> */}
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


export default PurchaseTable