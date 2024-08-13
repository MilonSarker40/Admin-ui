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

const CollectionTable = () => {
    const [data, setData] = useState([])
    const [debit, setDebit] = useState(0)
    const [credit, setCredit] = useState(0)

    const headerData = [
        {
            cellProps: {
                style: function noRefCheck() { }
            },
            isFilterable: true,
            isSortable: true,
            prop: 'userId',
            title: 'User Id'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'user',
            title: 'User'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'debit',
            title: 'Debit'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'credit',
            title: 'Credit'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'note',
            title: 'Note'
        },
        {
            isFilterable: false,
            isSortable: true,
            prop: 'createdAt',
            title: 'Date'
        },
    ]

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "collection")
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
                setDebit(data.total_debit)
                setCredit(data.total_credit)
            });
    }, [])

    const url = "filtercollection"
    const filteredData = (data) => {
        setData(data.data)
        setDebit(data.total_debit)
        setCredit(data.total_credit)
    }

    const exportToCSV = () => {
        const csvData = data.map(row => ({
            UserId: row.userId,
            User: row.user,
            Debit: row.debit,
            Credit: row.credit,
            Note: row.note,
            Date: row.createdAt
        }));

        const csv = Papa.unparse(csvData)
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        if (link.download != undefined) {
            const url = URL.createObjectURL(blob)
            link.setAttribute('href', url)
            link.setAttribute('download', 'collection.csv')
            link.style.visibility = 'hidden'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }

    return (
        <>
            <Row>
                <Badge className='' bg="light" text="dark" as={Col}>
                    <p className='fs-6 text-start'>COLLECTION TABLE</p>
                </Badge>{' '}
                <Badge className='' bg="light" text="dark" as={Col}>
                    <button className='fs-6 text-start' onClick={exportToCSV}>Export to CSV</button>
                </Badge>{' '}
            </Row>
            <DateFilter func={filteredData} url={url} />
            <p>Total Debit : {debit} AED</p>
            <p>Total Credit : {credit} AED</p>
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

export default CollectionTable