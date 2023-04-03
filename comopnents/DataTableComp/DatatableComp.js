import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableHeader
} from 'react-bs-datatable';

import { Col, Row, Table } from 'react-bootstrap';

const DatatableComp = ({ data, headerData }) => {
    return (
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
    )
}

export default DatatableComp;