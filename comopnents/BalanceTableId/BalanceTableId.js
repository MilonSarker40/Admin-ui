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
import { useSelector } from 'react-redux';
import DatatableComp from '../DataTableComp/DatatableComp';

const BalanceTableId = ({ id }) => {
    const [data, setData] = useState([]);
    const [balance, setBalance] = useState(0);
    const rid = parseInt(useSelector(state => state?.report?.agentId));
    const headerData = [
        {
            cellProps: {
                style: function noRefCheck() { }
            },
            isFilterable: false,
            isSortable: true,
            prop: 'id',
            title: 'Agent ID'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'transferedAmount',
            title: 'Credit'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'deductedAmount',
            title: 'Debit'
        },
    ]

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "agentbalancecheck/" + rid)
            .then((res) => res.json())
            .then((data) => {
                setData(data.message)
                setBalance(data.balance)
            });
    }, [])

    console.log(data);
    return (
        <>
            <p>Total Balance : {balance}</p>
            <DatatableComp data={data} headerData={headerData}/>
        </>
    )
}

export default BalanceTableId
