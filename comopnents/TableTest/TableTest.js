import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOpts,
  TableBody,
  TableHeader
} from 'react-bs-datatable';
import { Col, Row, Table } from 'react-bootstrap';




const TableTest = () => {

  return (
    <>
     
   <DatatableWrapper
    body={[
        {
        date: 'March 28, 2022',
        location: 'Saturn',
        name: 'Aaren',
        score: 69,
        status: 'Active',
        username: 'aaren-50'
        },
        {
        date: 'February 04, 2022',
        location: 'Earth',
        name: 'Adriana',
        score: 97,
        status: 'Inactive',
        username: 'adriana-3'
        },
        {
        date: 'February 23, 2022',
        location: 'Jupyter',
        name: 'Alisha',
        score: 11,
        status: 'Inactive',
        username: 'alisha-18'
        },
        {
        date: 'February 09, 2022',
        location: 'Venus',
        name: 'Andeee',
        score: 27,
        status: 'unknown',
        username: 'andeee-57'
        },
        {
        date: 'March 29, 2022',
        location: 'Jupyter',
        name: 'Annabela',
        score: 28,
        status: 'Active',
        username: 'annabela-45'
        },
        {
        date: 'February 16, 2022',
        location: 'Mars',
        name: 'Aryn',
        score: 38,
        status: 'Inactive',
        username: 'aryn-53'
        },
        {
        date: 'March 30, 2022',
        location: 'Jupyter',
        name: 'Basia',
        score: 22,
        status: 'Inactive',
        username: 'basia-66'
        },
        {
        date: 'February 28, 2022',
        location: 'Mars',
        name: 'Bernardine',
        score: 94,
        status: 'Active',
        username: 'bernardine-93'
        },
        {
        date: 'March 04, 2022',
        location: 'Mars',
        name: 'Bobbi',
        score: 66,
        status: 'Active',
        username: 'bobbi-38'
        },
        {
        date: 'March 14, 2022',
        location: 'Jupyter',
        name: 'Cam',
        score: 36,
        status: 'Inactive',
        username: 'cam-59'
        },
        {
        date: 'March 22, 2022',
        location: 'Jupyter',
        name: 'Carlie',
        score: 11,
        status: 'Active',
        username: 'carlie-25'
        },
        {
        date: 'March 15, 2022',
        location: 'Mars',
        name: 'Cecile',
        score: 61,
        status: 'Active',
        username: 'cecile-9'
        },
        {
        date: 'March 13, 2022',
        location: 'Venus',
        name: 'Christal',
        score: 16,
        status: 'Active',
        username: 'christal-78'
        },
        {
        date: 'February 16, 2022',
        location: 'Earth',
        name: 'Clarice',
        score: 27,
        status: 'Active',
        username: 'clarice-68'
        },
        {
        date: 'March 13, 2022',
        location: 'Saturn',
        name: 'Corly',
        score: 84,
        status: 'Active',
        username: 'corly-99'
        },
        {
        date: 'February 12, 2022',
        location: 'Saturn',
        name: 'Danny',
        score: 75,
        status: 'Inactive',
        username: 'danny-28'
        },
        {
        date: 'March 28, 2022',
        location: 'Earth',
        name: 'Dawn',
        score: 59,
        status: 'Active',
        username: 'dawn-85'
        },
        {
        date: 'March 23, 2022',
        location: 'Earth',
        name: 'Diena',
        score: 41,
        status: 'Inactive',
        username: 'diena-93'
        },
        {
        date: 'March 22, 2022',
        location: 'Venus',
        name: 'Drucie',
        score: 92,
        status: 'Inactive',
        username: 'drucie-38'
        },
        {
        date: 'March 21, 2022',
        location: 'Jupyter',
        name: 'Edith',
        score: 56,
        status: 'Inactive',
        username: 'edith-32'
        },
        {
        date: 'March 25, 2022',
        location: 'Mars',
        name: 'Elyssa',
        score: 7,
        status: 'Inactive',
        username: 'elyssa-56'
        },
        {
        date: 'March 18, 2022',
        location: 'Venus',
        name: 'Eugine',
        score: 62,
        status: 'Inactive',
        username: 'eugine-41'
        },
        {
        date: 'February 15, 2022',
        location: 'Venus',
        name: 'Fina',
        score: 8,
        status: 'Active',
        username: 'fina-26'
        },
        {
        date: 'March 21, 2022',
        location: 'Mars',
        name: 'Fred',
        score: 38,
        status: 'Inactive',
        username: 'fred-59'
        },
        {
        date: 'March 04, 2022',
        location: 'Jupyter',
        name: 'Gertrud',
        score: 60,
        status: 'Inactive',
        username: 'gertrud-35'
        },
        {
        date: 'March 08, 2022',
        location: 'Earth',
        name: 'Gui',
        score: 73,
        status: 'Active',
        username: 'gui-63'
        },
        {
        date: 'February 18, 2022',
        location: 'Jupyter',
        name: 'Hannis',
        score: 17,
        status: 'Inactive',
        username: 'hannis-0'
        },
        {
        date: 'February 15, 2022',
        location: 'Saturn',
        name: 'Hyacinthe',
        score: 1,
        status: 'Inactive',
        username: 'hyacinthe-81'
        },
        {
        date: 'February 26, 2022',
        location: 'Earth',
        name: 'Jacquetta',
        score: 54,
        status: 'Inactive',
        username: 'jacquetta-77'
        },
        {
        date: 'February 09, 2022',
        location: 'Mars',
        name: 'Jany',
        score: 44,
        status: 'Inactive',
        username: 'jany-58'
        },
        {
        date: 'March 24, 2022',
        location: 'Venus',
        name: 'Joane',
        score: 71,
        status: 'Active',
        username: 'joane-26'
        },
        {
        date: 'February 11, 2022',
        location: 'Jupyter',
        name: 'Juliane',
        score: 60,
        status: 'Inactive',
        username: 'juliane-80'
        },
        {
        date: 'February 20, 2022',
        location: 'Venus',
        name: 'Kamilah',
        score: 15,
        status: 'Active',
        username: 'kamilah-14'
        },
        {
        date: 'February 09, 2022',
        location: 'Earth',
        name: 'Katuscha',
        score: 38,
        status: 'Inactive',
        username: 'katuscha-23'
        },
        {
        date: 'March 08, 2022',
        location: 'Mars',
        name: 'Konstance',
        score: 58,
        status: 'Active',
        username: 'konstance-84'
        },
        {
        date: 'March 09, 2022',
        location: 'Jupyter',
        name: 'Lacie',
        score: 63,
        status: 'Active',
        username: 'lacie-21'
        },
        {
        date: 'March 23, 2022',
        location: 'Jupyter',
        name: 'Leona',
        score: 24,
        status: 'Inactive',
        username: 'leona-26'
        },
        {
        date: 'March 16, 2022',
        location: 'Jupyter',
        name: 'Lita',
        score: 62,
        status: 'Active',
        username: 'lita-55'
        },
        {
        date: 'February 26, 2022',
        location: 'Earth',
        name: 'Lorie',
        score: 0,
        status: 'Inactive',
        username: 'lorie-34'
        },
        {
        date: 'March 22, 2022',
        location: 'Saturn',
        name: 'Madeleine',
        score: 42,
        status: 'Active',
        username: 'madeleine-34'
        },
        {
        date: 'February 12, 2022',
        location: 'Saturn',
        name: 'Margette',
        score: 61,
        status: 'Active',
        username: 'margette-4'
        },
        {
        date: 'February 03, 2022',
        location: 'Venus',
        name: 'Mary',
        score: 22,
        status: 'Active',
        username: 'mary-13'
        },
        {
        date: 'February 12, 2022',
        location: 'Earth',
        name: 'Maye',
        score: 30,
        status: 'Inactive',
        username: 'maye-7'
        },
        {
        date: 'March 08, 2022',
        location: 'Mars',
        name: 'Micheline',
        score: 42,
        status: 'Inactive',
        username: 'micheline-17'
        },
        {
        date: 'March 13, 2022',
        location: 'Jupyter',
        name: 'Mureil',
        score: 87,
        status: 'Active',
        username: 'mureil-18'
        },
        {
        date: 'February 11, 2022',
        location: 'Earth',
        name: 'Nariko',
        score: 73,
        status: 'Active',
        username: 'nariko-12'
        },
        {
        date: 'February 12, 2022',
        location: 'Mars',
        name: 'Nollie',
        score: 21,
        status: 'Active',
        username: 'nollie-50'
        },
        {
        date: 'March 13, 2022',
        location: 'Saturn',
        name: 'Paola',
        score: 27,
        status: 'Inactive',
        username: 'paola-66'
        },
        {
        date: 'March 05, 2022',
        location: 'Earth',
        name: 'Perry',
        score: 53,
        status: 'Active',
        username: 'perry-26'
        },
        {
        date: 'March 02, 2022',
        location: 'Mars',
        name: 'Raquela',
        score: 64,
        status: 'Active',
        username: 'raquela-90'
        },
        {
        date: 'February 03, 2022',
        location: 'Saturn',
        name: 'Robinia',
        score: 71,
        status: 'Inactive',
        username: 'robinia-57'
        },
        {
        date: 'March 08, 2022',
        location: 'Mars',
        name: 'Rosanne',
        score: 60,
        status: 'Active',
        username: 'rosanne-34'
        },
        {
        date: 'March 19, 2022',
        location: 'Earth',
        name: 'Sara-Ann',
        score: 37,
        status: 'Inactive',
        username: 'sara-ann-69'
        },
        {
        date: 'March 08, 2022',
        location: 'Mars',
        name: 'Shel',
        score: 41,
        status: 'Inactive',
        username: 'shel-44'
        },
        {
        date: 'February 24, 2022',
        location: 'Venus',
        name: 'Sidoney',
        score: 62,
        status: 'Active',
        username: 'sidoney-95'
        },
        {
        date: 'March 08, 2022',
        location: 'Mars',
        name: 'Suzette',
        score: 99,
        status: 'Inactive',
        username: 'suzette-4'
        },
        {
        date: 'February 17, 2022',
        location: 'Venus',
        name: 'Thalia',
        score: 3,
        status: 'Active',
        username: 'thalia-90'
        },
        {
        date: 'February 15, 2022',
        location: 'Saturn',
        name: 'Tobe',
        score: 0,
        status: 'Inactive',
        username: 'tobe-79'
        },
        {
        date: 'March 20, 2022',
        location: null,
        name: 'Vanessa',
        score: 17,
        status: 'Active',
        username: 'vanessa-80'
        },
        {
        date: 'February 12, 2022',
        location: 'Mars',
        name: 'Wileen',
        score: 68,
        status: 'Inactive',
        username: 'wileen-55'
        }
    ]}
    headers={[
        {
        isFilterable: true,
        isSortable: true,
        prop: 'name',
        title: 'Name'
        },
        {
        isFilterable: true,
        isSortable: true,
        prop: 'username',
        title: 'Username'
        },
        {
        isFilterable: true,
        isSortable: false,
        prop: 'location',
        title: 'Location'
        },
        {
        isFilterable: false,
        isSortable: true,
        prop: 'date',
        title: 'Last Update'
        },
        {
        cellProps: {
            style: function noRefCheck(){}
        },
        isFilterable: false,
        isSortable: true,
        prop: 'score',
        title: 'Score'
        },
        {
        alignment: {
            horizontal: 'center'
        },
        checkbox: {
            className: 'table-checkbox',
            idProp: 'name'
        },
        prop: 'checkbox'
        }
    ]}
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
        lg={4}
        xs={12}
        >
        <Filter />
        </Col>
        <Col
        className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
        lg={4}
        sm={6}
        xs={12}
        >
        {/* <PaginationOptions alwaysShowPagination /> */}
        </Col>
        <Col
        className="d-flex flex-col justify-content-end align-items-end"
        lg={4}
        sm={6}
        xs={12}
        >
        <Pagination alwaysShowPagination />
        </Col>
        <Col
        className="mt-2"
        xs={12}
        >DatatableWrapper
        {/* <BulkCheckboxControl /> */}
        </Col>
    </Row>
    {/* <[object Object]> */}
        <table className='table'>
            <TableHeader />
            <TableBody />
        </table>
    {/* </[object Object]> */}
  </DatatableWrapper>
    </>
  )
}

export default TableTest;
