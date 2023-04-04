import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrxLink from '../Trxdt/TrxLink';
import { useSelector } from 'react-redux';
import DatatableComp from '../DataTableComp/DatatableComp';

const EarningTableId = ({ id }) => {
    const rid = parseInt(useSelector(state => state?.report?.agentId));
    const [data, setData] = useState([]);
    const [earn, setEarn] = useState(0);

    for (let i = 0; i < data.length; i++) {
        let comp = <TrxLink trxId={data[i].transactionId} />
        data[i].link = comp
    }
    const headerData = [
        {
            cellProps: {
                style: function noRefCheck() { }
            },
            isFilterable: false,
            isSortable: true,
            prop: 'id',
            title: 'ID'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'transactionId',
            title: 'Trx No'
        },
        {
            isFilterable: true,
            isSortable: true,
            prop: 'link',
            title: 'Trx Detail'
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
            prop: 'createdAt',
            title: 'Last Update'
        },
    ]

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "agentearning/" + rid)
            .then((res) => res.json())
            .then((data) => {
                setData(data.message)
                setEarn(data.earn)
            });
    }, [])
    return (
        <>
            <p>Total Earned : {earn}</p>
            <DatatableComp data={data} headerData={headerData} />
        </>
    )
}

export default EarningTableId
