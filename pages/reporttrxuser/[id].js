import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../../comopnents/Sidebar/Sidebar';
import BreadCrumb from '../../comopnents/BreadCrumb/BreadCrumb';
import { useSelector } from 'react-redux';
import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableHeader
} from 'react-bs-datatable';
import { Col, Row, Table } from 'react-bootstrap';


const reporttrxuser = () => {
    const phone = useSelector(state => state?.appReport?.trxUserId);
    const [table, setTable] = useState([])

    const data = {
        username: phone,
        from_date: "N/A",
        to_date: "N/A"
    }

    const headerData = [
        {
            isFilterable: false,
            isSortable: true,
            prop: 'voucher_no',
            title: 'Trans Code'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'customer_name',
            title: 'Number'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'paid_amount',
            title: 'Operator'
        },
        {
            isFilterable: false,
            isSortable: true,
            prop: 'status',
            title: 'Service Type'
        }
    ]

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "salesman-transaction-history", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => setTable(data.transfer_info));
    }, [])
    return (
        <>
            <section className='main_content clearfix'>
                <div className='main_content-lft'>
                    <Sidebar />
                </div>
                <div className='main_content-rgt'>
                    <BreadCrumb title='Transaction Report' subtitle='Settlement' />
                    <div className='tabsWarp'>
                        <Tabs defaultActiveKey="Transfer" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="Transfer" title="Trx History">
                                <p>TEST</p>
                                <DatatableWrapper
                                    body={table}
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
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )
}

export default reporttrxuser
