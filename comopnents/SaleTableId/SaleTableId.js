import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import DatatableComp from '../DataTableComp/DatatableComp';

const SaleTableId = ({ id }) => {
    const [data, setData] = useState([]);
    const [sale, setSale] = useState(0);
    const rid = useSelector(state => state?.report?.agentId);
    const headerData = [
        {
            cellProps: {
                style: function noRefCheck() { }
            },
            isFilterable: false,
            isSortable: true,
            prop: 'id',
            title: 'Sale ID'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'phone',
            title: 'Phone'
        },
        {
            isFilterable: false,
            isSortable: true,
            prop: 'amount',
            title: 'Amount'
        },
        {
            isFilterable: false,
            isSortable: true,
            prop: 'rechargeStatus',
            title: 'Status'
        },
        {
            isFilterable: false,
            isSortable: true,
            prop: 'createdAt',
            title: 'Last Update'
        },
    ]

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "agentsale/" + rid)
            .then((res) => res.json())
            .then((data) => {
                setData(data.message)
                setSale(data.sale)
            });
    }, [])
    return (
        <>
            <p>Total Sales : {sale}</p>
            <DatatableComp data={data} headerData={headerData} />
        </>
    )
}

export default SaleTableId
