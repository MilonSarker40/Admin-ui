import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import DatatableComp from '../DataTableComp/DatatableComp';

const AgentReportTable = ({ id }) => {
    const rid = useSelector(state => state?.report?.agentId);
    const [data, setData] = useState([]);
    const [due, setDue] = useState(0);
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
            prop: 'debit',
            title: 'Debit'
        },
        {
            isFilterable: false,
            isSortable: true,
            prop: 'credit',
            title: 'Credit'
        },
        {
            isFilterable: false,
            isSortable: true,
            prop: 'note',
            title: 'Note'
        }
    ]

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "agentdues/" + rid)
            .then((res) => res.json())
            .then((data) => {
                setData(data.message)
                setDue(data.due)
            });
        // setData(bodyData);
    }, [])
    return (
        <>
            <p>Remaing Due to withdraw : {due}</p>
            <DatatableComp data={data} headerData={headerData} />
        </>
    )
}

export default AgentReportTable
