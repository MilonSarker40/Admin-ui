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
        id: 69,
        status: 'Active',
        username: 'aaren-50'
        },
        {
        date: 'February 04, 2022',
        location: 'Earth',
        name: 'Adriana',
        id: 97,
        status: 'Inactive',
        username: 'adriana-3'
        },
        {
        date: 'February 23, 2022',
        location: 'Jupyter',
        name: 'Alisha',
        id: 11,
        status: 'Inactive',
        username: 'alisha-18'
        },
        {
        date: 'February 09, 2022',
        location: 'Venus',
        name: 'Andeee',
        id: 27,
        status: 'unknown',
        username: 'andeee-57'
        },
        {
        date: 'March 29, 2022',
        location: 'Jupyter',
        name: 'Annabela',
        id: 28,
        status: 'Active',
        username: 'annabela-45'
        },
        {
        date: 'February 16, 2022',
        location: 'Mars',
        name: 'Aryn',
        id: 38,
        status: 'Inactive',
        username: 'aryn-53'
        },
        {
        date: 'March 30, 2022',
        location: 'Jupyter',
        name: 'Basia',
        id: 22,
        status: 'Inactive',
        username: 'basia-66'
        },
        {
        date: 'February 28, 2022',
        location: 'Mars',
        name: 'Bernardine',
        id: 94,
        status: 'Active',
        username: 'bernardine-93'
        },
        {
        date: 'March 04, 2022',
        location: 'Mars',
        name: 'Bobbi',
        id: 66,
        status: 'Active',
        username: 'bobbi-38'
        },
        {
        date: 'March 14, 2022',
        location: 'Jupyter',
        name: 'Cam',
        id: 36,
        status: 'Inactive',
        username: 'cam-59'
        },
        {
        date: 'March 22, 2022',
        location: 'Jupyter',
        name: 'Carlie',
        id: 11,
        status: 'Active',
        username: 'carlie-25'
        },
        {
        date: 'March 15, 2022',
        location: 'Mars',
        name: 'Cecile',
        id: 61,
        status: 'Active',
        username: 'cecile-9'
        },
        {
        date: 'March 13, 2022',
        location: 'Venus',
        name: 'Christal',
        id: 16,
        status: 'Active',
        username: 'christal-78'
        },
        {
        date: 'February 16, 2022',
        location: 'Earth',
        name: 'Clarice',
        id: 27,
        status: 'Active',
        username: 'clarice-68'
        },
        {
        date: 'March 13, 2022',
        location: 'Saturn',
        name: 'Corly',
        id: 84,
        status: 'Active',
        username: 'corly-99'
        },
        {
        date: 'February 12, 2022',
        location: 'Saturn',
        name: 'Danny',
        id: 75,
        status: 'Inactive',
        username: 'danny-28'
        },
        {
        date: 'March 28, 2022',
        location: 'Earth',
        name: 'Dawn',
        id: 59,
        status: 'Active',
        username: 'dawn-85'
        },
        {
        date: 'March 23, 2022',
        location: 'Earth',
        name: 'Diena',
        id: 41,
        status: 'Inactive',
        username: 'diena-93'
        },
        {
        date: 'March 22, 2022',
        location: 'Venus',
        name: 'Drucie',
        id: 92,
        status: 'Inactive',
        username: 'drucie-38'
        },
        {
        date: 'March 21, 2022',
        location: 'Jupyter',
        name: 'Edith',
        id: 56,
        status: 'Inactive',
        username: 'edith-32'
        },
        {
        date: 'March 25, 2022',
        location: 'Mars',
        name: 'Elyssa',
        id: 7,
        status: 'Inactive',
        username: 'elyssa-56'
        },
        {
        date: 'March 18, 2022',
        location: 'Venus',
        name: 'Eugine',
        id: 62,
        status: 'Inactive',
        username: 'eugine-41'
        },
        {
        date: 'February 15, 2022',
        location: 'Venus',
        name: 'Fina',
        id: 8,
        status: 'Active',
        username: 'fina-26'
        },
        {
        date: 'March 21, 2022',
        location: 'Mars',
        name: 'Fred',
        id: 38,
        status: 'Inactive',
        username: 'fred-59'
        },
        {
        date: 'March 04, 2022',
        location: 'Jupyter',
        name: 'Gertrud',
        id: 60,
        status: 'Inactive',
        username: 'gertrud-35'
        },
        {
        date: 'March 08, 2022',
        location: 'Earth',
        name: 'Gui',
        id: 73,
        status: 'Active',
        username: 'gui-63'
        },
        {
        date: 'February 18, 2022',
        location: 'Jupyter',
        name: 'Hannis',
        id: 17,
        status: 'Inactive',
        username: 'hannis-0'
        },
        {
        date: 'February 15, 2022',
        location: 'Saturn',
        name: 'Hyacinthe',
        id: 1,
        status: 'Inactive',
        username: 'hyacinthe-81'
        },
        {
        date: 'February 26, 2022',
        location: 'Earth',
        name: 'Jacquetta',
        id: 54,
        status: 'Inactive',
        username: 'jacquetta-77'
        },
        {
        date: 'February 09, 2022',
        location: 'Mars',
        name: 'Jany',
        id: 44,
        status: 'Inactive',
        username: 'jany-58'
        },
        {
        date: 'March 24, 2022',
        location: 'Venus',
        name: 'Joane',
        id: 71,
        status: 'Active',
        username: 'joane-26'
        },
        {
        date: 'February 11, 2022',
        location: 'Jupyter',
        name: 'Juliane',
        id: 60,
        status: 'Inactive',
        username: 'juliane-80'
        },
        {
        date: 'February 20, 2022',
        location: 'Venus',
        name: 'Kamilah',
        id: 15,
        status: 'Active',
        username: 'kamilah-14'
        },
        {
        date: 'February 09, 2022',
        location: 'Earth',
        name: 'Katuscha',
        id: 38,
        status: 'Inactive',
        username: 'katuscha-23'
        },
        {
        date: 'March 08, 2022',
        location: 'Mars',
        name: 'Konstance',
        id: 58,
        status: 'Active',
        username: 'konstance-84'
        },
        {
        date: 'March 09, 2022',
        location: 'Jupyter',
        name: 'Lacie',
        id: 63,
        status: 'Active',
        username: 'lacie-21'
        },
        {
        date: 'March 23, 2022',
        location: 'Jupyter',
        name: 'Leona',
        id: 24,
        status: 'Inactive',
        username: 'leona-26'
        },
        {
        date: 'March 16, 2022',
        location: 'Jupyter',
        name: 'Lita',
        id: 62,
        status: 'Active',
        username: 'lita-55'
        },
        {
        date: 'February 26, 2022',
        location: 'Earth',
        name: 'Lorie',
        id: 0,
        status: 'Inactive',
        username: 'lorie-34'
        },
        {
        date: 'March 22, 2022',
        location: 'Saturn',
        name: 'Madeleine',
        id: 42,
        status: 'Active',
        username: 'madeleine-34'
        },
        {
        date: 'February 12, 2022',
        location: 'Saturn',
        name: 'Margette',
        id: 61,
        status: 'Active',
        username: 'margette-4'
        },
        {
        date: 'February 03, 2022',
        location: 'Venus',
        name: 'Mary',
        id: 22,
        status: 'Active',
        username: 'mary-13'
        },
        {
        date: 'February 12, 2022',
        location: 'Earth',
        name: 'Maye',
        id: 30,
        status: 'Inactive',
        username: 'maye-7'
        },
        {
        date: 'March 08, 2022',
        location: 'Mars',
        name: 'Micheline',
        id: 42,
        status: 'Inactive',
        username: 'micheline-17'
        },
        {
        date: 'March 13, 2022',
        location: 'Jupyter',
        name: 'Mureil',
        id: 87,
        status: 'Active',
        username: 'mureil-18'
        },
        {
        date: 'February 11, 2022',
        location: 'Earth',
        name: 'Nariko',
        id: 73,
        status: 'Active',
        username: 'nariko-12'
        },
        {
        date: 'February 12, 2022',
        location: 'Mars',
        name: 'Nollie',
        id: 21,
        status: 'Active',
        username: 'nollie-50'
        },
        {
        date: 'March 13, 2022',
        location: 'Saturn',
        name: 'Paola',
        id: 27,
        status: 'Inactive',
        username: 'paola-66'
        },
        {
        date: 'March 05, 2022',
        location: 'Earth',
        name: 'Perry',
        id: 53,
        status: 'Active',
        username: 'perry-26'
        },
        {
        date: 'March 02, 2022',
        location: 'Mars',
        name: 'Raquela',
        id: 64,
        status: 'Active',
        username: 'raquela-90'
        },
        {
        date: 'February 03, 2022',
        location: 'Saturn',
        name: 'Robinia',
        id: 71,
        status: 'Inactive',
        username: 'robinia-57'
        },
        {
        date: 'March 08, 2022',
        location: 'Mars',
        name: 'Rosanne',
        id: 60,
        status: 'Active',
        username: 'rosanne-34'
        },
        {
        date: 'March 19, 2022',
        location: 'Earth',
        name: 'Sara-Ann',
        id: 37,
        status: 'Inactive',
        username: 'sara-ann-69'
        },
        {
        date: 'March 08, 2022',
        location: 'Mars',
        name: 'Shel',
        id: 41,
        status: 'Inactive',
        username: 'shel-44'
        },
        {
        date: 'February 24, 2022',
        location: 'Venus',
        name: 'Sidoney',
        id: 62,
        status: 'Active',
        username: 'sidoney-95'
        },
        {
        date: 'March 08, 2022',
        location: 'Mars',
        name: 'Suzette',
        id: 99,
        status: 'Inactive',
        username: 'suzette-4'
        },
        {
        date: 'February 17, 2022',
        location: 'Venus',
        name: 'Thalia',
        id: 3,
        status: 'Active',
        username: 'thalia-90'
        },
        {
        date: 'February 15, 2022',
        location: 'Saturn',
        name: 'Tobe',
        id: 0,
        status: 'Inactive',
        username: 'tobe-79'
        },
        {
        date: 'March 20, 2022',
        location: null,
        name: 'Vanessa',
        id: 17,
        status: 'Active',
        username: 'vanessa-80'
        },
        {
        date: 'February 12, 2022',
        location: 'Mars',
        name: 'Wileen',
        id: 68,
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
        prop: 'id',
        title: 'ID'
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
        className="d-flex flex-col justify-content-end align-items-end firstletter1"
        lg={4}
        xs={12}
        >
        <Filter />
        </Col>
        <Col
        className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0 firstletter1"
        lg={4}
        sm={6}
        xs={12}
        >
        {/* <PaginationOptions alwaysShowPagination /> */}
        </Col>
        <Col
        className="d-flex flex-col justify-content-end align-items-end tablePagi"
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
